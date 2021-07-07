import React from "react";
import { Quiz, QuizDatabase } from "../database/quiz.db.types";

export type QuizId = {
  quizId: string;
};

export type User = {
  _id: string;
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
  createdAt: string;
  updatedAt: string;
};

export type LeaderBoard = {
  _id: string;
  numberOfAttempts: Number;
  quizId: Quiz;
  score: Number;
  userId: User;
};

export type ResultArray = {
  id: String;
  hasTaken: Boolean;
  selectedOption: String;
  correctOpton: String;
};

export type ScoreBoard = {
  _id: string;
  numberOfAttempts: Number;
  quizId: Quiz;
  score: Number;
  userId: String;
  resultArray: [ResultArray];
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
  currentUserScoreBoard: ScoreBoard[];
  leaderBoard: LeaderBoard[];
};

export type QuizContextType = {
  quizState: State;
  quizDispatch: React.Dispatch<ActionType>; //React.Dispatch<any>;
};

export type ActionType =
  | { type: "START_QUIZ"; payload: QuizId }
  | { type: "LOAD_QUIZZES"; payload: QuizDatabase }
  | { type: "INITIALIZE_QUES_NUMBER_AND_SCORE" }
  | { type: "LOAD_CURRENT_QUIZ"; payload: { currentQuiz: Quiz } }
  | { type: "UPDATE_SCORE"; payload: { points: number } }
  | { type: "UPDATE_RESULT"; payload: Result }
  | { type: "INCREMENT_QUESTION_NUMBER"; payload?: number }
  | { type: "LOAD_CURRENT_USER_SCORE_BOARD"; payload: ScoreBoard[] }
  | { type: "UPDATE_QUIZID"; payload: string }
  | { type: "SET_LEADERBOARD"; payload: LeaderBoard[] };
