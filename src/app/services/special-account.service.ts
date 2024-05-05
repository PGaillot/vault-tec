import { Injectable } from '@angular/core';
import { SPECIAL, SpecialAccount } from '../models/special.model';

@Injectable({
  providedIn: 'root',
})
export class SpecialAccountService {
  constructor() {}

  generateSpecialKey(specialAccount: SpecialAccount): string {
    return btoa(JSON.stringify(specialAccount));
  }

  decodeSpecialKey(specialKey: string): SpecialAccount {
    return JSON.parse(atob(specialKey));
  }

  getPerksSorted(special: SPECIAL):{key:string, value:number}[] {
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
