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
  @ViewChild('firstDice') firstDiceRef!: DiceComponent;
  @ViewChild('secondDice') secondDiceRef!: DiceComponent;
  @ViewChild('thirdDice') thirdDiceRef!: DiceComponent;

  maxThrow: number = 5;
  throwRemainingCounter: number = this.maxThrow;
  gameStarted: boolean = false;
  rollLockArray: boolean[] = [false, false, false];
  rollLocked: number[] = [];
  guessLocked: boolean = false;
  guessedValues: number[] = [];

  guessForm = new FormGroup({
    firstGuess: new FormControl({ value: 1, disabled: false }, [
      Validators.required,
      Validators.min(1),
      Validators.max(6),
    ]),
    secondGuess: new FormControl({ value: 3, disabled: false }, [
      Validators.required,
      Validators.min(1),
      Validators.max(6),
    ]),
    thirdGuess: new FormControl({ value: 2, disabled: false }, [
      Validators.required,
      Validators.min(1),
      Validators.max(6),
    ]),
  });

  getDiceValue(diceId: number) {
    switch (diceId) {
      case 0:
        this.rollLocked = [...this.rollLocked, this.firstDiceRef.value];
        break;
      case 1:
        this.rollLocked = [...this.rollLocked, this.secondDiceRef.value];
        break;
      case 2:
        this.rollLocked = [...this.rollLocked, this.thirdDiceRef.value];
        break;
      default:
        console.error('keep dice error');
        break;
    }
  }
  
  checkVictory() {
    let win : boolean = true
    this.guessedValues.forEach((value) => {
      if(!this.rollLocked.includes(value)) win = false
    })
    if (win) {
      console.log('VICTOIRE', this.rollLocked);
    } else {
      console.log('BOUHHHHH', this.rollLocked);
    }
  }

  keepDice(diceId: number) {
    this.rollLockArray[diceId] = true;
    this.getDiceValue(diceId);
    if(!this.rollLockArray.includes(false)){
      this.gameFinished()
    }
  }
  gameFinished(){
    for (let i = 0; i < this.rollLockArray.length; i++) {
      if (!this.rollLockArray[i]) {          
        this.getDiceValue(i);
      }
    }
    this.checkVictory();
  }

  throwDices() {
    if (this.throwRemainingCounter > 0 && this.rollLockArray.includes(false)) {
      this.firstDiceRef.throwDice();

      this.secondDiceRef.throwDice();

      this.thirdDiceRef.throwDice();

      this.throwRemainingCounter -= 1;
      if(this.throwRemainingCounter === 0){
        this.gameFinished()
      }
    } 
  }

  onSubmit() {
    this.guessForm.get('firstGuess')?.disable();
    this.guessForm.get('secondGuess')?.disable();
    this.guessForm.get('thirdGuess')?.disable();
    this.gameStarted = true;
    this.guessedValues = [
      this.guessForm.get(['firstGuess'])!.value,
      this.guessForm.get(['secondGuess'])!.value,
      this.guessForm.get(['thirdGuess'])!.value,
    ];
    console.log('value choisies:', this.guessedValues);
  }
}
