import { Navigate } from "react-router";
import { DisplayAnswers } from "../../components";

import { useQuiz } from "../../context/quiz.context";
import {
  getAttemptedQuestions,
  getCorrectAnswers,
  getIncorrectAnswers,
  getTotalQuestions,
  getTotalScore,
} from "./Scoreboard.util";

export const Scoreboard = () => {
  const {
    quizState: { currentQuiz, score, result },
  } = useQuiz();

  return currentQuiz ? (
    <div>
      <div>This is scoreboard</div>
      <div>
        Your Score : {score}/{getTotalScore(currentQuiz)}
      </div>
      <div>Attempted : {getAttemptedQuestions(result.resultArray)}</div>
      <div>Correct: {getCorrectAnswers(result.resultArray)}</div>
      <div>Total Questions: {getTotalQuestions(result.resultArray)}</div>
      <div>Incorrect: {getIncorrectAnswers(result.resultArray)}</div>
      <DisplayAnswers />
    </div>
  ) : (
    <Navigate to="/dashboard"></Navigate>
  );
};
