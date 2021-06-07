import { NavigateFunction } from "react-router";
import { ActionType } from "../../context/quiz.context.types";
import { Questions } from "../../database/quiz.db.types";

export const viewScoreboard = (
  navigate: NavigateFunction,
  id: string,
  selectedOption: string,
  quizDispatch: React.Dispatch<ActionType>,
  questions: Questions[],
  currentQuestionNumber: number
) => {
  navigate(`/quiz/${id}/scoreboard`, { replace: true });

  if (!selectedOption) {
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

export const nextQuestion = (
  quizDispatch: React.Dispatch<ActionType>,
  setIsDisabled: React.Dispatch<React.SetStateAction<boolean>>,
  selectedOption: string,
  questions: Questions[],
  currentQuestionNumber: number,
  setOptionId: React.Dispatch<React.SetStateAction<string>>
) => {
  quizDispatch({ type: "INCREMENT_QUESTION_NUMBER" });
  setIsDisabled(false);

  if (!selectedOption) {
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

export const updateScoreAndResult = (
  selectedOption: string,
  isRight: boolean,
  quizDispatch: React.Dispatch<ActionType>,
  questions: Questions[],
  currentQuestionNumber: number,
  setOptionId: React.Dispatch<React.SetStateAction<string>>,
  setIsDisabled: React.Dispatch<React.SetStateAction<boolean>>,
  navigate: NavigateFunction,
  id: string
) => {
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
      viewScoreboard(
        navigate,
        id,
        selectedOption,
        quizDispatch,
        questions,
        currentQuestionNumber
      );
    }
    nextQuestion(
      quizDispatch,
      setIsDisabled,
      selectedOption,
      questions,
      currentQuestionNumber,
      setOptionId
    );
  }, 1000);
};

export const showAnswer = (
  selectedOption: string,
  isRight: boolean,
  optionId: string
): string => {
  if (isRight && selectedOption === optionId) {
    return "green";
  }
  if (!isRight && selectedOption === optionId) {
    return "red";
  }
  return "";
};
