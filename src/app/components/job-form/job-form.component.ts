import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { SpecialAccountService } from '../../services/special-account.service';
import { SpecialAccount } from '../../models/special.model';
import { JobType } from '../../enums/job-type';
import { QuestionService } from '../../services/question.service';
import { QuestionComponent } from '../question/question.component';
import { Question } from '../../models/question.model';
import { LogoLoaderComponent } from '../logo-loader/logo-loader.component';

@Component({
  selector: 'app-job-form',
  standalone: true,
  imports: [QuestionComponent, LogoLoaderComponent],
  templateUrl: './job-form.component.html',
  styleUrl: './job-form.component.scss',
})
export class JobFormComponent {
  specialAccount!: SpecialAccount;
  alterateSpecialName: string = '';
  questionIndex: number = -1;
  currentQuestion?: Question;
  questions: Question[] = [];
  answer: number[] = [];
  rndJob: number = 0;
  jobSelected?: JobType;
  alternativeJobSelected?: JobType;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private specialService: SpecialAccountService,
    private questionService: QuestionService
  ) {
    this.rndJob = this.questionService.getRandom(1, 4);

    this.route.queryParams.subscribe({
      next: (value) => {
        try {
          const key: string = value['SPECIALkey'];
          this.specialAccount = this.specialService.decodeSpecialKey(key);
          this.specialService.decodeSpecial(  this.specialService.cryptSpecial(this.specialAccount.special))
        } catch (error) {
          console.error(error);
          this.router.navigate(['not-found']);
        }
      },
      error: (error) => {
        console.error(error);
        this.router.navigate(['not-found']);
      },
    });
  }

  beginTest() {
    this.questionIndex += 1;
  }

  questionAnswer(points: number) {
    this.questionIndex += 1;
    this.answer = [...this.answer, points];
    console.log(this.answer);



    if(this.answer.length === this.questions.length){
      let asw:any[] = []
      this.answer.forEach((a, i) => {
        const question:Question = this.questions[i]
        asw = [...asw, {question, a}]
      })
      this.jobSelected = asw[0].question.type
      this.alternativeJobSelected = asw[1].question.type
    }
  }

  ngOnInit(): void {
    // Get the bestPerk
    const bestPerk: any = this.specialService.getPerksSorted(
      this.specialAccount.special
    );

    // get the 'alterateSpecialName'
    bestPerk.forEach((bpValue: { key: string; value: number }) => {
      this.alterateSpecialName += bpValue.key;
    });

    // console.table(bestPerk);
    // console.table(this.alterateSpecialName);

    const questionOne: JobType =
      JobType[bestPerk[0].key as keyof typeof JobType];
    const questionTwo: JobType =
      JobType[bestPerk[2].key as keyof typeof JobType];
    const questionTree: JobType =
      JobType[bestPerk[bestPerk.length - 1].key as keyof typeof JobType];

    this.questions = [
      this.questionService.getQuestionJobType(questionOne),
      this.questionService.getQuestionJobType(questionTwo),
      this.questionService.getQuestionJobType(questionTree),
    ];
  }
}
