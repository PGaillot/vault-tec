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
