import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CityPopulationHTTPResponse } from '../models/city/cityPopulation';

@Injectable({
  providedIn: 'root'
})
export class CityApiService {

  private cityApiUrl:string = 'https://countriesnow.space/api/v0.1'


  constructor(
    private http:HttpClient
  ) { }


  getCitybyName(country: string, state: string):Observable<any>{
    const url = `${this.cityApiUrl}/countries/state/cities`
    const body = {
      country: country,
      state: state
    };
    
    return this.http.post(url, body)
  }
  

  /**
   * Retoune un tableau population de la ville des dernieres années.
   * @param city 
   * @returns 
   */
  filterCitiesAndPopulationData(city:string):Observable<CityPopulationHTTPResponse>{
    const url = `${this.cityApiUrl}/countries/population/cities`
    const body = {
      city: city,
    };
    return this.http.post<CityPopulationHTTPResponse>(url, body)
  }


/**
 * 
 * @param country 
 * @returns une liste d'états/departement
 */
  getSingleCountriesAndItsStates(country:string):Observable<any>{
    const url = `${this.cityApiUrl}/countries/states`
    const body = {
      country: country,
    };
    return this.http.post<any>(url, body)

  }


}


