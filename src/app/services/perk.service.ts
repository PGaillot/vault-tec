import { Injectable } from '@angular/core';
import { PerksType } from '../enums/perks-type';
import { SPECIAL } from '../models/special.model';

@Injectable({
  providedIn: 'root'
})
export class PerkService {

  public specialKeys: (keyof SPECIAL)[] = ['S', 'P', 'E', 'C', 'I', 'A', 'L'];
  constructor() { }

  getPerkByChar(char : string ): string{
    if(Object.keys(PerksType).includes(char)){
      return PerksType[char as keyof typeof PerksType];
    } else {
      console.error('No perk find with this key :',char);
      return 'PERK ERROR'
    }
  }

}
