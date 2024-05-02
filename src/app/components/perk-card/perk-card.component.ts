import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-perk-card',
  standalone: true,
  imports: [],
  templateUrl: './perk-card.component.html',
  styleUrl: './perk-card.component.scss',
})
export class PerkCardComponent {
  @Input() content!: string;
  @Input() char!: string;


  
}
