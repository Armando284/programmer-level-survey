import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscribable, Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { level } from 'src/app/interfaces/level';
import { Question } from 'src/app/interfaces/question';
import { Survey } from 'src/app/interfaces/survey';
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
  resultsByLevel!: Map<level, number>;
  isSurveyFinished!: boolean;

  constructor(private route: ActivatedRoute, private surveyService: SurveyService) { }

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

  addResponse(isCorrect: boolean, idx: number) {
    this.questions[idx].response = isCorrect;
  }

  getResults() {
    this.isSurveyFinished = true;
    this.resultsByLevel = this.questions.reduce((acc, curr): Map<level, number> => {
      if (!acc.has(curr.level)) {
        acc.set(curr.level, 0);
      }
      acc.set(curr.level, acc.get(curr.level)! + (curr.response ? 1 : 0));
      return acc;
    }, new Map<level, number>());
  }

  getLevelAmountOfQUestions(level: level): number {
    return this.questions.reduce((acc, curr) => acc + (curr.level === level ? 1 : 0), 0);
  }

  getWrongQuestions(): Question[] {
    return this.questions.filter(data => !data.response)
  }
}
