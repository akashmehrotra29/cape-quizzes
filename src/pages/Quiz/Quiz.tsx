import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useQuiz } from "../../context/quiz.context";
import { Quiz } from "../../database/quiz.db.types";
import { CurrentQuizCard } from "../../components";

export const QuizPage = () => {
  const {
    quizState: { quizzes, currentQuiz, currentQuestionNumber },
    quizDispatch,
  } = useQuiz();
  const { quizId } = useParams();

  useEffect(() => {
    const findCurrentQuiz = quizzes.find((quiz) => {
      return quiz.id === quizId;
    }) as Quiz;

    quizDispatch({
      type: "LOAD_CURRENT_QUIZ",
      payload: { currentQuiz: findCurrentQuiz },
    });
  }, []);

  console.log({ quizzes });

  return (
    <div>
      {currentQuiz && currentQuiz.questions[currentQuestionNumber] ? (
        <CurrentQuizCard currentQuiz={currentQuiz} />
      ) : (
        <p>The Quiz has ended.</p>
      )}
    </div>
  );
};
