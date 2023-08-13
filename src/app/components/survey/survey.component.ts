import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Survey } from 'src/app/interfaces/survey';
import { SurveyService } from 'src/app/services/survey.service';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.scss']
})
export class SurveyComponent {
  survey$!: Observable<Survey>;
  language: string = '';
  constructor(private route: ActivatedRoute, private surveyService: SurveyService) { }

  ngOnInit() {
    this.language = this.route.snapshot.paramMap.get('language')!;
    this.survey$ = this.surveyService.getSurvey(this.language);
  }
}
