import { Result } from "../../context/quiz-context.types";
import { Quiz } from "../../database/quiz-db.types";

export const getIncorrectAnswers = (resultArray: Result[]): number => {
  const incorrectAnswers = resultArray.filter(
    (result) => result.correctOption !== result.selectedOption
  );
  return incorrectAnswers.length;
};

export const getTotalQuestions = (resultArray: Result[]): number => {
  return resultArray.length;
};

export const getCorrectAnswers = (resultArray: Result[]): number => {
  const correctAnswers = resultArray.filter(
    (result) => result.correctOption === result.selectedOption
  );
  return correctAnswers.length;
};

export const getAttemptedQuestions = (resultArray: Result[]): number => {
  const attemptedQuestions = resultArray.filter((result) => result.hasTaken);
  return attemptedQuestions.length;
};

export const getTotalScore = (currentQuiz: Quiz | null): number => {
  const totalScore = currentQuiz?.questions.reduce((acc, currQues) => {
    return acc + currQues.points;
  }, 0);
  return totalScore ? totalScore : 0;
};
