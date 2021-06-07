import { ActionType, State } from "../context/quiz.context.types";

export const quizReducer = (state: State, action: ActionType): State => {
  switch (action.type) {
    case "START_QUIZ":
      return {
        ...state,
        result: {
          ...state.result,
          quizId: action.payload.quizId,
          resultArray: [],
        },
      };

    case "INITIALIZE_QUES_NUMBER_AND_SCORE":
      return { ...state, currentQuestionNumber: 0, score: 0 };

    case "LOAD_CURRENT_QUIZ":
      return { ...state, currentQuiz: action.payload.currentQuiz };

    case "UPDATE_SCORE":
      return { ...state, score: state.score + action.payload.points };

    case "UPDATE_RESULT":
      return {
        ...state,
        result: {
          ...state.result,
          resultArray: [...state.result?.resultArray, action.payload],
        },
      };

    case "INCREMENT_QUESTION_NUMBER":
      return {
        ...state,
        currentQuestionNumber: state.currentQuestionNumber + 1,
      };

    default:
      return state;
  }
};
