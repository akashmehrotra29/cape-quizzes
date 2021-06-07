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

  return (
    <div>
      {currentQuiz?.questions.map((question, index) => {
        return (
          <div key={question.id}>
            <div>
              {index + 1}. {question.question}
            </div>
            <div>
              {question.options.map((option) => {
                return (
                  <div
                    style={{
                      color: `${getOptionStyle(
                        result.resultArray,
                        option.id,
                        question.id
                      )}`,
                    }}
                  >
                    {isOptionSelected(
                      result.resultArray,
                      option.id,
                      question.id
                    ) ? (
                      isCorrectOption(
                        result.resultArray,
                        option.id,
                        question.id
                      ) ? (
                        <div>
                          {option.text}
                          <span> Correct</span>
                        </div>
                      ) : (
                        <div>
                          {option.text}
                          <span> Incorrect</span>
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
  );
};
