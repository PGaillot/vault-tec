import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SpecialAccountService } from '../../services/special-account.service';
import { SpecialAccount } from '../../models/special.model';
import { JobType } from '../../enums/job-type';
import { QuestionService } from '../../services/question.service';

@Component({
  selector: 'app-job-form',
  standalone: true,
  imports: [],
  templateUrl: './job-form.component.html',
  styleUrl: './job-form.component.scss',
})
export class JobFormComponent {
  specialAccount!: SpecialAccount;
  alterateSpecialName:string = ''

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private specialService: SpecialAccountService,
    private questionService: QuestionService
  ) {
    this.route.queryParams.subscribe({
      next: (value) => {
        try {
          const key: string = value['SPECIALkey'];
          this.specialAccount = this.specialService.decodeSpecialKey(key);
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

  ngOnInit(): void {
    // Get the bestPerk
    const bestPerk: any = this.specialService.getPerksSorted(
      this.specialAccount.special
    );

    // get the 'alterateSpecialName'
    bestPerk.forEach((bpValue:{key:string, value:number})=> {
      this.alterateSpecialName += bpValue.key
    })



    console.table(bestPerk);
    console.table(this.alterateSpecialName);


    const questionOne:JobType = JobType[bestPerk[0].key as keyof typeof JobType]
    const questionTwo:JobType = JobType[bestPerk[2].key as keyof typeof JobType]
    const questionTree:JobType = JobType[bestPerk[bestPerk.length - 1].key as keyof typeof JobType]
    
    console.log(this.questionService.getQuestionJobType(questionOne));
    console.log(this.questionService.getQuestionJobType(questionTwo));
    console.log(this.questionService.getQuestionJobType(questionTree));
    

  }
}
