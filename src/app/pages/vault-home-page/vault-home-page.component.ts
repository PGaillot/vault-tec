import { Component } from '@angular/core';
import {
  FormControl,
  FormControlName,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Vault } from '../../models/vault.model';
import { CityApiService } from '../../services/city-api.service';
import { Country, State } from '../../models/city/country.model';
import { UpperCasePipe } from '@angular/common';
import { CounterDisplayPipe } from '../../pipes/counter-display.pipe';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-vault-home-page',
  standalone: true,
  imports: [ReactiveFormsModule, UpperCasePipe, CounterDisplayPipe],
  templateUrl: './vault-home-page.component.html',
  styleUrl: './vault-home-page.component.scss',
})
export class VaultHomePageComponent {
  //Country 🚩
  countries: Country[] = [];
  selectedcountry: Country | undefined;

  //State 🥨
  states: State[] = [];
  selectedstate: State | undefined;

  // City 🏙️
  cities: string[] = [];

  // Vault
  vaults: Vault[] = [];

  // Form 📝
  addressForm: FormGroup = new FormGroup({
    countrySelect: new FormControl(null, [Validators.required]),
    stateSelect: new FormControl(null, [Validators.required]),
    citySelect: new FormControl(null, [Validators.required]),
  });

  subscriptions:Subscription[] = [];

  constructor(private cityApi: CityApiService) {


    this.subscriptions = [

      this.cityApi.getCountriesAndTheirsPositions().subscribe({
        next: (value) => {
          this.countries = value.data;
          this.addressForm.get('countrySelect')!.setValue(this.countries[0].name)
  
        },
        error: (err) => {
          console.error(err);
        },
      }),

      this.addressForm
        .get('countrySelect')!
        .valueChanges.subscribe((selectedCountry) => {
          if (selectedCountry) {
            this.states = [];
            this.vaults = [];
            this.selectedcountry = this.countries.find(
              (country: Country) => country.name === selectedCountry
            );
            this.cityApi
              .getSingleCountriesAndItsStates(selectedCountry)
              .subscribe({
                next: (value) => {
                  this.states = value.data.states;
                  this.addressForm.get('stateSelect')?.setValue(this.states[0].name)
                },
                error: (err) => {
                  console.error(err);
                },
                complete: () => {
                  console.log('complete!');
                },
              });
          }
        }),
  
      this.addressForm
        .get('stateSelect')!
        .valueChanges.subscribe((stateSelected) => {
          if (stateSelected) {
            this.vaults = [];
            this.selectedstate = this.states.find(
              (state: State) => state.name === stateSelected
            );
            this.cityApi
              .getCitiesInState(
                this.addressForm.get('stateSelect')!.value,
                this.addressForm.get('countrySelect')!.value
              )
              .subscribe({
                next: (value) => {
                  this.cities = value.data;
                  this.cities.forEach((city: string, i: number) => {
                    const vault: Vault = new Vault(
                      this.selectedcountry!,
                      this.selectedstate!,
                      city,
                      i
                    );
                    this.vaults = [...this.vaults, vault];
                  });
                },
                error: (err) => {
                  console.error(err);
                },
              });
          }
        })
    ]

  }

  submit(e: any) {}

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.subscriptions.forEach((sub) => sub.unsubscribe())
  }
}
