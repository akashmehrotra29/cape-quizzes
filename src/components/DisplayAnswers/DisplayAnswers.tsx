import { useQuiz } from "../../context/quiz.context";
import {
  getOptionStyle,
  isCorrectOption,
  isOptionSelected,
} from "./DisplayAnswers.utils";

export const DisplayAnswers = () => {
  const {
    quizState: { currentQuiz, result },
  } = useQuiz();

  const getStyleForOptions = (optionId: string, questionId: string) => {
    const rightAndWrongStyles = getOptionStyle(
      result.resultArray,
      optionId,
      questionId
    );
    return rightAndWrongStyles ? rightAndWrongStyles : "dark:bg-gray-700";
  };

  return (
    <div className="mt-24 flex flex-col justify-center items-center my-auto">
      <div className="text-3xl font-semibold mb-6 dark:text-gray-50">
        {" "}
        Answers
      </div>
      <div className="md:w-3/5 ">
        {currentQuiz?.questions.map((question, index) => {
          return (
            <div
              className="flex flex-col justify-center items-center px-1"
              key={question._id}
            >
              <div className="text-lg font-semibold mb-4 md: w-4/5 md:text-left">
                {index + 1}. {question.question}
              </div>
              <div className="flex flex-col w-4/5 mb-4">
                {question.options.map((option) => {
                  return (
                    <div
                      className={`bg-gray-100 px-4 py-3 rounded-full mb-4 text-left  ${getStyleForOptions(
                        option._id,
                        question._id
                      )}`}
                    >
                      {isOptionSelected(
                        result.resultArray,
                        option._id,
                        question._id
                      ) ? (
                        isCorrectOption(
                          result.resultArray,
                          option._id,
                          question._id
                        ) ? (
                          <div className="flex justify-between items-center">
                            <span>{option.text}</span>
                          </div>
                        ) : (
                          <div className="flex justify-between items-center">
                            <span>{option.text}</span>
                          </div>
                        )
                      ) : (
                        option.text
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
