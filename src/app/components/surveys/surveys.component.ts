import { Component } from '@angular/core';
import { SurveyService } from 'src/app/services/survey.service';

@Component({
  selector: 'app-surveys',
  templateUrl: './surveys.component.html',
  styleUrls: ['./surveys.component.scss']
})
export class SurveysComponent {
  subjects!: string[];

  constructor(
    private surveyService: SurveyService,
  ) { }

  ngOnInit() {
    this.surveyService.fullSurvey.subscribe(data => {
      this.subjects = [... new Set(data.questions.map(question => question.subject))];
    });
  }
}
