export interface CityPopulationHTTPResponse {
    error: boolean;
    msg:   string;
    data:  Data;
}

export interface Data {
    city:             string;
    country:          string;
    populationCounts: PopulationCount[];
}

export interface PopulationCount {
    year:       string;
    value:      string;
    sex:        string;
    reliabilty: string;
}


export interface SingleCityPopulationHTTPResponse {
    error: boolean;
    msg:   string;
    data:  SingleCityPopulation;
}

export interface SingleCityPopulation {
    country:          string;
    code:             string;
    iso3:             string;
    populationCounts: cityPopulationCount[];
}

export interface cityPopulationCount {
    year:  number;
    value: number;
}
