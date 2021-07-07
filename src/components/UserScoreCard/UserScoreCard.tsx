import { useNavigate } from "react-router";
import { useAuth } from "../../context/auth.context";
import { useQuiz } from "../../context/quiz.context";
import { ScoreBoard } from "../../context/quiz.context.types";
import { NavLink } from "react-router-dom";
import { getTotalScore } from "../../pages/Scoreboard/Scoreboard.util";
import { useEffect } from "react";

export const UserScoreCard = ({ quizRecord }: { quizRecord: ScoreBoard }) => {
  const { _id, quizId: quiz, score, numberOfAttempts } = quizRecord;
  console.log({ quizRecord });
  const {
    authState: { token },
  } = useAuth();
  const { quizDispatch } = useQuiz();

  const navigate = useNavigate();
  useEffect(() => {
    !token && navigate("/");
  }, [token]);

  const retakeQuiz = (quizId: string) => {
    quizDispatch({
      type: "UPDATE_QUIZID",
      payload: quizId,
    });
    quizDispatch({
      type: "INITIALIZE_QUES_NUMBER_AND_SCORE",
    });
  };

  return (
    <div className="text-left w-full md:w-4/6 border-2 border-primary rounded-md flex justify-between p-4 mt-10">
      <div key={_id} className="min-h-24 flex flex-col justify-between">
        <h2 className="text-2xl font-bold mb-2 text-grey-500">
          {quiz.category}
        </h2>
        <div className="mb-3">
          <span className=" text-grey-500 font-semibold p-1">Score</span> :{" "}
          <span className="text-lg font-semibold text-primary">{score}</span> /{" "}
          {getTotalScore(quiz)}
        </div>
        <div className="mb-3">
          <span className=" text-grey-500 font-semibold p-1">Attempts</span> :{" "}
          <span className="text-lg font-semibold text-primary">
            {numberOfAttempts}
          </span>
        </div>
      </div>
      <NavLink to={`/quiz/${quizRecord.quizId._id}`}>
        <button
          className="py-2 px-4 bg-primary text-gray-50 text-sm font-semibold rounded-full hover:bg-hover outline-none"
          onClick={() => retakeQuiz(quizRecord.quizId._id)}
        >
          Retake Quiz
        </button>
        {/* "show result" button to navigate to /quiz/:quizId/scoreboard */}
      </NavLink>
    </div>
  );
};
