import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormService } from '../../services/form.service';
import { SpecialFormData } from '../special-form/special-form.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SpecialAccount } from '../../models/special.model';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';
import { SpecialAccountService } from '../../services/special-account.service';

@Component({
  selector: 'app-consent-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './consent-form.component.html',
  styleUrl: './consent-form.component.scss'
})
export class ConsentFormComponent {
  
  params!:SpecialFormData;
  consentForm = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    consent: new FormControl(false, [Validators.requiredTrue]),
  })
dataForm: any;
  
  constructor(private route:ActivatedRoute, private formService:FormService, private router:Router, private specialAccountService:SpecialAccountService){
    this.route.queryParams.subscribe({
      next: (value) => {
        try {
          if (value){
            this.params = this.formService.decodeSpecialFormFormKey(value['specialFormKey'])  
          } else {
            throw new Error('Empty key');
          }
        } catch (error) {
          console.error(error)
          this.router.navigate(['not-found'])
        }
      },
      error: (error) => {console.error(error)},
    })
  }

  onSubmit(e:Event) {
    e.preventDefault()
    if(this.consentForm.valid){
      const specialAccount:SpecialAccount = {
        ...this.params,
        email:this.consentForm.get(['email'])?.value
      }
      const specialKey:string = this.specialAccountService.generateSpecialKey(specialAccount) 
      emailjs.send('service_va73iwz', 'template_w3kpl5n', {key:specialKey, to_email: specialAccount.email,to_name:specialAccount.name}, {
        publicKey:'FJU4JROMlpe1E6kKA'
      }).then((res) => {
        if(res.status === 200) {
          this.router.navigate(['home'], {relativeTo:this.route.firstChild})
        } else {
          console.error(res)
        }
      }).catch((e) => console.error(e))
    }
  }
}
