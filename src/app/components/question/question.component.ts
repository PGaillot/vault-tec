import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Question } from '../../models/question.model';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { SoundsService } from '../../services/sounds.service';

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


  constructor(private soundsServices:SoundsService){}

  onSubmit(points: number) {
    this.soundsServices.playAudioClick()
    const p:number = this.answerForm.value.answer
    this.points.emit(p);
    this.answerForm.reset();
  }
}
