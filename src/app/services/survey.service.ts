import { Injectable } from '@angular/core';
import { Survey } from '../interfaces/survey';
import { Observable, of } from 'rxjs';
import { mockSurvey } from './mock-questions';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {
  constructor() { }

  getSurvey(language: string): Observable<Survey> {
    // TODO: http request to the server for the survey
    return of(mockSurvey);
  }

}
