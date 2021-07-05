import { useState } from "react";
import { Quiz } from "../../database/quiz.db.types";
import { QuizDetailsModal } from "../";

export const QuizCard = (quiz: Quiz) => {
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <div className="w-full md:shadow-lg rounded-xl" key={quiz.id}>
      <div className="w-full">
        <img
          src="https://cdn.pixabay.com/photo/2015/04/23/17/41/javascript-736400_960_720.png"
          alt={quiz.category}
        />
      </div>
      <div className="text-left p-3">
        <div className="text-lg mb-2 font-semibold">{quiz.category}</div>

        <div className="mb-2">{quiz.description}</div>

        <div className="flex justify-between items-center">
          <div className="text-sm text-gray-500">
            Total Questions: {quiz.questions.length}
          </div>
          <button
            className="py-2 px-4 bg-primary text-white text-sm font-semibold rounded-full hover:bg-hover outline-none"
            onClick={() => setShowModal(true)}
          >
            start quiz
          </button>

          {showModal && (
            <QuizDetailsModal setShowModal={setShowModal} {...quiz} />
          )}
        </div>
      </div>
    </div>
  );
};
