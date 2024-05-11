import { Injectable } from '@angular/core';
import { JobType } from '../enums/job-type';
import { Answer, Question } from '../models/question.model';
import { QUESTIONS } from '../data/questions.data';
import { GameService } from './game.service';

@Injectable({
  providedIn: 'root',
})
export class QuestionService {
  constructor(private gameService:GameService) {}


  shuffleAnswers(question: Question): Question {
    const ordonedAnswers: Answer[] = question.answers;
    for (let i = ordonedAnswers.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [ordonedAnswers[i], ordonedAnswers[j]] = [
        ordonedAnswers[j],
        ordonedAnswers[i],
      ];
    }

    return {
      title: question.title,
      type: question.type,
      answers: ordonedAnswers,
    };
  }

  getQuestionJobType(jobType: JobType): Question {
    const jobQuestions: Question[] = QUESTIONS.filter(
      (question: Question) => question.type === jobType
    );

    const q: Question =
      jobQuestions[this.gameService.getRandom(0, jobQuestions.length - 1)];

    return this.shuffleAnswers(q);
  }
}
