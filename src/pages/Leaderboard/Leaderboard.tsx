import { useQuiz } from "../../context/quiz.context";
import { API } from "../../utils/api.config";
import { getTotalScore } from "../Scoreboard/Scoreboard.util";
import axios from "axios";
import { useEffect } from "react";
import { FaTrophy } from "react-icons/fa";

export const Leaderboard = () => {
  const {
    quizState: { leaderBoard, currentUserScoreBoard },
    quizDispatch,
  } = useQuiz();

  useEffect(() => {
    (async function () {
      const {
        data: { leaderboard },
        status,
      } = await axios({
        method: "GET",
        url: `${API}/leaderboard`,
      });
      if (status === 200) {
        quizDispatch({
          type: "SET_LEADERBOARD",
          payload: leaderboard,
        });
      }
    })();
  }, [currentUserScoreBoard]);

  return (
    <>
      {/* <Header /> */}
      <div className="flex justify-center items-center flex-col mx-4">
        <div className="font-extrabold text-4xl my-6 text-grey-500">
          LeaderBoard
        </div>
        {leaderBoard.map((user) => {
          console.log({ user });

          return (
            <div
              key={user._id}
              className="flex w-full m-2 md:w-9/12 items-center justify-between m-4 shadow-md rounded-lg p-4"
            >
              <div className="flex flex-col items-start justify-start w-1/2 ml-10">
                <div className="capitalize font-semibold text-lg">
                  {user.userId.firstName} {user.userId.lastName}
                </div>
                <div>@{user.userId.userName}</div>
              </div>
              <div>
                <div className="capitalize font-semibold text-lg">
                  {user.quizId.category}
                </div>
                <div className="flex w-20 justify-between items-center text-primary">
                  {/* trophy icon */}
                  <FaTrophy />
                  <div className="flex text-lg font-semibold text-gray-600 dark:text-gray-50">
                    {user.score} / {getTotalScore(user.quizId)}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
