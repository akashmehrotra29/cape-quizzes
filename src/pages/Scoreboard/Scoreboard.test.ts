import {
  getAttemptedQuestions,
  getCorrectAnswers,
  getIncorrectAnswers,
  getTotalQuestions,
  getTotalScore,
} from "./Scoreboard.util";

export const result = {
  quizId: "f8dbebb4-c0f7-47fc-a1a3-7d40be55f74e",
  resultArray: [
    {
      id: "5131b8ac-0c8c-4222-b60c-27e22953598d",
      hasTaken: true,
      selectedOption: "3",
      correctOption: "3",
    },
    {
      id: "b95791c3-e76b-426f-9d2f-d508750bdcac",
      hasTaken: true,
      selectedOption: "2",
      correctOption: "1",
    },
    {
      id: "d42d8c2f-4b9c-43d0-81e7-0e3a72b56b23",
      hasTaken: false,
      selectedOption: "",
      correctOption: "4",
    },
  ],
};

const currentQuiz = quizDB[0];

describe("testing utility functions of scoreboard", () => {
  test("should return the count of incorrect or no answers choosen by the user", () => {
    const incorrectAnswers = getIncorrectAnswers(result.resultArray);

    expect(incorrectAnswers).toBe(2);
  });

  test("should return total number of questions", () => {
    const totalQuestions = getTotalQuestions(result.resultArray);

    expect(totalQuestions).toBe(3);
  });

  test("should return the count of correct answers choosen by the user", () => {
    const correctAnswers = getCorrectAnswers(result.resultArray);

    expect(correctAnswers).toBe(1);
  });

  test("should return count of questions attempted by the user", () => {
    const attemptedQuestions = getAttemptedQuestions(result.resultArray);

    expect(attemptedQuestions).toBe(2);
  });

  test("should return the maximum score that can be scored in the quiz", () => {
    const totalScore = getTotalScore(currentQuiz);

    expect(totalScore).toBe(10);
  });
});
