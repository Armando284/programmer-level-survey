import { Component } from '@angular/core';
import { level } from 'src/app/interfaces/level';
import { Question } from 'src/app/interfaces/question';
import { ResultsService } from 'src/app/services/results.service';


type color = 'primary' | 'accent' | 'warn';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent {
  isSurveyFinished!: boolean;
  resultsByLevel!: Map<level, number>;
  totalQuestionsByLevel!: Map<level, number>;
  wrongQuestionsTitles!: string[];

  constructor(private resultsService: ResultsService) { }

  ngOnInit() {
    const data = this.resultsService.getResults();
    this.isSurveyFinished = data.isSurveyFinished;
    this.resultsByLevel = data.resultsByLevel;
    this.totalQuestionsByLevel = data.totalQuestionsByLevel;
    this.wrongQuestionsTitles = data.wrongQuestions;
  }

  tagColor(level: level): color {
    const colors = {
      'junior': 'primary',
      'semi-senior': 'accent',
      'senior': 'warn',
    };
    return colors[level] as color;
  }

  getValue(value: number, total: number = 100) {
    return value * 100 / total;
  }
}
