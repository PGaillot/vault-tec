import { Component, Pipe } from '@angular/core'
import { SpecialCharCounterComponent } from '../special-char-counter/special-char-counter.component'
import { SPECIAL, SpecialAccount } from '../../models/special.model'
import { SpecialAccountService } from '../../services/special-account.service'
import { ActivatedRoute, Router } from '@angular/router'
import { DataFromData } from '../data-form/data-form.component'
import { FormService } from '../../services/form.service'
import { PerksType } from '../../enums/perks-type'
import { UpperCasePipe } from '@angular/common'
import { PerkService } from '../../services/perk.service'

export interface SpecialFormData {
  special: SPECIAL
  createdAt: Date
  name: string
  birthyear: number
}

@Component({
  selector: 'app-special-form',
  standalone: true,
  imports: [SpecialCharCounterComponent, UpperCasePipe],
  templateUrl: './special-form.component.html',
  styleUrl: './special-form.component.scss',
})
export class SpecialFormComponent {
  params!: DataFromData
  specialPointsCount: number = 0
  maxSpecialPointsCount: number = 0
  thisYear: number = new Date().getFullYear()
  perkName : string = ""
  special: SPECIAL = {
    strong: 0,
    perception: 0,
    endurance: 0,
    charisma: 0,
    intelligence: 0,
    agility: 0,
    luck: 0,
  }

  constructor(
    private formService: FormService,
    private router: Router,
    private route: ActivatedRoute,
    private perkService:PerkService
  ) {
    this.route.queryParams.subscribe({
      next: (value) => {
        try {
          if (value) {
            this.params = this.formService.decodeDataFormKey(value['key'])
            this.maxSpecialPointsCount =
              this.thisYear - this.params.birthyear + 1
            this.specialPointsCount = this.maxSpecialPointsCount
          } else {
            throw new Error('Empty key')
          }
        } catch (error) {
          console.error(error)
          this.router.navigate(['not-found'])
        }
      },
      error: (error) => {
        console.error(error)
      },
    })
  }

  charHover(event : string){
    this.perkName = this.perkService.getPerkByChar(event)

  }


  updatePeck(event: { perk: string; data: number }) {
    if (this.specialPointsCount <= 0 && event.data > 0) return

    switch (event.perk) {
      case 'S':
        this.special.strong += event.data
        break

      case 'P':
        this.special.perception += event.data
        break

      case 'E':
        this.special.endurance += event.data
        break

      case 'C':
        this.special.charisma += event.data
        break

      case 'I':
        this.special.intelligence += event.data
        break

      case 'A':
        this.special.agility += event.data
        break

      case 'L':
        this.special.luck += event.data
        break

      default:
        break
    }

    if (event.data > 0) {
      this.specialPointsCount -= 1
    } else {
      this.specialPointsCount += 1
    }
  }

  send() {
    const specialFormData: SpecialFormData = {
      special: this.special,
      createdAt: new Date(),
      name: this.params.name,
      birthyear: this.params.birthyear,
    }
    const specialFormKey: string = this.formService.generateKeyFromSpecialForm(
      specialFormData,
    )    
    this.router.navigate(['consent'], { queryParams: { specialFormKey } , relativeTo:this.route.parent})
  }

  ngOnInit(): void {}
}
