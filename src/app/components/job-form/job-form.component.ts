import { Component } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { SpecialAccountService } from '../../services/special-account.service'
import { SpecialAccount } from '../../models/special.model'

@Component({
  selector: 'app-job-form',
  standalone: true,
  imports: [],
  templateUrl: './job-form.component.html',
  styleUrl: './job-form.component.scss',
})
export class JobFormComponent {
  specialAccount!: SpecialAccount

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private accountService: SpecialAccountService,
  ) {
    this.route.queryParams.subscribe({
      next: (value) => {
        try {
          const key: string = value['SPECIALkey']
          this.specialAccount = this.accountService.decodeSpecialKey(key)

        } catch (error) {
          console.error(error)
          this.router.navigate(['not-found'])
        }
      },
      error: (error) => {
        console.error(error)
        this.router.navigate(['not-found'])
      },
    })
  }

  ngOnInit(): void {}
}
