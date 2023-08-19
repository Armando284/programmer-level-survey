import { Answer } from "./answer";
import { level } from "./level";

export interface Question {
  subject: string,
  body: string,
  code_md_snippet?: string,
  level: level,
  answers: [Answer, Answer, Answer],
  response?: boolean,
}
