import { useState } from "react";
import { useNavigate, useParams } from "react-router";
import { useQuiz } from "../../context/quiz.context";
import { CurrentQuizCardProp } from "./CurrrentQuizCard.types";
import { showAnswer } from "./CurrentQuizCard.utils";
import { useAuth } from "../../context/auth.context";
import { API } from "../../utils/api.config";
import axios from "axios";

export const CurrentQuizCard = ({
  currentQuiz: { _id, category: topic, questions },
}: CurrentQuizCardProp) => {
  const navigate = useNavigate();
  const { quizId } = useParams();

  const {
    quizState: { currentQuestionNumber, score, result },
    quizDispatch,
  } = useQuiz();
  const {
    authState: { token },
  } = useAuth();

  const [isDisabled, setIsDisabled] = useState<boolean>(false);
  const [optionId, setOptionId] = useState<string>("");

  const viewScoreboard = async () => {
    navigate(`/quiz/${_id}/scoreboard`, { replace: true });

    if (!optionId) {
      quizDispatch({
        type: "UPDATE_RESULT",
        payload: {
          id: questions[currentQuestionNumber]._id,
          hasTaken: false,
          selectedOption: "",
          correctOption: questions[currentQuestionNumber].options.find(
            (option) => option.isRight === true
          )?._id as string,
        },
      });
    }

    if (token) {
      try {
        const {
          data: { attemptedQuizDetails },
          status,
        } = await axios({
          method: "POST",
          url: `${API}/scoreboard`,
          data: {
            score: score,
            quizId,
            resultArray: result.resultArray,
          },
          headers: {
            authorization: token,
          },
        });

        if (status === 200)
          quizDispatch({
            type: "LOAD_CURRENT_USER_SCORE_BOARD",
            payload: attemptedQuizDetails,
          });

        console.log({attemptedQuizDetails})
      } catch (error) {
        console.error({ error });
      }
    }

    navigate(`/quiz/${_id}/scoreboard`, { replace: true });
  };

  const nextQuestion = () => {
    quizDispatch({ type: "INCREMENT_QUESTION_NUMBER" });
    setIsDisabled(false);

    if (!optionId) {
      quizDispatch({
        type: "UPDATE_RESULT",
        payload: {
          id: questions[currentQuestionNumber]._id,
          hasTaken: false,
          selectedOption: "",
          correctOption: questions[currentQuestionNumber].options.find(
            (option) => option.isRight === true
          )?._id as string,
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
    )?._id;

    if (option !== undefined) {
      quizDispatch({
        type: "UPDATE_RESULT",
        payload: {
          id: questions[currentQuestionNumber]._id,
          hasTaken: true,
          selectedOption,
          correctOption: option,
        },
      });
    }

    // setTimeout(() => {
    //   if (currentQuestionNumber === questions.length - 1) {
    //     viewScoreboard();
    //   }
    //   nextQuestion();
    // }, 1000);
  };

  return (
    <div className="max-w-full flex justify-center items-center h-full text-gray-600 dark:text-gray-50">
      <div className="md:w-2/4 flex flex-col justify-center items-center my-auto">
        <div className="text-lg font-semibold uppercase border-b-2 border-primary my-6">{`${topic} quiz`}</div>
        <div className="flex justify-between w-full p-4 text-gray-400">
          <div>
            <span className="text-xl"></span>
            <span className="font-extrabold text-3xl pr-1">
              Q:{" "}
              <span className="text-primary">{currentQuestionNumber + 1}</span>/
              {questions.length}
            </span>
          </div>
          <div>
            <span className="text-md pr-2"></span>
            <span className="font-extrabold text-3xl">
              SCORE: <span className="text-primary">{score}</span>
            </span>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center w-4/5 px-2">
          <div className="text-lg font-semibold mb-8">
            {questions[currentQuestionNumber].question}
          </div>
          <div className="flex flex-col w-full mb-4">
            {questions[currentQuestionNumber].options.map((option) => {
              return (
                <button
                  className={`bg-gray-100 hover:bg-gray-200 px-4 py-5 rounded-full mb-6 text-xl ${
                    showAnswer(option._id, option.isRight, optionId)
                      ? showAnswer(option._id, option.isRight, optionId)
                      : "dark:bg-gray-700"
                  }`}
                  key={option._id}
                  disabled={isDisabled}
                  onClick={() =>
                    updateScoreAndResult(option._id, option.isRight)
                  }
                >
                  {option.text}
                </button>
              );
            })}
          </div>
        </div>

        {currentQuestionNumber === questions.length - 1 ? (
          <button
            className="p-3 bg-primary text-gray-50 font-semibold text-l rounded-full"
            onClick={viewScoreboard}
          >
            Submit Quiz
          </button>
        ) : (
          <button
            className="p-3 bg-primary text-gray-50 font-semibold text-l rounded-full"
            onClick={nextQuestion}
          >
            Next Question
          </button>
        )}
      </div>
    </div>
  );
};
