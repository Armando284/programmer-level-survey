import { Component } from '@angular/core';
import { SurveyService } from 'src/app/services/survey.service';
import { ResponsivenessService } from 'src/app/services/responsiveness.service';
import { level, screenSize } from 'src/app/interfaces/types';
import { Subscription } from 'rxjs/internal/Subscription';
import { DbService } from 'src/app/services/db.service';
import { faPeopleGroup, faHeartCircleCheck, faUserCheck } from '@fortawesome/free-solid-svg-icons';
import { ChartConfiguration, ChartOptions } from 'chart.js';
import { UserResult } from 'src/app/interfaces/user-result';
import { tagColor } from 'src/app/helpers';

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
  faHeart = faHeartCircleCheck;
  faUser = faUserCheck;

  userAmount: number = 0;

  lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: [],
    datasets: [
      {
        data: [],
        label: 'Beginner',
        fill: true,
        tension: 0.15,
        borderColor: 'rgba(0,0,228,1)',
        backgroundColor: 'rgba(0,0,228,0.3)'
      },
      {
        data: [],
        label: 'Junior',
        fill: true,
        tension: 0.15,
        borderColor: 'rgba(103,58,183,1)',
        backgroundColor: 'rgba(103,58,183,0.3)'
      },
      {
        data: [],
        label: 'Semi-Senior',
        fill: true,
        tension: 0.15,
        borderColor: 'rgba(255,215,54,1)',
        backgroundColor: 'rgba(255,215,54,0.3)'
      },
      {
        data: [],
        label: 'Senior',
        fill: true,
        tension: 0.15,
        borderColor: 'rgba(244,57,64,1)',
        backgroundColor: 'rgba(244,57,64,0.3)'
      },
    ]
  };
  lineChartOptions: ChartOptions<'line'> = {
    responsive: false
  };
  lineChartLegend = true;
  isChartDataReady = false;

  totalUsersPerLevel: Map<level, number> = new Map();

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

    this.getUsersResults(this._db.userResults);
    const resultsSubscription = this._db.results$.subscribe(results => this.getUsersResults(results));
    this.subscriptions.push(resultsSubscription);
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  tagColor = tagColor;

  get chartWidth(): number {
    if (this.currentScreenSize === 'XSmall') return 320;
    if (this.currentScreenSize === 'Small') return 480;
    if (this.currentScreenSize === 'Medium') return 640;
    return 960;
  }

  seed() {
    this._db.seed();
  }

  private getUsersResults(results: UserResult[]) {
    if (!results) return;
    this.userAmount = results.length;
    const labels = [...new Set(results.map(r => r.createdAt))];

    this.lineChartData.labels = labels;

    const beginner: number[] = [];
    const junior: number[] = [];
    const semiSenior: number[] = [];
    const senior: number[] = [];

    labels.forEach(date => {
      beginner.push(results.reduce((acc, curr) => {
        return acc + ((curr.createdAt === date && curr.level === 'beginner') ? 1 : 0);
      }, 0));
      junior.push(results.reduce((acc, curr) => {
        return acc + ((curr.createdAt === date && curr.level === 'junior') ? 1 : 0);
      }, 0));
      semiSenior.push(results.reduce((acc, curr) => {
        return acc + ((curr.createdAt === date && curr.level === 'semi-senior') ? 1 : 0);
      }, 0));
      senior.push(results.reduce((acc, curr) => {
        return acc + ((curr.createdAt === date && curr.level === 'senior') ? 1 : 0);
      }, 0));
    });

    this.lineChartData.datasets[0].data = beginner;
    this.lineChartData.datasets[1].data = junior;
    this.lineChartData.datasets[2].data = semiSenior;
    this.lineChartData.datasets[3].data = senior;
    this.isChartDataReady = true;

    this.totalUsersPerLevel.set('beginner', beginner.reduce((acc, curr) => acc + curr, 0));
    this.totalUsersPerLevel.set('junior', junior.reduce((acc, curr) => acc + curr, 0));
    this.totalUsersPerLevel.set('semi-senior', semiSenior.reduce((acc, curr) => acc + curr, 0));
    this.totalUsersPerLevel.set('senior', senior.reduce((acc, curr) => acc + curr, 0));
  }
}
