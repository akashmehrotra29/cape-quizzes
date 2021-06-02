import React from "react";
import { Link } from "react-router-dom";
import { useQuiz } from "../../context/quiz-context";
import { QuizDetailsModalProp } from "./QuizDetailsModal.types";

export const QuizDetailsModal = ({
  setShowModal,
  id,
  topic,
  description,
  playTime,
  maxScore,
  image,
  questions,
}: QuizDetailsModalProp): JSX.Element => {
  const { quizDispatch } = useQuiz();

  const handleCancel = () => {
    return setShowModal(false);
  };

  const handleStartQuiz = () => {
    quizDispatch({ type: "START_QUIZ", payload: { quizId: id } });
    quizDispatch({ type: "INITIALIZE_QUES_NUMBER_AND_SCORE" });
  };

  return (
    <div>
      <div>{topic}</div>
      <div>Total Questions: {questions.length}</div>
      <div> Maximum Score: {maxScore} </div>
      <button onClick={handleCancel}>Cancel</button>
      <Link to={`/quiz/${id}`}>
        <button onClick={handleStartQuiz}>Start Quiz</button>
      </Link>
    </div>
  );
};
