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
    {
      subject: 'JavaScript API',
      body: 'What is the purpose of the this keyword in JavaScript?',
      level: 'semi-senior',
      answers: [
        { body: 'It refers to the current function being executed.', isCorrect: false },
        { body: 'It refers to the object on which a method is being called.', isCorrect: true },
        { body: 'It refers to the global object.', isCorrect: false },
      ],
    },
    {
      subject: 'Data types',
      body: 'What is the difference between undefined and null in JavaScript?',
      level: 'semi-senior',
      answers: [
        { body: 'They are identical and can be used interchangeably.', isCorrect: false },
        { body: 'undefined is the default value for uninitialized variables, while null is an assigned value representing no value or empty object reference.', isCorrect: true },
        { body: 'undefined represents a function that has no return statement, while null represents a function that explicitly returns nothing.', isCorrect: false },
      ],
    },
    {
      subject: 'Functions',
      body: 'What is a closure in JavaScript?',
      level: 'semi-senior',
      answers: [
        { body: 'A closure is a way to implement private variables and functions in JavaScript.', isCorrect: true },
        { body: 'A closure is a built-in JavaScript function.', isCorrect: false },
        { body: 'A closure is a type of loop used for asynchronous operations.', isCorrect: false },
      ],
    },
    {
      subject: 'Conditionals',
      body: 'What is the difference between == and === in JavaScript?',
      level: 'semi-senior',
      answers: [
        { body: 'There is no difference; they both perform loose equality comparison.', isCorrect: false },
        { body: '== performs type coercion, while === performs strict equality comparison without type coercion.', isCorrect: true },
        { body: '== compares values, while === compares references.', isCorrect: false },
      ],
    },
    {
      subject: 'JavaScript API',
      body: 'What is the purpose of the bind() method in JavaScript?',
      level: 'semi-senior',
      answers: [
        { body: 'To bind a function to an object as its method.', isCorrect: false },
        { body: 'To create a new function with a specific context for this keyword.', isCorrect: true },
        { body: 'To bind event handlers to DOM elements.', isCorrect: false },
      ],
    },
    {
      subject: 'JavaScript API',
      body: 'What is the purpose of the map() method in JavaScript?',
      level: 'semi-senior',
      answers: [
        { body: 'To create a new array by applying a function to each element of an existing array.', isCorrect: true },
        { body: 'To filter an array based on a given condition.', isCorrect: false },
        { body: 'To sort an array in ascending order.', isCorrect: false },
      ],
    },
    {
      subject: 'Promises',
      body: 'What is the purpose of the Promise object in JavaScript?',
      level: 'semi-senior',
      answers: [
        { body: 'To define a class for creating new objects.', isCorrect: false },
        { body: 'To handle asynchronous operations and provide a more structured way to work with callbacks.', isCorrect: true },
        { body: 'To handle errors and exceptions in JavaScript.', isCorrect: false },
      ],
    },
    {
      subject: 'Async/Await',
      body: 'What is the purpose of the async and await keywords in JavaScript?',
      level: 'semi-senior',
      answers: [
        { body: 'To define asynchronous functions.', isCorrect: true },
        { body: 'To handle errors and exceptions in asynchronous code.', isCorrect: false },
        { body: 'To create generators for iterating over collections.', isCorrect: false },
      ],
    },
    {
      subject: 'Objects',
      body: 'What is the difference between a shallow copy and a deep copy of an object in JavaScript?',
      level: 'semi-senior',
      answers: [
        { body: 'There is no difference; they both create an exact copy of the object.', isCorrect: false },
        { body: 'A shallow copy only copies the properties of the object, while a deep copy copies both properties and methods.', isCorrect: false },
        { body: 'A shallow copy copies only the references of nested objects, while a deep copy creates new copies of all nested objects.', isCorrect: true },
      ],
    },
    {
      subject: 'Functions',
      body: 'What is an Immediately Invoked Function Expression (IIFE) in JavaScript?',
      level: 'semi-senior',
      answers: [
        { body: 'It is a function that is invoked immediately after its declaration.', isCorrect: true },
        { body: 'It is a function that is invoked only when explicitly called by another function.', isCorrect: false },
        { body: 'It is a function that is invoked automatically by the JavaScript runtime.', isCorrect: false },
      ],
    },
    {
      subject: 'Object Oriented Programming',
      body: 'What is the purpose of the super keyword in JavaScript classes?',
      level: 'semi-senior',
      answers: [
        { body: 'It refers to the parent class constructor.', isCorrect: true },
        { body: 'It refers to the child class constructor.', isCorrect: false },
        { body: 'It refers to the current instance of the class.', isCorrect: false },
      ],
    },
    {
      subject: 'Loops',
      body: 'What is the difference between the for...in and for...of loops in JavaScript?',
      level: 'semi-senior',
      answers: [
        { body: 'There is no difference; they both iterate over arrays.', isCorrect: false },
        { body: 'The for...in loop iterates over object properties, while the for...of loop iterates over iterable objects like arrays and strings.', isCorrect: true },
        { body: 'The for...in loop iterates over the values of an array, while the for...of loop iterates over the keys.', isCorrect: false },
      ],
    },
    {
      subject: 'Try/Catch',
      body: 'What is the purpose of the try...catch statement in JavaScript?',
      level: 'semi-senior',
      answers: [
        { body: 'To handle asynchronous operations and provide a more structured way to work with callbacks.', isCorrect: false },
        { body: 'To handle errors and exceptions and provide a fallback mechanism.', isCorrect: true },
        { body: 'To define a block of code that will be executed regardless of whether an error occurs or not.', isCorrect: false },
      ],
    },
    {
      subject: 'Functions',
      body: 'What is the difference between a function declaration and a function expression in JavaScript?',
      level: 'semi-senior',
      answers: [
        { body: 'There is no difference; they both define functions.', isCorrect: false },
        { body: 'A function declaration is hoisted, while a function expression is not hoisted.', isCorrect: true },
        { body: 'A function declaration is used for named functions, while a function expression is used for anonymous functions.', isCorrect: true },
      ],
    },
    {
      subject: 'Array manipulation',
      body: 'What is the purpose of the reduce() method in JavaScript?',
      level: 'semi-senior',
      answers: [
        { body: 'To iterate over an array and execute a provided function on each element.', isCorrect: false },
        { body: 'To concatenate the elements of an array into a single string.', isCorrect: false },
        { body: 'To reduce the array to a single value by applying a function to each element.', isCorrect: true },
      ],
    },
    {
      subject: 'Timers',
      body: 'What is the difference between setTimeout() and setInterval() in JavaScript?',
      level: 'semi-senior',
      answers: [
        { body: 'There is no difference; they both execute a function after a specified delay.', isCorrect: false },
        { body: 'setTimeout() executes a function once after a specified delay, while setInterval() executes a function repeatedly at a specified interval.', isCorrect: true },
        { body: 'setInterval() executes a function once after a specified delay, while setTimeout() executes a function repeatedly at a specified interval.', isCorrect: false },
      ],
    },
    {
      subject: 'Functions',
      body: 'What is the difference between rest parameters and spread syntax in JavaScript?',
      level: 'semi-senior',
      answers: [
        { body: 'There is no difference; they both perform the same operation.', isCorrect: false },
        { body: 'Rest parameters are used in function calls, while spread syntax is used in function definitions.', isCorrect: false },
        { body: 'Rest parameters collect all remaining arguments into an array, while spread syntax spreads an array into individual elements.', isCorrect: true },
      ],
    },
    {
      subject: 'Objects',
      body: 'What is the purpose of the Object.keys() method in JavaScript?',
      level: 'semi-senior',
      answers: [
        { body: 'To determine if a given property exists in an object.', isCorrect: false },
        { body: 'To create a new object with the specified keys and values.', isCorrect: false },
        { body: 'To retrieve an array of all enumerable properties of an object.', isCorrect: true },
      ],
    },
    {
      subject: 'Functions',
      body: 'What is the difference between an arrow function and a regular function in JavaScript?',
      level: 'semi-senior',
      answers: [
        { body: 'There is no difference; they both define functions.', isCorrect: false },
        { body: 'Arrow functions do not have their own this keyword and cannot be used as constructors, while regular functions have their own this keyword and can be used as constructors.', isCorrect: true },
        { body: 'Arrow functions are used for asynchronous operations, while regular functions are used for synchronous operations.', isCorrect: false },
      ],
    },
    {
      subject: 'Fetch',
      body: 'What is the purpose of the fetch() function in JavaScript?',
      level: 'semi-senior',
      answers: [
        { body: 'To perform calculations and mathematical operations.', isCorrect: false },
        { body: 'To retrieve data from a remote server using HTTP requests.', isCorrect: true },
        { body: 'To manipulate the DOM and update HTML elements dynamically.', isCorrect: false },
      ],
    },
    {
      subject: 'Variable declaration',
      body: 'What is the difference between the let and var keywords in JavaScript?',
      level: 'semi-senior',
      answers: [
        { body: 'There is no difference; they both declare variables with block scope.', isCorrect: false },
        { body: 'let variables have block scope, while var variables have function scope.', isCorrect: true },
        { body: 'let variables can be redeclared, while var variables cannot be redeclared.', isCorrect: false },
      ],
    },
    // NOTE: Senior questions
    {
      subject: 'Data Structures',
      body: 'Which data structure is best suited for implementing a LIFO (Last-In, First-Out) behavior?',
      level: 'senior',
      answers: [
        { body: 'Array', isCorrect: false },
        { body: 'Linked List', isCorrect: false },
        { body: 'Stack', isCorrect: true },
        { body: 'Queue', isCorrect: false },
      ],
    },
    {
      subject: 'Algorithms',
      body: 'Which sorting algorithm has the best average-case time complexity?',
      level: 'senior',
      answers: [
        { body: 'Bubble Sort', isCorrect: false },
        { body: 'Quick Sort', isCorrect: true },
        { body: 'Insertion Sort', isCorrect: false },
        { body: 'Merge Sort', isCorrect: false },
      ],
    },
    {
      subject: 'Design Patterns',
      body: 'Which design pattern is used to encapsulate a group of individual factories for related objects?',
      level: 'senior',
      answers: [
        { body: 'Singleton', isCorrect: false },
        { body: 'Factory', isCorrect: false },
        { body: 'Abstract Factory', isCorrect: true },
        { body: 'Prototype', isCorrect: false },
      ],
    },
    {
      subject: 'Algorithms',
      body: 'Given an array of integers, how can you find the maximum subarray sum efficiently?',
      level: 'senior',
      answers: [
        { body: 'Using a nested loop to calculate the sum of all possible subarrays.', isCorrect: false },
        { body: 'Using Kadane\'s algorithm.', isCorrect: true },
        { body: 'Using binary search.', isCorrect: false },
        { body: 'Using depth-first search (DFS).', isCorrect: false },
      ],
    },
    {
      subject: 'Data Structures',
      body: 'Which data structure is commonly used to implement a priority queue?',
      level: 'senior',
      answers: [
        { body: 'Linked List', isCorrect: false },
        { body: 'Queue', isCorrect: false },
        { body: 'Heap', isCorrect: true },
        { body: 'Stack', isCorrect: false },
      ],
    },
    {
      subject: 'Algorithms',
      body: 'What is memoization in the context of dynamic programming?',
      level: 'senior',
      answers: [
        { body: 'A technique to optimize recursive algorithms by storing previously computed results', isCorrect: true },
        { body: 'A technique to encrypt sensitive data in JavaScript', isCorrect: false },
        { body: 'A technique to serialize and deserialize objects', isCorrect: false },
        { body: 'A technique to compress data for efficient storage', isCorrect: false },
      ],
    },
    {
      subject: 'Design Patterns',
      body: 'Which design pattern is used to define a family of algorithms and make them interchangeable?',
      level: 'senior',
      answers: [
        { body: 'Strategy', isCorrect: true },
        { body: 'Observer', isCorrect: false },
        { body: 'Decorator', isCorrect: false },
        { body: 'Adapter', isCorrect: false },
      ],
    },
    {
      subject: 'Data Structures',
      body: 'Which data structure provides constant-time insertion, deletion, and retrieval of the maximum element?',
      level: 'senior',
      answers: [
        { body: 'Linked List', isCorrect: false },
        { body: 'Stack', isCorrect: false },
        { body: 'Queue', isCorrect: false },
        { body: 'Heap', isCorrect: true },
      ],
    },
    {
      subject: 'Algorithms',
      body: 'What is the time complexity of a binary search algorithm?',
      level: 'senior',
      answers: [
        { body: 'O(1)', isCorrect: false },
        { body: 'O(log n)', isCorrect: true },
        { body: 'O(n)', isCorrect: false },
        { body: 'O(n log n)', isCorrect: false },
      ],
    },
    {
      subject: 'Design Patterns',
      body: 'Which design pattern is used to ensure a class has only one instance and provides a global point of access to it?',
      level: 'senior',
      answers: [
        { body: 'Singleton', isCorrect: true },
        { body: 'Factory', isCorrect: false },
        { body: 'Abstract Factory', isCorrect: false },
        { body: 'Prototype', isCorrect: false },
      ],
    },
    {
      subject: 'Data Structures',
      body: 'Which data structure is suitable for implementing a cache with limited capacity?',
      level: 'senior',
      answers: [
        { body: 'Linked List', isCorrect: true },
        { body: 'Stack', isCorrect: false },
        { body: 'Queue', isCorrect: false },
        { body: 'Map', isCorrect: false },
      ],
    },
    {
      subject: 'Data Structures',
      body: 'What is the time complexity of a hash table\'s average-case insertion, deletion, and retrieval operations?',
      level: 'senior',
      answers: [
        { body: 'O(1)', isCorrect: true },
        { body: 'O(log n)', isCorrect: false },
        { body: 'O(n)', isCorrect: false },
        { body: 'O(n log n)', isCorrect: false },
      ],
    },
    {
      subject: 'Design Patterns',
      body: 'Which design pattern is used to notify multiple objects about state changes in another object?',
      level: 'senior',
      answers: [
        { body: 'Strategy', isCorrect: false },
        { body: 'Observer', isCorrect: true },
        { body: 'Decorator', isCorrect: false },
        { body: 'Adapter', isCorrect: false },
      ],
    },
    {
      subject: 'Algorithms',
      body: 'Which algorithm is commonly used to find the shortest path between two nodes in a weighted graph?',
      level: 'senior',
      answers: [
        { body: 'Breadth-First Search (BFS)', isCorrect: false },
        { body: 'Depth-First Search (DFS)', isCorrect: false },
        { body: 'Dijkstra\'s algorithm', isCorrect: true },
        { body: 'Bellman-Ford algorithm', isCorrect: false },
      ],
    },
    {
      subject: 'Data Structures',
      body: 'Which data structure is best suited for implementing a breadth-first search traversal of a graph?',
      level: 'senior',
      answers: [
        { body: 'Linked List', isCorrect: false },
        { body: 'Stack', isCorrect: false },
        { body: 'Queue', isCorrect: true },
        { body: 'Heap', isCorrect: false },
      ],
    },
    {
      subject: 'Algorithms',
      body: 'What is the time complexity of a bubble sort algorithm?',
      level: 'senior',
      answers: [
        { body: 'O(1)', isCorrect: false },
        { body: 'O(log n)', isCorrect: false },
        { body: 'O(n)', isCorrect: false },
        { body: 'O(n^2)', isCorrect: true },
      ],
    },
    {
      subject: 'Design Patterns',
      body: 'Which design pattern is used to add new functionality to an existing object dynamically?',
      level: 'senior',
      answers: [
        { body: 'Strategy', isCorrect: false },
        { body: 'Observer', isCorrect: false },
        { body: 'Decorator', isCorrect: true },
        { body: 'Adapter', isCorrect: false },
      ],
    },
    {
      subject: 'Algorithms',
      body: 'Which algorithm is commonly used to find the longest common subsequence between two strings?',
      level: 'senior',
      answers: [
        { body: 'Breadth-First Search (BFS)', isCorrect: false },
        { body: 'Depth-First Search (DFS)', isCorrect: false },
        { body: 'Dijkstra\'s algorithm', isCorrect: false },
        { body: 'Longest Common Subsequence (LCS) algorithm', isCorrect: true },
      ],
    },
    {
      subject: 'Data Structures',
      body: 'Which data structure is commonly used to implement a graph?',
      level: 'senior',
      answers: [
        { body: 'Linked List', isCorrect: false },
        { body: 'Stack', isCorrect: false },
        { body: 'Queue', isCorrect: false },
        { body: 'Adjacency List', isCorrect: true },
      ],
    },
    {
      subject: 'Algorithms',
      body: 'What is the time complexity of a quicksort algorithm in the worst case?',
      level: 'senior',
      answers: [
        { body: 'O(1)', isCorrect: false },
        { body: 'O(log n)', isCorrect: false },
        { body: 'O(n)', isCorrect: false },
        { body: 'O(n^2)', isCorrect: true },
      ],
    },
    {
      subject: 'Design Patterns',
      body: 'Which design pattern is used to separate the construction of complex objects from their representation?',
      level: 'senior',
      answers: [
        { body: 'Singleton', isCorrect: false },
        { body: 'Factory', isCorrect: false },
        { body: 'Builder', isCorrect: true },
        { body: 'Abstract Factory', isCorrect: false },
      ],
    },
    {
      subject: 'Algorithms',
      body: 'Which algorithm is commonly used to find the shortest path between all pairs of nodes in a weighted graph?',
      level: 'senior',
      answers: [
        { body: 'Breadth-First Search (BFS)', isCorrect: false },
        { body: 'Depth-First Search (DFS)', isCorrect: false },
        { body: 'Dijkstra\'s algorithm', isCorrect: true },
        { body: 'Floyd-Warshall algorithm', isCorrect: false },
      ],
    },
    {
      subject: 'Data Structures',
      body: 'Which data structure is commonly used to implement a First-In, First-Out (FIFO) behavior?',
      level: 'senior',
      answers: [
        { body: 'Array', isCorrect: false },
        { body: 'Linked List', isCorrect: false },
        { body: 'Stack', isCorrect: false },
        { body: 'Queue', isCorrect: true },
      ],
    },
    {
      subject: 'Algorithms',
      body: 'What is the time complexity of a merge sort algorithm?',
      level: 'senior',
      answers: [
        { body: 'O(1)', isCorrect: false },
        { body: 'O(log n)', isCorrect: false },
        { body: 'O(n)', isCorrect: false },
        { body: 'O(n log n)', isCorrect: true },
      ],
    },
    {
      subject: 'Design Patterns',
      body: 'Which design pattern is used to convert the interface of a class into another interface clients expect?',
      level: 'senior',
      answers: [
        { body: 'Singleton', isCorrect: false },
        { body: 'Adapter', isCorrect: true },
        { body: 'Factory', isCorrect: false },
        { body: 'Abstract Factory', isCorrect: false },
      ],
    },
    // FIXME: check correct answers from here on!
  ]
}
