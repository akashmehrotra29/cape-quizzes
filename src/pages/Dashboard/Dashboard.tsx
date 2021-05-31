import { useQuiz } from "../../context/quiz-context";

const QuizCard = ({ quiz }) => {
  return <div></div>;
};

export const Dashboard = (): JSX.Element => {
  const {
    quizState: { quizzes },
  } = useQuiz();

  return (
    <div>
      {/* create header */}
      <h1>Dashbooard</h1>
      {quizzes.map((quiz) => {
        return <QuizCard quiz={quiz} />;
      })}
    </div>
  );
};
