import React, { createContext, useContext, useEffect, useReducer } from "react";
import { QuizContextType, State } from "./quiz.context.types";
import { quizReducer } from "../reducers/quiz.reducer";
import { API } from "../utils/api.config";
import axios from "axios";

export const initialState: State = {
  quizzes: [],
  currentQuestionNumber: -1,
  score: 0,
  result: {
    quizId: "",
    resultArray: [],
  },
  currentQuiz: null,
  currentUserScoreBoard: [],
  leaderBoard: [],
};

const QuizContext = createContext<QuizContextType>({} as QuizContextType);

export const QuizProvider: React.FC = ({ children }) => {
  const [quizState, quizDispatch] = useReducer(quizReducer, initialState);

  useEffect(() => {
    (async function () {
      try {
        const {
          data: { quizzes },
          status,
        } = await axios.get(`${API}/quiz`);
        if (status === 200) {
          quizDispatch({ type: "LOAD_QUIZZES", payload: quizzes });
        }
      } catch (error) {
        console.log(error);
        console.log("failed to load quizzes");
      }
    })();
  }, []);

  return (
    <QuizContext.Provider value={{ quizState, quizDispatch }}>
      {children}
    </QuizContext.Provider>
  );
};

export const useQuiz = () => {
  return useContext(QuizContext);
};
