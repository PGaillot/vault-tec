import { Component } from '@angular/core'
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms'
import { ActivatedRoute, Router, RouterLink } from '@angular/router'
import { FormService } from '../../services/form.service'
import { SoundsService } from '../../services/sounds.service'

export interface DataFromData {
  name: string
  birthyear: number
}

@Component({
  selector: 'app-data-form',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './data-form.component.html',
  styleUrl: './data-form.component.scss',
})
export class DataFormComponent {
  thisYear: number = new Date().getFullYear()
  legalAge: number = 18

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formService: FormService,
    private soundsServices:SoundsService
  ) {}

  dataForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(30),
    ]),
    birthyear: new FormControl('', [
      Validators.required,
      Validators.min(this.thisYear - 100),
      Validators.max(this.thisYear - this.legalAge),
    ]),
  })

  onSubmit() {
    this.soundsServices.playAudioClick();
    const value: DataFromData = {
      name: this.dataForm.get(['name'])?.value,
      birthyear: this.dataForm.get(['birthyear'])?.value,
    }
    const key: string = this.formService.generateKeyFromData(value)
    this.router.navigate(['become-special'], {
      queryParams: {
        ...{ key: key },
      },
      relativeTo: this.route.parent,
    })
  }
}
