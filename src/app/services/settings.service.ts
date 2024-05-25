import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {



  linePrefKey:string = 'vault-tec_pref_line'
  effectPrefKey:string = 'vault-tec_pref_effect'

  constructor() {
    const userLinePref:string | null = sessionStorage.getItem(this.linePrefKey)
    const userEffectPref:string | null = sessionStorage.getItem(this.effectPrefKey)

    if(userLinePref){
      this.linePref = userLinePref === 'true' ?  true : false;
    }

    if(userEffectPref){
      this.effectPref = userEffectPref === 'true' ?  true : false;
    } 

  }

  linePref:boolean = true;
  effectPref:boolean = true;


  setLinePref(linePref:boolean){
    this.linePref = linePref;
    sessionStorage.setItem(this.linePrefKey, linePref + '')
  }

  setEffectPref(effectPref:boolean){
    this.effectPref = effectPref;
    sessionStorage.setItem(this.effectPrefKey, effectPref + '')
  }

}
