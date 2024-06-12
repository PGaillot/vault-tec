export interface CountriesHttpResponse {
    error: boolean;
    msg:   string;
    data:  Country[];
}

export interface Country {
    name: string;
    iso2: string;
    long: number | string;
    lat:  number | string;
}

export interface CountryStatesHttpResponse {
    error: boolean;
    msg:   string;
    data:  CountryStatesData;
}

export interface CountryStatesData {
    name:   string;
    iso3:   string;
    iso2:   string;
    states: State[];
}

export interface State {
    name:       string;
    state_code: string;
}

export interface CitiesHTTPResponse {
    error: boolean;
    msg:   string;
    data:  string[];
}