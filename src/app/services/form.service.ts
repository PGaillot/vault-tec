import { Injectable } from '@angular/core';
import { DataFromData } from '../components/data-form/data-form.component';
import { SpecialFormData } from '../components/special-form/special-form.component';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor() { }


  generateKeyFromData(dataFromData: DataFromData): string {
    return btoa(JSON.stringify(dataFromData))
  }

  decodeDataFormKey(dataFromDataKey: string): DataFromData {
    return JSON.parse(atob(dataFromDataKey))
  }


  generateKeyFromSpecialForm(specialForm: SpecialFormData): string {
    return btoa(JSON.stringify(specialForm))
  }

  decodeSpecialFormFormKey(specialFormKey: string): SpecialFormData {    
    return JSON.parse(atob(specialFormKey))
  }






}
