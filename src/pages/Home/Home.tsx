import { Link } from "react-router-dom";
import { Navbar } from "../../components";

export const Home = () => {
  return (
    <div>
      <Navbar />
      <h1>This is home page</h1>
      <Link to={`/dashboard`}>
        <button> Explore Quizes</button>
      </Link>
    </div>
  );
};
