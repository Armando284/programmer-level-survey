import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscribable, Subscription, Subject } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { level } from 'src/app/interfaces/types';
import { Question } from 'src/app/interfaces/question';
import { Survey } from 'src/app/interfaces/survey';
import { ResultsService } from 'src/app/services/results.service';
import { SurveyService } from 'src/app/services/survey.service';
import { ResponsivenessService } from 'src/app/services/responsiveness.service';
import { screenSize } from 'src/app/interfaces/types';
import { environment } from 'src/environments/environment';
import { MatDialog } from '@angular/material/dialog';
import { InformationDialogComponent } from '../shared/information-dialog/information-dialog.component';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.scss']
})
export class SurveyComponent {
  survey$!: Observable<Survey>;
  questions!: Question[];
  language: string = '';
  isSurveyFinished: boolean = false;

  currentScreenSize!: screenSize;
  subscriptions: Subscription[] = [];

  surveyTime: number = environment.surveyTimerInSeconds; // milliseconds
  timerState: Subject<boolean> = new Subject();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private surveyService: SurveyService,
    private resultsService: ResultsService,
    private responsive: ResponsivenessService,
    private dialog: MatDialog,
  ) { }

  ngOnInit() {
    this.language = this.route.snapshot.paramMap.get('language')!;
    this.survey$ = this.surveyService.javascriptSurvey;
    const surveySub = this.survey$.subscribe(data => {
      this.questions = data.questions;
    });
    this.subscriptions.push(surveySub);

    const responsiveSub = this.responsive.screenSize.subscribe(data => {
      this.currentScreenSize = data;
    });
    this.subscriptions.push(responsiveSub);

    this.openDialog();

  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
    this.questions.forEach(data => { data.response = false });
  }

  openDialog() {
    const dialogRef = this.dialog.open(InformationDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result === false) {
        this.router.navigate(['']);
        return;
      }
      this.startSurvey();
    });
  }

  startSurvey() {
    this.timerState.next(true);

    const checkBrowserTabFocus = () => {
      if (document.visibilityState !== 'visible') {
        document.removeEventListener('visibilitychange', checkBrowserTabFocus);
        this.router.navigate(['']);
        throw new Error('Survey finished due to stepping out of page.')
      }
    }

    document.addEventListener('visibilitychange', checkBrowserTabFocus);
  }

  stopSurvey() {
    // * small timer so users don't feel it unfair
    setTimeout(() => {
      this.getResults();
    }, 3000);
  }

  stopTimer() {
    this.timerState.next(false);
  }

  addResponse(isCorrect: boolean, idx: number): void {
    this.questions[idx].response = isCorrect;
  }

  getResults(): void {
    this.stopTimer();
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
