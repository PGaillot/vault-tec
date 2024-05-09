import { Component, ElementRef, ViewChild } from '@angular/core';
import { DiceComponent } from '../../../components/dice/dice.component';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-luck-game-page',
  standalone: true,
  imports: [DiceComponent, ReactiveFormsModule],
  templateUrl: './luck-game-page.component.html',
  styleUrl: './luck-game-page.component.scss',
})
export class LuckGamePageComponent {
  @ViewChild('firstDice')firstDiceRef! : DiceComponent
  @ViewChild('secondDice')secondDiceRef! : DiceComponent
  @ViewChild('thirdDice')thirdDiceRef! : DiceComponent

  maxThrow: number = 3;
  throwRemainingCounter: number = this.maxThrow;
  gameStarted : boolean = false
  guessLocked : boolean = false
  guessedValues : number[] = []

  guessForm = new FormGroup({
    firstGuess: new FormControl({value:1, disabled : false},  [Validators.required, Validators.min(1), Validators.max(6)]),
    secondGuess: new FormControl({value:3, disabled : false}, [Validators.required, Validators.min(1), Validators.max(6)]),
    thirdGuess: new FormControl({value:2, disabled : false}, [Validators.required, Validators.min(1), Validators.max(6)]),
  });

  getDiceValue(value : number){
    console.log(value);
  }
  keepDice(){
    this.guessLocked = true
  }

  throwDices(){
    if(this.throwRemainingCounter > 0){
      this.firstDiceRef.throwDice()
      setTimeout(() => {
        this.secondDiceRef.throwDice()
        setTimeout(()=> {
          this.thirdDiceRef.throwDice()
        },500)
      },300)
      this.throwRemainingCounter -= 1
    }
  }

  onSubmit(){
    this.guessForm.get('firstGuess')?.disable()
    this.guessForm.get('secondGuess')?.disable()
    this.guessForm.get('thirdGuess')?.disable()
    this.gameStarted = true
      this.guessedValues = [this.guessForm.get(['firstGuess'])!.value, this.guessForm.get(['secondGuess'])!.value, this.guessForm.get(['thirdGuess'])!.value ]
    console.log('value choisies:',this.guessedValues);
  }
}
