import { Injectable } from '@angular/core';
import { SpecialAccount } from '../models/special.model';

@Injectable({
  providedIn: 'root'
})
export class SpecialAccountService {

  constructor() { }

  generateSpecialKey(specialAccount:SpecialAccount):string{
    return btoa(JSON.stringify(specialAccount))
  }


  decodeSpecialKey(specialKey:string):SpecialAccount{
    return JSON.parse(atob(specialKey))
  }

}
