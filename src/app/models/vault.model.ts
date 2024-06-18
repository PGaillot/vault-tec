import { CounterDisplayPipe } from '../pipes/counter-display.pipe';
import { SingleCityPopulation } from './city/cityPopulation';
import { Country, State } from './city/country.model';

export class Vault {
  city: string;
  country: Country;
  state: State;
  name: string;
  shortName: string;
  id: number;
  vaultLocationCode: string;
  private counterDisplayPipe: CounterDisplayPipe;

  constructor(country: Country, state: State, city: string, id: number) {
    (this.counterDisplayPipe = new CounterDisplayPipe()),
      (this.country = country),
      (this.city = city),
      (this.state = state),
      (this.id = id),
      (this.vaultLocationCode = country.iso2 + state.state_code + id);
    this.name = this.vaultLocationCode + '-' + city.toUpperCase();
    this.shortName =
      this.vaultLocationCode +
      '-' +
      city.toUpperCase().slice(0, 2) +
      city.toUpperCase().slice(city.length - 1, city.length);
  }

  counterDisplay(): string {
    return this.counterDisplayPipe.transform(this.id);
  }
}

export class VaultDetails extends Vault {
  singleCityPopulation: SingleCityPopulation;
  constructor(
    vault:Vault,
    singleCityPopulation: SingleCityPopulation
  ) {
    super(vault.country, vault.state, vault.city, vault.id);
    this.singleCityPopulation = singleCityPopulation;
  }
}
