export interface SPECIAL{
    strong:number,
    perception:number,
    endurance:number,
    charisma:number,
    intelligence:number,
    agility:number,
    luck:number
}

export interface SpecialAccount{
    special:SPECIAL,
    createdAt: Date,
    mail:string,
    name:string,
    birthyear:number,
}