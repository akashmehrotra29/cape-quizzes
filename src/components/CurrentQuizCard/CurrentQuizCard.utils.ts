export const showAnswer = (
  selectedOption: string,
  isRight: boolean,
  optionId: string
): string => {
  if (isRight && selectedOption === optionId) {
    return "bg-green-500 text-gray-50 hover:bg-green-600";
  }
  if (!isRight && selectedOption === optionId) {
    return "bg-red-500 text-gray-50 hover:bg-red-600";
  }
  return "";
};
