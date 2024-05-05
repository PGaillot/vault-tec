import { Injectable } from '@angular/core';
import { JobType } from '../enums/job-type';
import { Question } from '../models/question.model';
import { QUESTIONS } from '../data/questions.data';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor() { }


  getRandom(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  getQuestionJobType(jobType:JobType):Question{
    const jobQuestions:Question[] = QUESTIONS.filter((question:Question) => question.type === jobType)
    return jobQuestions[this.getRandom(0, jobQuestions.length - 1)]
  }


}
