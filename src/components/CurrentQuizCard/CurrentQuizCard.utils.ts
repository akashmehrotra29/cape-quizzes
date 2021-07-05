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
