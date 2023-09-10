import { Injectable } from '@angular/core';
import { level } from '../interfaces/types';
import { DbService } from './db.service';

@Injectable({
  providedIn: 'root'
})
export class ResultsService {

  private isSurveyFinished: boolean = false;
  private resultsByLevel: Map<level, number> = new Map();
  private totalQuestionsByLevel: Map<level, number> = new Map();
  private wrongQuestionsTitles: string[] = [];

  constructor(
    private _db: DbService,
  ) { }

  private get level(): level {
    let totalCorrect = 0, totalQuestions = 0;
    this.resultsByLevel.forEach((value, key) => {
      totalCorrect += value;
      totalQuestions += this.totalQuestionsByLevel.get(key) ?? 0;
    });
    const points = totalCorrect * 100 / totalQuestions;
    if (points >= 90) return 'senior';
    if (points >= 60) return 'semi-senior';
    if (points >= 20) return 'junior';
    return 'beginner';
  }

  addResults(isSurveyFinished: boolean, resultsByLevel: Map<level, number>, totalQuestionsByLevel: Map<level, number>, wrongQuestions: string[]) {
    this.isSurveyFinished = isSurveyFinished;
    this.resultsByLevel = resultsByLevel;
    this.totalQuestionsByLevel = totalQuestionsByLevel;
    this.wrongQuestionsTitles = wrongQuestions;
  }

  get results() {
    const results = {
      isSurveyFinished: this.isSurveyFinished,
      resultsByLevel: this.resultsByLevel,
      totalQuestionsByLevel: this.totalQuestionsByLevel,
      wrongQuestions: this.wrongQuestionsTitles,
      level: this.level,
    }

    this._db.saveUserResults(results.level);
    return results;
  }
}
