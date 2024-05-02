import { Component, Input } from '@angular/core'
import { PerksType } from '../../enums/perks-type'
import { NgClass } from '@angular/common'
import {
  trigger,
  style,
  state,
  transition,
  animate,
} from '@angular/animations';

@Component({
  selector: 'app-perk-card',
  standalone: true,
  imports: [NgClass ],
  templateUrl: './perk-card.component.html',
  styleUrl: './perk-card.component.scss',
  animations:[
        // version simple
        trigger('openClose', [
          state(
            'open',
            style({
              transform:'rotateY(180deg)'
            })
          ),
          state(
            'closed',
            style({
              transform:'rotateY(0deg)',
            })
          ),
          transition('* => *', [animate('0.5s')]),
        ]),
  ]
})
export class PerkCardComponent {
  @Input() content!: string
  @Input() char!: string
  perkName!: string
  isReveal:boolean = false;

  constructor() {

  }



  toggleCard(){
    this.isReveal = !this.isReveal;
  }

  ngOnInit(): void {
    if(Object.keys(PerksType).includes(this.char)){
      this.perkName = PerksType[this.char as keyof typeof PerksType];
    } else {
      console.error('No perk find with this key :',this.char);
    }
  }
}
