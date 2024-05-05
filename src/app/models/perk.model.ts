import { JobType } from "../enums/job-type";
import { PerksType } from "../enums/perks-type";

export interface Perk{
    char:string,
    name:PerksType,
    job_type:JobType,
    desc:string,
}