import { Component, Input } from '@angular/core';
import { Question } from 'src/app/interfaces/question';
import { Output, EventEmitter } from '@angular/core';
import { QuestionResponse } from 'src/app/interfaces/question-response';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent {
  @Input() question!: Question;
  @Output() answerSelect = new EventEmitter<QuestionResponse>();
  isCorrectAnswer: boolean;

  constructor() {
    this.isCorrectAnswer = false;
  }

  sendResponse() {
    const response: QuestionResponse = {
      level: this.question.level,
      value: this.isCorrectAnswer
    }
    this.answerSelect.emit(response);
  }
}
