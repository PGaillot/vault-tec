import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SpecialAccountService } from '../../services/special-account.service';
import { QuestionService } from '../../services/question.service';

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


  constructor(
    private questionService:QuestionService
  ){}

  @Input() value: number = 1;
  @Input() locked!: boolean 
  @Output() valueChange:EventEmitter<number> = new EventEmitter<number>();

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

  throwDice(){
    if(this.locked) return
      let int:number = 100; // nombres de millisecondes 
      const interval =  setInterval(() => {
        this.value = this.questionService.getRandom(1, 6)
        int = int + (int / 2)
        if(int > 2000){
          clearInterval(interval)
          this.valueChange.emit(this.value)
        }
      }, int)
    

  }
}
