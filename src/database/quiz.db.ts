import { v4 as uuidv4 } from "uuid";
import { QuizDatabase } from "./quiz.db.types";

// userData: {
//     id: "1234",
//     name: "akash",
//     email: "akashmehrotra29@gmail.com",
//     token: "qwe",
//     takenQuizzes: [],
//   },

export const quizDB: QuizDatabase = [
  {
    id: uuidv4(),
    category: "javascript",
    description: "Test your knowledge of JavaScript",
    playTime: 5,
    maxScore: 10,
    image: "",
    questions: [
      {
        id: uuidv4(),
        question:
          "Which of the following is the correct syntax to print a page using JavaScript?",
        points: 5,
        negativePoints: -1,
        options: [
          {
            id: uuidv4(),
            text: "window.print();",
            isRight: true,
          },
          {
            id: uuidv4(),
            text: "browser.print();",
            isRight: false,
          },
          {
            id: uuidv4(),
            text: "navigator.print();",
            isRight: false,
          },
          {
            id: uuidv4(),
            text: "document.print();",
            isRight: false,
          },
        ],
      },
      {
        id: uuidv4(),
        question:
          "Which built-in method combines the text of two strings and returns a new string?",
        points: 5,
        negativePoints: -1,
        options: [
          {
            id: uuidv4(),
            text: "append()",
            isRight: false,
          },
          {
            id: uuidv4(),
            text: "concat()",
            isRight: true,
          },
          {
            id: uuidv4(),
            text: "attach()",
            isRight: false,
          },
          {
            id: uuidv4(),
            text: "None of the above",
            isRight: false,
          },
        ],
      },
    ],
  },
];
