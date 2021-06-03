import { Result } from "../../context/quiz-context.types";

export const isCorrectOption = (
  resultArray: Result[],
  optionId: string,
  questionId: string
): boolean => {
  const currentQuestionResult = resultArray.find(
    (result) => result.id === questionId
  );
  return currentQuestionResult?.correctOption === optionId;
};

export const isOptionSelected = (
  resultArray: Result[],
  optionId: string,
  questionId: string
): boolean => {
  const currentQuestionResult = resultArray.find(
    (result) => result.id === questionId
  );
  return currentQuestionResult?.selectedOption === optionId;
};

export const getOptionStyle = (
  resultArray: Result[],
  optionId: string,
  questionId: string
): string => {
  if (isCorrectOption(resultArray, optionId, questionId)) {
    return "green";
  }
  if (
    isOptionSelected(resultArray, optionId, questionId) &&
    !isCorrectOption(resultArray, optionId, questionId)
  ) {
    return "red";
  }
  return "";
};
