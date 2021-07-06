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

  console.log({result})

  return currentQuiz ? (
    <div>
      <div className="flex items-center justify-center">
        <div className="text-lg font-semibold uppercase border-b-2 border-primary my-6">
          Scoreboard
        </div>
      </div>
      <div className="min-w-screen flex items-center justify-center px-5 pt-5 pb-1 rounded-b-xl">
        <div className="w-full max-w-lg mx-auto">
          <div className="px-7 bg-white shadow-lg rounded-xl">
            <div className="flex ">
              <div className="flex justify-between w-full p-4 text-gray-400">
                <div>
                  <span className="text-l"></span>
                  <span className="font-bold text-xl pr-1">
                    Your Score:{" "}
                    <span className="text-primary">
                      {score}/{getTotalScore(currentQuiz)}
                    </span>
                  </span>
                </div>
                <div>
                  <span className="text-md pr-2"></span>
                  <span className="font-bold text-xl">
                    Attempted:{" "}
                    <span className="text-primary">
                      {getAttemptedQuestions(result.resultArray)} /{" "}
                      {getTotalQuestions(result.resultArray)}
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div className="flex ">
              <div className="flex justify-between w-full p-4 text-gray-400">
                <div>
                  <span className="text-l"></span>
                  <span className="font-bold text-xl pr-1">
                    Correct:{" "}
                    <span className="text-primary">
                      {getCorrectAnswers(result.resultArray)}
                    </span>
                  </span>
                </div>
                <div>
                  <span className="text-md pr-2"></span>
                  <span className="font-bold text-xl">
                    Incorrect:{" "}
                    <span className="text-primary">
                      {getIncorrectAnswers(result.resultArray)}
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <DisplayAnswers />
    </div>
  ) : (
    <Navigate to="/dashboard"></Navigate>
  );
};
