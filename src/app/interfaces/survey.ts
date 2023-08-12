import { Question } from "./question";

export interface Survey {
  language: string,
  questions: Question[]
}
