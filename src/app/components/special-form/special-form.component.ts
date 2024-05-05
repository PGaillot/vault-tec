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
import { Perk } from '../../models/perk.model'
import { PERKS } from '../../data/perks.data'

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
  selectedPerk : Perk | undefined
  perks:Perk[] = PERKS
  special: SPECIAL = {
    S: 0,
    P: 0,
    E: 0,
    C: 0,
    I: 0,
    A: 0,
    L: 0
  }

  specialKeys: (keyof SPECIAL)[] = this.perkService.specialKeys;


  constructor(
    private formService: FormService,
    private router: Router,
    private route: ActivatedRoute,
    private perkService:PerkService,
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
    this.selectedPerk = this.perks.find((p:Perk) => p.char === event)
  }

  updatePeck(event: { perk: string; data: number }) {
    if (this.specialPointsCount <= 0 && event.data > 0) return
    type PerkKey = keyof typeof PerksType;
    if( Object.keys(PerksType).includes(event.perk)){
      const perkKey: PerkKey = event.perk as PerkKey;
      this.special[perkKey] += event.data
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
