import { Link } from "react-router-dom";
import { Navbar } from "../../components";

export const Home = () => {
  return (
    <div>
      <Navbar />
      <header
        id="up"
        className="bg-center bg-fixed bg-no-repeat bg-center bg-cover h-screen relative bg-hero-pattern"
      >
        <div className="h-screen bg-opacity-50 bg-black flex items-center justify-center">
          <div className="mx-2 text-center">
            <h1 className="text-gray-100 font-extrabold text-4xl xs:text-5xl md:text-6xl">
              <span className="text-white">Right</span> Place To
            </h1>
            <h2 className="text-gray-200 font-extrabold text-3xl xs:text-4xl md:text-5xl leading-tight">
              <span className="text-white">Learn</span> and{" "}
              <span className="text-white">Grow</span>
            </h2>
            <div className="inline-flex">
              <Link to={`/dashboard`}>
                <button className="p-2 my-5 mx-2 bg-primary hover:bg-hover font-bold text-white rounded-full border-2 border-transparent hover:border-hover shadow-md transition duration-500 md:text-xl">
                  Explore More
                </button>
              </Link>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};
