import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscribable, Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { level } from 'src/app/interfaces/level';
import { QuestionResponse } from 'src/app/interfaces/question-response';
import { Survey } from 'src/app/interfaces/survey';
import { SurveyService } from 'src/app/services/survey.service';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.scss']
})
export class SurveyComponent {
  survey$!: Observable<Survey>;
  subscription!: Subscription;
  language: string = '';
  questionAnswers!: QuestionResponse[];
  resultsByLevel!: Map<level, number>;

  constructor(private route: ActivatedRoute, private surveyService: SurveyService) { }

  ngOnInit() {
    this.language = this.route.snapshot.paramMap.get('language')!;
    this.survey$ = this.surveyService.getSurvey(this.language);
    this.subscription = this.survey$.subscribe(data => {
      this.questionAnswers = data.questions.map<QuestionResponse>((question): QuestionResponse => {
        return { level: question.level, value: false }
      });
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  addResponse(newResponse: QuestionResponse, idx: number) {
    this.questionAnswers[idx].value = newResponse.value;
  }

  getResults() {
    this.resultsByLevel = this.questionAnswers.reduce((acc, curr): Map<level, number> => {
      if (!acc.has(curr.level)) {
        acc.set(curr.level, 0);
      }
      acc.set(curr.level, acc.get(curr.level)! + (curr.value ? 1 : 0));
      return acc;
    }, new Map<level, number>());
  }
}
