import { Component } from '@angular/core'
import { ActivatedRoute, Router, RouterLink } from '@angular/router'
import { SpecialAccountService } from '../../services/special-account.service'
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms'
import { SpecialAccount } from '../../models/special.model'
import { LogoLoaderComponent } from '../../components/logo-loader/logo-loader.component'

@Component({
  selector: 'app-job-home-page',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, LogoLoaderComponent],
  templateUrl: './job-home-page.component.html',
  styleUrl: './job-home-page.component.scss',
})
export class JobHomePageComponent {
  keyFormControl: FormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(1),
  ])

  constructor(
    private accountSevice: SpecialAccountService,
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  errorCount: number = 0
  errorMsg: string = 'entrez une [CLEF-SPECIAL] valide'
  keyError: boolean = true
  loading: boolean = false
  username: string = '***@#%/&***'
  specialAccount: SpecialAccount | undefined
  key: string | undefined

  onSubmitKey() {
    const randomLoading: number =
      Math.floor(Math.random() * (1500 - 500 + 1)) + 500
    this.loading = true
    const inputText: string = this.keyFormControl.value
    setTimeout(() => {
      try {
        const specialAccount: SpecialAccount = this.accountSevice.decodeSpecialKey(
          inputText,
        )
        if (specialAccount) {
          this.specialAccount = specialAccount
          this.username = specialAccount.name
          this.keyError = false
          this.loading = false
          this.key = inputText
        }
      } catch (error) {
        this.keyFormControl.setValue('')
        this.loading = false
        this.errorCount += 1
        this.errorMsg = `$CLEF-SPECIAL INVALIDE`
      }
    }, randomLoading)
  }

  navToJobForm() {
    this.router.navigate(['find-a-job'], {
      relativeTo:this.route.parent,
      queryParams: { SPECIALkey: this.key },
    })
  }

  navToError() {
    this.router.navigate(['error'], {
      relativeTo:this.route.parent,
    })
  }
}
