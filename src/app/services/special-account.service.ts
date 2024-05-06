import { Injectable } from '@angular/core';
import { SPECIAL, SpecialAccount } from '../models/special.model';
import { QuestionService } from './question.service';

@Injectable({
  providedIn: 'root',
})
export class SpecialAccountService {
  symbols: string[] = [
    '#',
    '$',
    '%',
    '<',
    '>',
    ':',
    '_',
    '|',
    '*',
    ';',
    '/',
    '[',
    ']',
    '?',
    '!',
    '-',
    '+',
    '^',
    '¤',
  ];
  alphabet: string[] = 'abcdefghijklmnopqrstuvwxyz'.split('');
  constructor(private randomService: QuestionService) {}

  generateSpecialKey(specialAccount: SpecialAccount): string {
    console.log(this.cryptSpecial(specialAccount.special));

    return btoa(JSON.stringify(specialAccount));
  }

  cryptSpecial(special: SPECIAL) {
    let perks: number[] = [];
    let cryptedPerks: any[] = [];

    Object.keys(special).forEach((key: string) => {
      perks = [...perks, special[key as keyof typeof special]];
    });
    console.log(perks);

    perks.forEach((n: number) => {
      let crypt: any = (n + 2).toString(16);
      if (crypt.length < 2) {
        const random = this.randomService.getRandom(0, this.symbols.length - 1);
        crypt = crypt + this.symbols[random];
      }
      cryptedPerks.push(crypt);
    });
    console.log(cryptedPerks.join(''));

    return cryptedPerks.join('');
  }



  decodeSpecial(code: string):SPECIAL {
    let bin: string[] = [];
    let specialValues: number[] = [];
    let decodePerks: number[] = [];
    code.split('').forEach((value) => {
      let decode: number = parseInt(value, 16) - 2;
      if (this.symbols.includes(value)) {
        bin.push(value);
      } else {
        specialValues.push(decode);
      }
    });
   
  
    console.log('Special décodé:', decodePerks);


    const specialOutput:SPECIAL = {
      S: specialValues[0],
      P: specialValues[1],
      E: specialValues[2],
      C: specialValues[3],
      I: specialValues[4],
      A: specialValues[5],
      L: specialValues[6]
    }

    return specialOutput
  }





  decodeSpecialKey(specialKey: string): SpecialAccount {
    return JSON.parse(atob(specialKey));
  }

  getPerksSorted(special: SPECIAL): { key: string; value: number }[] {
    let perks: any[] = [];

    Object.keys(special).forEach((key: string) => {
      perks = [...perks, { key, value: special[key as keyof typeof special] }];
    });

    perks.sort((a, b) => {
      // Comparer les valeurs 'value' de chaque objet
      if (a.value > b.value) {
        return -1; // a précède b dans l'ordre croissant
      } else if (a.value < b.value) {
        return 1; // b précède a dans l'ordre croissant
      } else {
        return 0; // a et b ont la même valeur
      }
    });

    return perks;
  }
}
