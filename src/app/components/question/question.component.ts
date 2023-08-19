import { Component, Input } from '@angular/core';
import { Question } from 'src/app/interfaces/question';
import { Output, EventEmitter } from '@angular/core';

type color = 'primary' | 'accent' | 'warn';
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

  get tagColor(): color {
    const colors = {
      'junior': 'primary',
      'semi-senior': 'accent',
      'senior': 'warn',
    };
    return colors[this.question.level] as color;
  }
}
