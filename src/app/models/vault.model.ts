export interface VaultElement{


  }


  export class Vault {

    name:string;
    completeAddress:string;


    constructor(zicode:string, city:string, country:string, address:string){
        this.name = 'VAULT-'+ zicode.slice(0,2) + country.slice(0,1).toUpperCase() + "A"
        this.completeAddress = `${address} ${zicode} ${city.toUpperCase()}`
    }

  }