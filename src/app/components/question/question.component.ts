import { Component, Input } from '@angular/core';
import { Question } from 'src/app/interfaces/question';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent {
  @Input() question!: Question;
  @Output() answerSelect = new EventEmitter<boolean>();

  constructor() {
  }

  sendResponse(isCorrect: boolean = false) {
    this.answerSelect.emit(isCorrect);
  }
}
