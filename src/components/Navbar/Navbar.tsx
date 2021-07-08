import { useAuth } from "../../context/auth.context";
import { useTheme } from "../../context/theme.context";
import { NavLink } from "react-router-dom";
import { FaUser, FaTrophy, FaSun, FaMoon } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";

export const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const {
    authState: { token, username, firstName },
    logoutUser,
  } = useAuth();

  return (
    <nav className=" flex justify-between items-center px-2 py-3 bg-primary dark:bg-gray-800">
      <NavLink to="/" className="">
        <img
          src="https://res.cloudinary.com/akash29/image/upload/c_scale,w_60/v1625714566/quiz-app-logo_crplff.png"
          alt="logo"
        />
      </NavLink>
      <div className="flex">
        {token ? (
          <div className="flex items-center">
            <div className="font-semibold text-primary text-md mr-6">
              Hey {firstName}
            </div>

            <NavLink
              to={`/profile/${username}`}
              activeClassName="text-primary"
              className="text-gray-700"
            >
              <div
                className="mr-6 text-white  dark:text-gray-50 text-2xl"
                title="profile"
              >
                <FaUser color="inherit" />
              </div>
            </NavLink>

            <button
              className=" text-white text-2xl"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            >
              {theme === "light" ? <FaMoon /> : <FaSun />}
            </button>

            <NavLink
              to="/leaderboard"
              className="ml-6 mr-6  text-white text-2xl"
              title="leaderboard"
            >
              <FaTrophy />
            </NavLink>

            <button
              className="mr-0 text-white text-2xl"
              title="signout"
              onClick={logoutUser}
            >
              <FiLogOut color="inherit" />
            </button>
          </div>
        ) : (
          <div className="flex items-center">
            <button
              className=" text-white text-2xl"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            >
              {theme === "light" ? <FaMoon /> : <FaSun />}
            </button>

            <NavLink
              to="/leaderboard"
              className="ml-6 mr-6  text-white text-2xl"
              title="leaderboard"
            >
              <FaTrophy />
            </NavLink>
            <NavLink
              to="/login"
              className="font-semibold text-white text-lg mr-8"
            >
              Login
            </NavLink>
          </div>
        )}
      </div>
    </nav>
  );
};
