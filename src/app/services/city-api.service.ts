import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CityPopulationHTTPResponse } from '../models/city/cityPopulation';
import {
  CountriesHttpResponse,
  CountryStatesHttpResponse,
} from '../models/city/country.model';

@Injectable({
  providedIn: 'root',
})
export class CityApiService {
  private cityApiUrl: string = 'https://countriesnow.space/api/v0.1';

  constructor(private http: HttpClient) {}

  getCitybyName(country: string, state: string): Observable<any> {
    const url = `${this.cityApiUrl}/countries/state/cities`;
    const body = {
      country: country,
      state: state,
    };

    return this.http.post(url, body);
  }

  /**
   * Retoune un tableau population de la ville des dernieres années.
   * @param city
   * @returns
   */
  filterCitiesAndPopulationData(
    city: string
  ): Observable<CityPopulationHTTPResponse> {
    const url = `${this.cityApiUrl}/countries/population/cities`;
    const body = {
      city: city,
    };
    return this.http.post<CityPopulationHTTPResponse>(url, body);
  }

  /**
   *
   * @param country
   * @returns une liste d'états/departement
   */
  getSingleCountriesAndItsStates(
    country: string
  ): Observable<CountryStatesHttpResponse> {
    const url = `${this.cityApiUrl}/countries/states`;
    const body = {
      country: country,
    };
    return this.http.post<CountryStatesHttpResponse>(url, body);
  }


  /**
   * 
   * @returns 
   */
  getCountriesAndTheirsPositions(): Observable<CountriesHttpResponse> {
    const url: string = `${this.cityApiUrl}/countries/positions`;
    return this.http.get<CountriesHttpResponse>(url);
  }


  /**
   * 
   * @param state 
   */
  getCitiesInState(state: string, country:string): Observable<any> {
    const url: string = `${this.cityApiUrl}/countries/state/cities`;
    const body = {
      country: country,
      state: state,
    };
    return this.http.post<CountriesHttpResponse>(url, body);
  }
}
