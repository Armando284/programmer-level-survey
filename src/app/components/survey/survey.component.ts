import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscribable, Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { level } from 'src/app/interfaces/level';
import { Question } from 'src/app/interfaces/question';
import { Survey } from 'src/app/interfaces/survey';
import { ResultsService } from 'src/app/services/results.service';
import { SurveyService } from 'src/app/services/survey.service';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.scss']
})
export class SurveyComponent {
  survey$!: Observable<Survey>;
  questions!: Question[];
  subscription!: Subscription;
  language: string = '';
  isSurveyFinished!: boolean;

  constructor(private route: ActivatedRoute, private router: Router, private surveyService: SurveyService, private resultsService: ResultsService) { }

  ngOnInit() {
    this.language = this.route.snapshot.paramMap.get('language')!;
    this.survey$ = this.surveyService.getSurvey(this.language);
    this.subscription = this.survey$.subscribe(data => {
      this.questions = data.questions;
    });
    this.isSurveyFinished = false;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    // NOTE: this is in case there is a copy of the questions in memory
    this.questions.forEach(data => { data.response = false });
  }

  addResponse(isCorrect: boolean, idx: number): void {
    this.questions[idx].response = isCorrect;
  }

  getResults(): void {
    this.isSurveyFinished = true;
    this.resultsService.addResults(this.isSurveyFinished, this.resultsByLevel, this.questionsByLevel, this.wrongQuestions);
    this.router.navigate(['results']);
  }

  private get resultsByLevel(): Map<level, number> {
    return this.questions.reduce((acc, curr): Map<level, number> => {
      if (!acc.has(curr.level)) {
        acc.set(curr.level, 0);
      }
      acc.set(curr.level, acc.get(curr.level)! + (curr.response ? 1 : 0));
      return acc;
    }, new Map<level, number>());
  }

  private get questionsByLevel(): Map<level, number> {
    return this.questions.reduce((acc, curr): Map<level, number> => {
      if (!acc.has(curr.level)) {
        acc.set(curr.level, 0);
      }
      acc.set(curr.level, acc.get(curr.level)! + 1);
      return acc;
    }, new Map<level, number>());
  }

  private get wrongQuestions(): string[] {
    return this.questions.filter(data => !data.response).map(data => data.body);
  }
}
