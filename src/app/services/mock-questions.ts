import { Survey } from "../interfaces/survey";

export const mockSurvey: Survey = {
  language: 'javascript',
  questions: [
    {
      title: 'Variables',
      body: 'What of the 3 ways of declaring variables is less secure?',
      level: 'junior',
      answers: [
        { body: 'var', isCorrect: true },
        { body: 'const', isCorrect: false },
        { body: 'let', isCorrect: false }
      ]
    },
    {
      title: 'Objects',
      body: 'What of this 3 data structures it\'s used to secure a collection of unique data?',
      level: 'semi-senior',
      answers: [
        { body: 'Object', isCorrect: false },
        { body: 'Map', isCorrect: false },
        { body: 'Set', isCorrect: true }
      ]
    },
    {
      title: 'Algorithms',
      body: 'What of this 3 sort algorithms has the best performance in speed and memory?',
      level: 'senior',
      answers: [
        { body: 'Bubble Sort', isCorrect: false },
        { body: 'Quick Sort', isCorrect: true },
        { body: 'Merge Sort', isCorrect: false }
      ]
    }
  ]
}
