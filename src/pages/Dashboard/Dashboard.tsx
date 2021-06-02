import { useQuiz } from "../../context/quiz-context";
import { QuizCard } from "../../components";

export const Dashboard = (): JSX.Element => {
  const {
    quizState: { quizzes },
  } = useQuiz();

  return (
    <div>
      {/* create header */}
      <h1>Dashbooard</h1>
      {quizzes.map((quiz) => {
        return <QuizCard key={quiz.id} {...quiz} />;
      })}
    </div>
  );
};
