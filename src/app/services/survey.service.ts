import { Injectable } from '@angular/core';
import { Survey } from '../interfaces/survey';
import { Observable, of } from 'rxjs';
import { mockSurvey } from './mock-questions';
import { Question } from '../interfaces/question';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {
  constructor() { }

  get fullSurvey(): Observable<Survey> {
    return of(mockSurvey);
  }

  private getSurvey(language: string): Observable<Survey> {
    // TODO: http request to the server for the survey
    const mySurvey: Survey = JSON.parse(JSON.stringify(mockSurvey));
    const junior = mySurvey.questions.filter(data => data.level === 'junior');
    const semiSenior = mySurvey.questions.filter(data => data.level === 'semi-senior');
    const senior = mySurvey.questions.filter(data => data.level === 'senior');

    const getFiveRandomQuestions = (arr: Question[]): Question[] => {
      const response: Question[] = [];
      let count = 0;
      const usedIdx: number[] = [];
      while (response.length < environment.questionsPerLevel && count < arr.length) {
        let idx: number;
        do {
          idx = Math.floor(Math.random() * arr.length);
        } while (usedIdx.includes(idx));
        usedIdx.push(idx);
        response.push(arr[idx]);
        count++;
      }
      return response;
    }
    mySurvey.questions = [...getFiveRandomQuestions(junior), ...getFiveRandomQuestions(semiSenior), ...getFiveRandomQuestions(senior),];
    return of(mySurvey);
  }

  get javascriptSurvey(): Observable<Survey> {
    return this.getSurvey('javascript');
  }

}
