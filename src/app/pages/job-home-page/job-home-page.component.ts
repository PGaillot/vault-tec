import { Component } from '@angular/core'
import { RouterLink } from '@angular/router'
import { SpecialAccountService } from '../../services/special-account.service'
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms'
import { SpecialAccount } from '../../models/special.model'

@Component({
  selector: 'app-job-home-page',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './job-home-page.component.html',
  styleUrl: './job-home-page.component.scss',
})
export class JobHomePageComponent {
  key: FormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(1),
  ])

  constructor(private accountSevice: SpecialAccountService) {}

  errorCount: number = 0
  errorMsg: string = 'entrez une [CLEF-SPECIAL] valide'
  keyError: boolean = true
  loading:boolean = false
  username:string = '***@#%/&***'
  onSubmitKey() {

    const randomLoading:number = Math.floor(Math.random() * (1500 - 500 + 1)) + 500
    this.loading = true
    const inputText: string = this.key.value
    setTimeout(() => {
      try {
        const specialAccount: SpecialAccount = this.accountSevice.decodeSpecialKey(inputText)
        if (specialAccount) {
          this.username  = specialAccount.name
          this.keyError = false
          this.loading = false  
        }
      } catch (error) {
        this.key.setValue('')
        this.loading = false  
        this.errorCount += 1
        this.errorMsg = `$CLEF-SPECIAL INVALIDE`
      }
    }, randomLoading)
  }
}
