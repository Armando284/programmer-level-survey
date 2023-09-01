import { Component } from '@angular/core';
import { level } from 'src/app/interfaces/types';
import { Question } from 'src/app/interfaces/question';
import { ResultsService } from 'src/app/services/results.service';
import { ResponsivenessService } from 'src/app/services/responsiveness.service';
import { screenSize } from 'src/app/interfaces/types';
import { Subscription } from 'rxjs';


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
  currentScreenSize!: screenSize;
  subscriptions!: Subscription[];

  constructor(
    private resultsService: ResultsService,
    private responsive: ResponsivenessService,
  ) {
    this.subscriptions = [];
  }

  ngOnInit() {
    const data = this.resultsService.getResults();
    this.isSurveyFinished = data.isSurveyFinished;
    this.resultsByLevel = data.resultsByLevel;
    this.totalQuestionsByLevel = data.totalQuestionsByLevel;
    this.wrongQuestionsTitles = data.wrongQuestions;
    const responsiveSub = this.responsive.screenSize.subscribe(data => {
      this.currentScreenSize = data;
    });
    this.subscriptions.push(responsiveSub);
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
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
