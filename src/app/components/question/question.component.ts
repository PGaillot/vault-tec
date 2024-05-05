import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Question } from '../../models/question.model';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-question',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './question.component.html',
  styleUrl: './question.component.scss',
})
export class QuestionComponent {
  @Input() question?: Question;
  @Output() answer: EventEmitter<number> = new EventEmitter<number>();

  answserForm: FormGroup = new FormGroup({
    answser: new FormControl(null, [Validators.required]),
  });

  onSubmit(points: number) {
    this.answer.emit(points);
    this.answserForm.reset();
  }
}
