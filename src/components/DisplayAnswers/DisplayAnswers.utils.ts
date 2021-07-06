import { Result } from "../../context/quiz.context.types";

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
    return "bg-green-500 text-gray-50 hover:bg-green-600";
  }
  if (
    isOptionSelected(resultArray, optionId, questionId) &&
    !isCorrectOption(resultArray, optionId, questionId)
  ) {
    return "bg-red-500 text-gray-50 hover:bg-red-600";
  }
  return "";
};
