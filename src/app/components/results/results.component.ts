import { Component } from '@angular/core';
import { level } from 'src/app/interfaces/types';
import { ResultsService } from 'src/app/services/results.service';
import { ResponsivenessService } from 'src/app/services/responsiveness.service';
import { screenSize } from 'src/app/interfaces/types';
import { Subscription } from 'rxjs/internal/Subscription';
import { tagColor } from 'src/app/helpers';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent {
  isSurveyFinished: boolean = false;
  resultsByLevel: Map<level, number> = new Map();
  totalQuestionsByLevel: Map<level, number> = new Map();
  wrongQuestionsTitles: string[] = [];
  currentScreenSize!: screenSize;
  subscriptions: Subscription[] = [];
  level: level = 'beginner';

  constructor(
    private resultsService: ResultsService,
    private responsive: ResponsivenessService,
  ) { }

  ngOnInit() {
    this.getData();
    this.getScreenSize();
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  tagColor = tagColor;

  private getData(): void {
    const data = this.resultsService.results;
    if (!data) throw new Error('Results service data is empty');
    this.isSurveyFinished = data.isSurveyFinished;
    this.resultsByLevel = data.resultsByLevel;
    this.totalQuestionsByLevel = data.totalQuestionsByLevel;
    this.wrongQuestionsTitles = data.wrongQuestions;
    this.level = data.level;
  }

  private getScreenSize(): void {
    const responsiveSub = this.responsive.screenSize.subscribe(data => {
      this.currentScreenSize = data;
    });
    this.subscriptions.push(responsiveSub);
  }

  getValue(value: number, total: number = 100): number {
    return value * 100 / total;
  }
}
