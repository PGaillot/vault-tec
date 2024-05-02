import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormService } from '../../services/form.service';
import { SpecialFormData } from '../special-form/special-form.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { SpecialAccount } from '../../models/special.model';

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
    email: new FormControl(''),
  })
  
  constructor(private route:ActivatedRoute, private formService:FormService, private router:Router){
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

  onSubmit() {


    if(this.consentForm.valid){

      const specialAccount:SpecialAccount = {
        ...this.params,
        email:this.consentForm.get(['email'])?.value
      }
      console.log(specialAccount);
    }






  }
}
