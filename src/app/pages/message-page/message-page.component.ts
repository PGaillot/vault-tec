import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormService } from '../../services/form.service';

export interface MessagePageData{
  contents:string[];
  title:string;
  actions?:MessagePageAction[]
}

export interface MessagePageAction{
  name:string;
  destination:string;
}

@Component({
  selector: 'app-message-page',
  standalone: true,
  imports: [],
  templateUrl: './message-page.component.html',
  styleUrl: './message-page.component.scss'
})
export class MessagePageComponent {

  messagePageData!:MessagePageData;

  constructor(
    private route:ActivatedRoute,
    private router:Router,
    private formService:FormService
  ){
    this.route.queryParams.subscribe({
      next:(value) => {
        try {
          this.messagePageData = this.formService.decodeMessagePageDataKey(value['messageDataKey'])
          console.log(this.messagePageData);
          
        } catch (error) {
          this.router.navigate(['not-found'])
        }
      },
      error:(error) => {
        console.error(error)
      },
    })
  }


  navToDestination(destination:string){
    this.router.navigate([destination], {relativeTo:this.route.root})
  }
}
