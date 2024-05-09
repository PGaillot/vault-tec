import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

export enum DiceValues {
  ONE = 'one',
  TWO = 'two',
  THREE = 'tree',
  FOUR = 'four',
  FIVE = 'five',
  SIX = 'six',
  ERROR = 'error',
}

@Component({
  selector: 'app-dice',
  standalone: true,
  imports: [NgClass],
  templateUrl: './dice.component.html',
  styleUrl: './dice.component.scss',
})
export class DiceComponent {


  @Input() value: number = 1;

  get diceValue(): DiceValues {
    switch (this.value) {
      case 1:
        return DiceValues.ONE;
      case 2:
        return DiceValues.TWO;
      case 3:
        return DiceValues.THREE;
      case 4:
        return DiceValues.FOUR;
      case 5:
        return DiceValues.FIVE;
      case 6:
        return DiceValues.SIX;
      default:
        return DiceValues.ERROR;
    }
  }
}
