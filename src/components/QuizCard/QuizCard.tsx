import { useState } from "react";
import { Quiz } from "../../database/quiz.db.types";
import { QuizDetailsModal } from "../";

export const QuizCard = (quiz: Quiz) => {
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <div style={{ border: "1px solid black" }}>
      <img src={quiz.image} alt={quiz.category} />

      <div>{quiz.category}</div>

      <div>{quiz.description}</div>

      <div>Total Questions: {quiz.questions.length}</div>

      <button onClick={() => setShowModal(true)}>start quiz</button>

      {showModal && <QuizDetailsModal setShowModal={setShowModal} {...quiz} />}
    </div>
  );
};
