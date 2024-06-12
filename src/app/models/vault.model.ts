import { Country, State } from './city/country.model';

export interface VaultElement {}

export class Vault {
  city: string;
  country: Country;
  state: State;
  name: string;
  shortName: string;
  id:string;
  vaultLocationCode: string;

  constructor(country: Country, state: State, city: string, id: number) {
    (this.country = country),
      (this.city = city),
      (this.state = state),
      this.id = id.toString(),
      (this.vaultLocationCode = country.iso2 + state.state_code + id);
    this.name = this.vaultLocationCode + '-' + city.toUpperCase();
    this.shortName =
      this.vaultLocationCode +
      '-' +
      city.toUpperCase().slice(0, 2) +
      city.toUpperCase().slice(city.length - 1, city.length);
  }



  counterDisplay(){

  }
}
