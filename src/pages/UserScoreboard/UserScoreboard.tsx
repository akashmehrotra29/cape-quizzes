import { NavLink } from "react-router-dom";
import { useAuth } from "../../context/auth.context";
import { useQuiz } from "../../context/quiz.context";
import { UserScoreCard } from "../../components";

import { useEffect } from "react";
import axios from "axios";
import { API } from "../../utils/api.config";

export const UserScoreboard = () => {
  const {
    quizState: { currentUserScoreBoard },
    quizDispatch,
  } = useQuiz();
  const {
    authState: { firstName, token },
  } = useAuth();

  //useEffect to load currentUserScoreboard
  useEffect(() => {
    token &&
      (async function () {
        const {
          data: { attemptedQuizDetails },
          status,
        } = await axios({
          method: "GET",
          url: `${API}/scoreboard`,
          headers: {
            authorization: token,
          },
        });
        if (status === 200) {
          quizDispatch({
            type: "LOAD_CURRENT_USER_SCORE_BOARD",
            payload: attemptedQuizDetails,
          });
        }
      })();
  }, [token]);

  return (
    <div>
      {/* <Header /> */}
      <div className="mt-10 text-3xl font-extrabold">
        {firstName}'s ScoreBoard
      </div>
      <div className="flex flex-col items-center justify-center px-5">
        {currentUserScoreBoard.length !== 0 ? (
          currentUserScoreBoard.map((quizRecord) => {
            // return <UserScorecard />
            return (
              <UserScoreCard quizRecord={quizRecord} key={quizRecord._id} />
            );
          })
        ) : (
          <div className="mt-20 font-semibold text-xl">
            <span className="block mb-10">
              "You haven't attempted any quiz yet"
            </span>
            <NavLink to={`/dashboard`}>
              <button className="py-2 px-4 bg-primary text-gray-50 text-sm font-semibold rounded-full hover:bg-hover outline-none mb-8">
                Take Quizzes
              </button>
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
};
