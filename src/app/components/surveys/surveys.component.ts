import { Component } from '@angular/core';
import { SurveyService } from 'src/app/services/survey.service';
import { ResponsivenessService } from 'src/app/services/responsiveness.service';
import { screenSize } from 'src/app/interfaces/types';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-surveys',
  templateUrl: './surveys.component.html',
  styleUrls: ['./surveys.component.scss']
})
export class SurveysComponent {
  subjects!: string[];
  currentScreenSize!: screenSize;
  subscriptions!: Subscription[];

  constructor(
    private surveyService: SurveyService,
    private responsive: ResponsivenessService,
  ) {
    this.subscriptions = [];
  }

  ngOnInit() {
    const surveySub = this.surveyService.fullSurvey.subscribe(data => {
      this.subjects = [... new Set(data.questions.map(question => question.subject))];
    });
    this.subscriptions.push(surveySub);
    const responsiveSub = this.responsive.screenSize.subscribe(data => {
      this.currentScreenSize = data;
    });
    this.subscriptions.push(responsiveSub);
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
