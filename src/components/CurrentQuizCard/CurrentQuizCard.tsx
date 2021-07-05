import { useState } from "react";
import { useNavigate } from "react-router";
import { useQuiz } from "../../context/quiz.context";
import { CurrentQuizCardProp } from "./CurrrentQuizCard.types";
import { showAnswer } from "./CurrentQuizCard.utils";

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

  const viewScoreboard = () => {
    navigate(`/quiz/${id}/scoreboard`, { replace: true });

    if (!optionId) {
      quizDispatch({
        type: "UPDATE_RESULT",
        payload: {
          id: questions[currentQuestionNumber].id,
          hasTaken: false,
          selectedOption: "",
          correctOption: questions[currentQuestionNumber].options.find(
            (option) => option.isRight === true
          )?.id as string,
        },
      });
    }
  };

  const nextQuestion = () => {
    quizDispatch({ type: "INCREMENT_QUESTION_NUMBER" });
    setIsDisabled(false);

    if (!optionId) {
      quizDispatch({
        type: "UPDATE_RESULT",
        payload: {
          id: questions[currentQuestionNumber].id,
          hasTaken: false,
          selectedOption: "",
          correctOption: questions[currentQuestionNumber].options.find(
            (option) => option.isRight === true
          )?.id as string,
        },
      });
    }

    setOptionId("");
  };

  const updateScoreAndResult = (selectedOption: string, isRight: boolean) => {
    if (isRight) {
      quizDispatch({
        type: "UPDATE_SCORE",
        payload: { points: questions[currentQuestionNumber].points },
      });
    } else {
      quizDispatch({
        type: "UPDATE_SCORE",
        payload: { points: questions[currentQuestionNumber].negativePoints },
      });
    }

    setOptionId(selectedOption);
    setIsDisabled((disabled) => !disabled);

    const option = questions[currentQuestionNumber].options.find(
      (option) => option.isRight
    )?.id;

    if (option !== undefined) {
      quizDispatch({
        type: "UPDATE_RESULT",
        payload: {
          id: questions[currentQuestionNumber].id,
          hasTaken: true,
          selectedOption,
          correctOption: option,
        },
      });
    }

    setTimeout(() => {
      if (currentQuestionNumber === questions.length - 1) {
        viewScoreboard();
      }
      nextQuestion();
    }, 1000);
  };

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
              onClick={() => updateScoreAndResult(option.id, option.isRight)}
            >
              {option.text}
            </button>
          );
        })}
      </div>

      {currentQuestionNumber === questions.length - 1 ? (
        <button onClick={() => viewScoreboard()}>Submit</button>
      ) : (
        <button onClick={() => nextQuestion()}>Next Question</button>
      )}
    </div>
  );
};
