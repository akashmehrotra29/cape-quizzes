import { Link } from "react-router-dom";
export const Home = () => {
  return (
    <div>
      <h1>This is home page</h1>
      <Link to={`/dashboard`}>
        <button> Explore Quizes</button>
      </Link>
    </div>
  );
};
