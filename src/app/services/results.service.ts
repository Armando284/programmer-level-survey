import { Injectable } from '@angular/core';
import { level } from '../interfaces/types';
import { Question } from '../interfaces/question';

@Injectable({
  providedIn: 'root'
})
export class ResultsService {

  private isSurveyFinished!: boolean;
  private resultsByLevel!: Map<level, number>;
  private totalQuestionsByLevel!: Map<level, number>;
  private wrongQuestionsTitles!: string[];

  constructor() { }

  addResults(isSurveyFinished: boolean, resultsByLevel: Map<level, number>, totalQuestionsByLevel: Map<level, number>, wrongQuestions: string[]) {
    this.isSurveyFinished = isSurveyFinished;
    this.resultsByLevel = resultsByLevel;
    this.totalQuestionsByLevel = totalQuestionsByLevel;
    this.wrongQuestionsTitles = wrongQuestions;
  }

  getResults() {
    return {
      isSurveyFinished: this.isSurveyFinished,
      resultsByLevel: this.resultsByLevel,
      totalQuestionsByLevel: this.totalQuestionsByLevel,
      wrongQuestions: this.wrongQuestionsTitles,
    }
  }
}
