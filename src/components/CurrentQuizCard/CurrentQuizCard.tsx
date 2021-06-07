import { useState } from "react";
import { useNavigate } from "react-router";
import { useQuiz } from "../../context/quiz.context";
import { CurrentQuizCardProp } from "./CurrrentQuizCard.types";
import {
  nextQuestion,
  showAnswer,
  updateScoreAndResult,
  viewScoreboard,
} from "./CurrentQuizCard.utils";

export const CurrentQuizCard = ({
  currentQuiz: { id, category: topic, questions },
}: CurrentQuizCardProp) => {
  const navigate = useNavigate();

  const {
    quizState: { currentQuestionNumber, score },
    quizDispatch,
  } = useQuiz();

  const [isDisabled, setIsDisabled] = useState<boolean>(false);
  const [optionId, setOptionId] = useState<string>("");

  return (
    <div>
      <div>{topic}</div>
      <div>
        {currentQuestionNumber + 1}/{questions.length}
      </div>
      <div>Score: {score}</div>
      <div>{questions[currentQuestionNumber].question}</div>
      <div>
        {questions[currentQuestionNumber].options.map((option) => {
          return (
            <button
              style={{
                color: `${
                  showAnswer(option.id, option.isRight, optionId) &&
                  showAnswer(option.id, option.isRight, optionId)
                }`,
              }}
              key={option.id}
              disabled={isDisabled}
              onClick={() =>
                updateScoreAndResult(
                  option.id,
                  option.isRight,
                  quizDispatch,
                  questions,
                  currentQuestionNumber,
                  setOptionId,
                  setIsDisabled,
                  navigate,
                  id
                )
              }
            >
              {option.text}
            </button>
          );
        })}
      </div>

      {currentQuestionNumber === questions.length - 1 ? (
        <button
          onClick={() =>
            viewScoreboard(
              navigate,
              id,
              optionId,
              quizDispatch,
              questions,
              currentQuestionNumber
            )
          }
        >
          Submit
        </button>
      ) : (
        <button
          onClick={() =>
            nextQuestion(
              quizDispatch,
              setIsDisabled,
              optionId,
              questions,
              currentQuestionNumber,
              setOptionId
            )
          }
        >
          Next Question
        </button>
      )}
    </div>
  );
};
