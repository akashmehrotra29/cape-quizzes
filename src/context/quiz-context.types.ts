import React, { Dispatch } from "react";
import { Quiz, QuizDatabase } from "../quiz-db/quiz-db.types";

export type Result = {
  id: string;
  hasTaken: boolean;
  selectedOption: string;
  correctOption: string;
};

export type State = {
  quizzes: Quiz[];
  currentQuestionNumber: number;
  score: number;
  result: {
    quizId: string;
    resultArray: Result[];
  };
  currentQuiz: null | Quiz;
};

export type QuizContextType = {
  quizState: State;
  quizDispatch: Dispatch<ActionType>; //React.Dispatch<any>;
};

export type ActionType = { type: "LOAD_QUIZ"; payload: QuizDatabase };
