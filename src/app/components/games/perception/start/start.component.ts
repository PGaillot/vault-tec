import { Component } from '@angular/core';
import { FormControl, FormControlName, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-start',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './start.component.html',
  styleUrl: './start.component.scss',
})
export class StartComponent {



  form: FormGroup = new FormGroup({
    confirm : new FormControl(false, [Validators.requiredTrue]),
  });


  onSubmit(event:any){
    console.log(event);
    
  }
  
}
