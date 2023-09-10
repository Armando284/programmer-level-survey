import { Component } from '@angular/core';
import { SurveyService } from 'src/app/services/survey.service';
import { ResponsivenessService } from 'src/app/services/responsiveness.service';
import { screenSize } from 'src/app/interfaces/types';
import { Subscription } from 'rxjs';
import { DbService } from 'src/app/services/db.service';
import { faPeopleGroup, faHeartCirclePlus } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-surveys',
  templateUrl: './surveys.component.html',
  styleUrls: ['./surveys.component.scss']
})
export class SurveysComponent {
  subjects!: string[];
  currentScreenSize!: screenSize;
  subscriptions!: Subscription[];
  favs: number = 0;
  faPeople = faPeopleGroup;
  faHeart = faHeartCirclePlus;

  constructor(
    private surveyService: SurveyService,
    private responsive: ResponsivenessService,
    private _db: DbService,
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

    this.favs = this._db.favs;
    const favSubscription = this._db.favs$.subscribe(fav => this.favs = fav);
    this.subscriptions.push(favSubscription);

    this._db.getUserResults();
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
