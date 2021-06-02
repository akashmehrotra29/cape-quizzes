import React from "react";
import { Quiz, QuizDatabase } from "../database/quiz-db.types";

export type QuizId = {
  quizId: string;
};

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
  quizDispatch: React.Dispatch<ActionType>; //React.Dispatch<any>;
};

export type ActionType =
  | { type: "START_QUIZ"; payload: QuizId }
  | { type: "LOAD_QUIZ"; payload: QuizDatabase }
  | { type: "INITIALIZE_QUES_NUMBER_AND_SCORE" }
  | { type: "LOAD_CURRENT_QUIZ"; payload: { currentQuiz: Quiz } }
  | { type: "UPDATE_SCORE"; payload: { points: number } }
  | { type: "UPDATE_RESULT"; payload: Result }
  | { type: "INCREMENT_QUESTION_NUMBER"; payload?: number };
