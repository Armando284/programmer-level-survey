import { Answer } from "./answer";

export interface Question {
  title: string,
  level: "junior" | "semi-senior" | "senior",
  answers: [Answer, Answer, Answer]
}
