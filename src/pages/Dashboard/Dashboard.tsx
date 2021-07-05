import { useQuiz } from "../../context/quiz.context";
import { QuizCard } from "../../components";

export const Dashboard = (): JSX.Element => {
  const {
    quizState: { quizzes },
  } = useQuiz();

  return (
    <div>
      {/* create header */}
      <h1>Dashbooard</h1>
      <div className='py-6 md:p-10 grid gap-14 sm:grid-cols-2 md:grid-cols-3 md:gap-22 md:mx-10'>
        {quizzes.map((quiz) => {
        return <QuizCard key={quiz.id} {...quiz} />;
      })}
      </div>
      
    </div>
  );
};
