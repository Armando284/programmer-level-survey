import { Answer } from "./answer";
import { level } from "./level";

export interface Question {
  title: string,
  body: string,
  level: level,
  answers: [Answer, Answer, Answer],
  response?: boolean,
}
