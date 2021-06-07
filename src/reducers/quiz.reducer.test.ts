import { quizDB } from "../database/quiz.db";
import { initialState } from "../context/quiz.context";
import { ActionType } from "../context/quiz.context.types";
import { quizReducer } from "./quiz.reducer";
import { type } from "os";

describe("testing reducer functions", () => {
  test("should initialize resultArray as empty array of quiz given id", () => {
    // Arrange
    const acton: ActionType = {
      type: "START_QUIZ",
      payload: { quizId: "f8dbebb4-c0f7-47fc-a1a3-7d40be55f74e" },
    };
    // Act
    const state = quizReducer(initialState, acton);
    // Assert
    expect(state).toEqual({
      ...initialState,
      result: {
        ...initialState.result,
        quizId: "f8dbebb4-c0f7-47fc-a1a3-7d40be55f74e",
        resultArray: [],
      },
    });
  });

  test("should initialize currentQuesNumber and score", () => {
    const action: ActionType = {
      type: "INITIALIZE_QUES_NUMBER_AND_SCORE",
    };

    const state = quizReducer(initialState, action);

    expect(state).toEqual({
      ...initialState,
      currentQuestionNumber: 0,
      score: 0,
    });
  });

  test("should load current quiz from database", () => {
    const action: ActionType = {
      type: "LOAD_CURRENT_QUIZ",
      payload: { currentQuiz: quizDB[0] },
    };

    const state = quizReducer(initialState, action);

    expect(state.quizzes).toEqual([quizDB[0]]);
  });

  test("should update current score based upon user response", () => {
    const action: ActionType = {
      type: "UPDATE_SCORE",
      payload: {
        points: 5,
      },
    };

    const state = quizReducer(initialState, action);

    expect(state.score).toBe(5);
  });

  test("should store the user response in result array", () => {
    const action: ActionType = {
      type: "UPDATE_RESULT",
      payload: {
        id: "f8dbebb4-c0f7-47fc-a1a3-7d40be55f74e",
        hasTaken: true,
        selectedOption: "4",
        correctOption: "4",
      },
    };

    const state = quizReducer(initialState, action);

    expect(state).toEqual({
      ...initialState,
      result: {
        ...initialState.result,
        resultArray: [...initialState.result.resultArray, action.payload],
      },
    });
  });

  test("should increment the question number by 1", () => {
    const action: ActionType = {
      type: "INCREMENT_QUESTION_NUMBER",
    };

    const state = quizReducer(initialState, action);

    expect(state).toEqual({ ...state, currentQuestionNumber: 0 });
  });
});
