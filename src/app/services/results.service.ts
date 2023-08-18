import { Injectable } from '@angular/core';
import { level } from '../interfaces/level';
import { Question } from '../interfaces/question';

@Injectable({
  providedIn: 'root'
})
export class ResultsService {

  private isSurveyFinished!: boolean;
  private resultsByLevel!: Map<level, number>;
  private wrongQuestions!: Question[];

  constructor() { }

  addResults(isSurveyFinished: boolean, resultsByLevel: Map<level, number>, wrongQuestions: Question[]) {
    this.isSurveyFinished = isSurveyFinished;
    this.resultsByLevel = resultsByLevel;
    this.wrongQuestions = wrongQuestions;
  }

  getResults() {
    return {
      isSurveyFinished: this.isSurveyFinished,
      resultsByLevel: this.resultsByLevel,
      wrongQuestions: this.wrongQuestions,
    }
  }
}
