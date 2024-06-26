import { Component } from '@angular/core';
import { FormControl, FormControlName, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Vault } from '../../models/vault.model';

@Component({
  selector: 'app-vault-home-page',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './vault-home-page.component.html',
  styleUrl: './vault-home-page.component.scss'
})
export class VaultHomePageComponent {
 

  dummyVaultList:Vault[] = [];


  
  addressForm:FormGroup = new FormGroup({
    zipcodeInput : new FormControl(null, [Validators.required, Validators.maxLength(8), Validators.minLength(5)])
  })
  
  constructor(){
    const lilleVaultA = new Vault('59000', 'Lille', 'france', '13 rue rubens');
    const amiensVaultA = new Vault('80000', 'Amiens', 'france', '13 rue rubens');

    
    this.dummyVaultList = [
      ...this.dummyVaultList, 
      lilleVaultA,
      amiensVaultA
    ]

  }

  submit(e:any){
    console.log(this.addressForm.get(['zipcodeInput'])?.value);
  }



}
