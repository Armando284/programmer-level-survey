import { Survey } from "../interfaces/survey";

export const mockSurvey: Survey = {
  language: 'javascript',
  questions: [
    // NOTE: Junior questions
    {
      subject: 'JavaScript execution',
      body: 'What is the best way you can use to run JavaScript code in a web browser?',
      level: 'junior',
      answers: [
        { body: 'By embedding it directly within an HTML file using <script> tags.', isCorrect: false },
        {
          body: 'By executing it within the browser\'s developer console.', isCorrect: false
        },
        { body: 'By creating an external JavaScript file and linking it to an HTML document using the <script> tag.', isCorrect: true }
      ],
    },
    {
      subject: 'Variable declaration',
      body: 'Which of the following JavaScript keywords is NOT used for variable declarations with block scope?',
      level: 'junior',
      answers: [
        { body: 'var', isCorrect: true },
        { body: 'let', isCorrect: false },
        { body: 'const', isCorrect: false }
      ],
    },
    {
      subject: 'Code comments',
      body: 'What is the correct way to comment a single line in JavaScript?',
      level: 'junior',
      answers: [
        { body: '// This is a comment', isCorrect: true },
        { body: '<!-- This is a comment -->', isCorrect: false },
        { body: '/* This is a comment */', isCorrect: false }
      ],
    },
    {
      subject: 'Data types',
      body: 'Which of the following is NOT a JavaScript data type?',
      level: 'junior',
      answers: [
        { body: 'boolean', isCorrect: false },
        { body: 'object', isCorrect: false },
        { body: 'float', isCorrect: true }
      ],
    },
    {
      subject: 'Variable declaration',
      body: 'What is the correct way to declare an array in JavaScript?',
      level: 'junior',
      answers: [
        { body: 'const arr = []', isCorrect: true },
        { body: 'const arr = {}', isCorrect: false },
        { body: 'const arr = ()', isCorrect: false }
      ],
    },
    {
      subject: 'String manipulation',
      body: 'What is the result of the following expression: "5" + 2?',
      level: 'junior',
      answers: [
        { body: '7', isCorrect: false },
        { body: '52', isCorrect: false },
        { body: '"52"', isCorrect: true }
      ],
    },
    {
      subject: 'Array manipulation',
      body: 'How do you access the length of an array in JavaScript?',
      level: 'junior',
      answers: [
        { body: 'arr.length()', isCorrect: false },
        { body: 'arr.len', isCorrect: false },
        { body: 'arr.length', isCorrect: true }
      ],
    },
    {
      subject: 'Number operations',
      body: 'What is the output of the following code snippet?',
      code_md_snippet: `
      var x = 10;
      console.log(x++);
      `,
      level: 'junior',
      answers: [
        { body: '10', isCorrect: true },
        { body: '11', isCorrect: false },
        { body: '9', isCorrect: false }
      ],
    },
    {
      subject: 'Conditionals',
      body: 'Which operator is used for strict equality comparison in JavaScript?',
      level: 'junior',
      answers: [
        { body: '==', isCorrect: false },
        { body: '===', isCorrect: true },
        { body: '=', isCorrect: false }
      ],
    },
    {
      subject: 'Conditionals',
      body: 'What is the purpose of the if statement in JavaScript?',
      level: 'junior',
      answers: [
        { body: 'To declare a function', isCorrect: false },
        { body: 'To control the flow of execution based on a condition', isCorrect: true },
        { body: 'To assign a value to a variable', isCorrect: false }
      ],
    },
    {
      subject: 'Functions',
      body: 'How do you declare a function in JavaScript?',
      level: 'junior',
      answers: [
        { body: 'function myFunction() {}', isCorrect: true },
        { body: 'var myFunction = () => {}', isCorrect: false },
        { body: 'myFunction() {}', isCorrect: false }
      ],
    },
    {
      subject: 'Data types',
      body: 'What is the output of the following code snippet?',
      code_md_snippet: `
      console.log(typeof NaN);
      `,
      level: 'junior',
      answers: [
        { body: 'number', isCorrect: true },
        { body: 'NaN', isCorrect: false },
        { body: 'undefined', isCorrect: false }
      ],
    },
    {
      subject: 'String manipulation',
      body: 'How do you concatenate two strings in JavaScript?',
      level: 'junior',
      answers: [
        { body: 'str1 + str2', isCorrect: true },
        { body: 'str1.concat(str2)', isCorrect: true },
        { body: 'str1 - str2', isCorrect: false }
      ],
    },
    {
      subject: 'Conditionals',
      body: 'What is the correct way to write a JavaScript conditional statement?',
      level: 'junior',
      answers: [
        { body: 'if() {}', isCorrect: true },
        { body: 'if {} else {}', isCorrect: false },
        { body: 'if {} else if {} else {}', isCorrect: false }
      ],
    },
    {
      subject: 'String manipulation',
      body: 'How do you convert a string to a number in JavaScript?',
      level: 'junior',
      answers: [
        { body: 'parseInt()', isCorrect: true },
        { body: 'toString()', isCorrect: false },
        { body: 'toNumber', isCorrect: false }
      ],
    },
    {
      subject: 'Loops',
      body: 'What is the purpose of the for loop in JavaScript?',
      level: 'junior',
      answers: [
        { body: 'To define a function', isCorrect: false },
        { body: 'To declare a variable', isCorrect: false },
        { body: 'To execute a block of code repeatedly while a condition is true', isCorrect: true },
      ],
    },
    {
      subject: 'JavaScript API',
      body: 'What does the console.log() function do in JavaScript?',
      level: 'junior',
      answers: [
        { body: 'It creates a log file on the server', isCorrect: false },
        { body: 'It opens the browser\'s debugging tools', isCorrect: false },
        { body: 'It displays output on the console or browser\'s developer console', isCorrect: true },
      ],
    },
    {
      subject: 'Conditionals',
      body: 'What is the result of the following expression: 5 > 3 && 2 < 4?',
      level: 'junior',
      answers: [
        { body: 'true', isCorrect: true },
        { body: 'false', isCorrect: false },
        { body: '2', isCorrect: false },
      ],
    },
    {
      subject: 'Objects',
      body: 'How do you access the value of a property in an object in JavaScript?',
      level: 'junior',
      answers: [
        { body: 'object[property]', isCorrect: false },
        { body: 'object.property', isCorrect: true },
        { body: 'object.getValue(property)', isCorrect: false },
      ],
    },
    {
      subject: 'Functions',
      body: 'What is the purpose of the return statement in a function?',
      level: 'junior',
      answers: [
        { body: 'To terminate the function execution', isCorrect: false },
        { body: 'To define a loop condition', isCorrect: false },
        { body: 'To specify the value to be returned from the function', isCorrect: true },
      ],
    },
    {
      subject: 'Array manipulation',
      body: 'Which method is used to remove the last element from an array in JavaScript?',
      level: 'junior',
      answers: [
        { body: 'pop()', isCorrect: true },
        { body: 'push()', isCorrect: false },
        { body: 'shift()', isCorrect: false },
      ],
    },
    {
      subject: 'JavaScript API',
      body: 'What is the purpose of the typeof operator in JavaScript?',
      level: 'junior',
      answers: [
        { body: 'To check if a variable is defined', isCorrect: false },
        { body: 'To determine the type of a variable or expression', isCorrect: true },
        { body: 'To perform mathematical calculations', isCorrect: false },
      ],
    },
    {
      subject: 'Number operations',
      body: 'What is the result of the following expression: 10 % 3?',
      level: 'junior',
      answers: [
        { body: '1', isCorrect: true },
        { body: '3', isCorrect: false },
        { body: '10', isCorrect: false },
      ],
    },
    {
      subject: 'JSON manipulation',
      body: 'How do you convert a JavaScript object to a JSON string?',
      level: 'junior',
      answers: [
        { body: 'JSON.stringify(object)', isCorrect: true },
        { body: 'object.toString()', isCorrect: false },
        { body: 'JSON.parse(object)', isCorrect: false },
      ],
    },
    {
      subject: 'Object Oriented Programming',
      body: 'What is the purpose of the new keyword in JavaScript?',
      level: 'junior',
      answers: [
        { body: 'To create a new instance of an object', isCorrect: true },
        { body: 'To check if a variable is null', isCorrect: false },
        { body: 'To define a new function', isCorrect: false },
      ],
    },
    // NOTE: Semi senior questions
    // NOTE: Senior questions
    {
      subject: 'Algorithms',
      body: 'What of this 3 sort algorithms has the best performance in speed and memory?',
      level: 'senior',
      answers: [
        { body: 'Bubble Sort', isCorrect: false },
        { body: 'Quick Sort', isCorrect: true },
        { body: 'Merge Sort', isCorrect: false }
      ],
    }
  ]
}
