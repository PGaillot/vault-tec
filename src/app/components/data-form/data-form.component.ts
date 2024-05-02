import { Component } from '@angular/core'
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms'
import { ActivatedRoute, Router, RouterLink } from '@angular/router'
import { FormService } from '../../services/form.service'

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

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formService: FormService,
  ) {}

  dataForm = new FormGroup({
    name: new FormControl(''),
    birthyear: new FormControl(''),
  })

  onSubmit() {
    if (this.dataForm.valid) {
      const value: DataFromData = { name: this.dataForm.get(['name'])?.value , birthyear:this.dataForm.get(['birthyear'])?.value}
      const key: string = this.formService.generateKeyFromData(value)
      this.router.navigate(['become-special'], {
        queryParams: {
          ...{'key':key}
        },
        relativeTo: this.route.parent,
      })
    }
  }
}
