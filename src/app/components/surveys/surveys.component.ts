import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-surveys',
  templateUrl: './surveys.component.html',
  styleUrls: ['./surveys.component.scss']
})
export class SurveysComponent {

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  goToSurvey(survey: string = '') {
    this.router.navigate(['/survey', { language: survey }]);
  }
}
