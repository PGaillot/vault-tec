export interface SPECIAL{
    S:number,
    P:number,
    E:number,
    C:number,
    I:number,
    A:number,
    L:number
}

export interface SpecialAccount{
    special:SPECIAL,
    createdAt: Date,
    email:string,
    name:string,
    birthyear:number,
}
