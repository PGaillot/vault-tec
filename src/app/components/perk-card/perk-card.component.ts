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
import { PerkService } from '../../services/perk.service';

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

  constructor(private perkService:PerkService) {}

  toggleCard(){
    this.isReveal = !this.isReveal;
  }

  ngOnInit(): void {
    this.perkName = this.perkService.getPerkByChar(this.char)
  }
}
