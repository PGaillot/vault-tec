import { Component } from '@angular/core'
import { SpecialCharCounterComponent } from '../special-char-counter/special-char-counter.component'
import { SPECIAL, SpecialAccount } from '../../models/special.model'
import { SpecialAccountService } from '../../services/special-account.service'

@Component({
  selector: 'app-special-form',
  standalone: true,
  imports: [SpecialCharCounterComponent],
  templateUrl: './special-form.component.html',
  styleUrl: './special-form.component.scss',
})
export class SpecialFormComponent {
  specialPointsCount: number = 33
  maxSpecialPointsCount: number = 33

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
    private specialAccountService:SpecialAccountService
  ){}

  updatePeck(event: { perk: string; data: number }) {
    if(this.specialPointsCount <= 0 && event.data > 0) return


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

      if(event.data > 0 ){
        this.specialPointsCount -= 1
      } else{
        this.specialPointsCount += 1
      }
  } 


  send(){

    const specialAccount:SpecialAccount = {
      special:this.special,
      createdAt: new Date(),
      mail:'test@mail.fr',
      name:'Pierre Gaillot',
      birthyear:1990,
    }
    
    const specialKey:string =  this.specialAccountService.generateSpecialKey(specialAccount)
    console.log(specialKey);
    console.log(this.specialAccountService.decodeSpecialKey(specialKey));
    
    



  }
}
