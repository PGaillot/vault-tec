import { Component } from '@angular/core';
import { DiceComponent } from '../../../components/dice/dice.component';

@Component({
  selector: 'app-luck-game-page',
  standalone: true,
  imports: [DiceComponent],
  templateUrl: './luck-game-page.component.html',
  styleUrl: './luck-game-page.component.scss'
})
export class LuckGamePageComponent {

}
