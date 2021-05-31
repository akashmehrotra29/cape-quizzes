import React, { createContext, useContext, useReducer } from "react";
import { quizDB } from "../quiz-db/quiz-db";
import { QuizContextType, State } from "./quiz-context.types";
import { quizReducer } from "../reducers/quiz-reducer";

export const initialState: State = {
  quizzes: quizDB,
  currentQuestionNumber: -1,
  score: 0,
  result: {
    //store array of result object for every user on server
    quizId: "",
    resultArray: [],
  },
  currentQuiz: null,
};

const QuizContext = createContext<QuizContextType>({} as QuizContextType);

export const QuizProvider: React.FC = ({ children }) => {
  const [quizState, quizDispatch] = useReducer(quizReducer, initialState);
  return (
    <QuizContext.Provider value={{ quizState, quizDispatch }}>
      {children}
    </QuizContext.Provider>
  );
};

export const useQuiz = () => {
  return useContext(QuizContext);
};
