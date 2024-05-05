import { JobType } from "../enums/job-type";

export interface Question{
    type:JobType,
    title:string;
    answers:Answer[]
}

export interface Answer{
    id:number
    title:string,
    points:number
}