import { Answer } from "./answer";
import { level } from "./types";

export interface Question {
  subject: string,
  body: string,
  code_md_snippet?: string,
  level: level,
  answers: [Answer, Answer, Answer, Answer?],
  response?: boolean,
}
