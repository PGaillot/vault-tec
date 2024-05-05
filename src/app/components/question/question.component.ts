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
  @Output() points: EventEmitter<number> = new EventEmitter<number>();

  answerForm: FormGroup = new FormGroup({
    answer: new FormControl(null, [Validators.required]),
  });

  onSubmit(points: number) {
    const p:number = this.answerForm.value.answer
    this.points.emit(p);
    this.answerForm.reset();
  }
}
