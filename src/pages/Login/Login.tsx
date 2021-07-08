import { useEffect, useState } from "react";
import { useLocation, useNavigate, NavLink } from "react-router-dom";
import { Navbar } from "../../components";
import { useAuth } from "../../context/auth.context";
import { formValidation } from "./Login.utils";

export const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [formError, setFormError] = useState({
    email: "",
    password: "",
  });
  const [loginError, setLoginError] = useState("");

  const location = useLocation();
  const state = (location.state as { from: string }) || null;

  const navigate = useNavigate();
  const {
    loginUser,
    authState: { token },
  } = useAuth();

  useEffect(() => {
    token && navigate("/");
  }, []);

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formValidation({ user, setFormError })) {
      try {
        const response = await loginUser({
          email: user.email,
          password: user.password,
          path: state?.from ? state?.from : "/",
        });
        if (response !== "SUCCESS") {
          setLoginError(response);
        }
      } catch (error) {
        console.log({ error });
      }
    }
  };

  const handleFormInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Navbar />
      <div className="flex justify-between min-h-screen">
        <div className="flex flex-col items-center mx-4 justify-center w-full md:w-1/2 text-gray-500 dark:text-gray-50">
          <h2 className="font-semibold text-2xl mb-6 ">Log In</h2>
          <form
            className="flex flex-col w-full items-center text-left dark:text-gray-50"
            onSubmit={(e) => handleFormSubmit(e)}
          >
            <div className="mb-6 md:w-9/12 w-full">
              <label className="mb-2 font-semibold block">Email</label>
              <input
                className="px-3 py-2 w-full border focus:outline-none focus:ring focus:border-primary rounded-md dark:bg-gray-700"
                type="text"
                placeholder="Email"
                value={user.email}
                name="email"
                onChange={(e) => handleFormInput(e)}
              />
              {formError.email && (
                <span className="block font-semibold font-sm text-red-600">
                  *{formError.email}
                </span>
              )}
            </div>
            <div className="mb-6 md:w-9/12 w-full">
              <label className="mb-2 font-semibold block font-sm">
                Password
              </label>

              <input
                className="px-3 py-2 w-full border focus:outline-none focus:ring focus:border-primary rounded-md dark:bg-gray-700"
                type="password"
                placeholder="Password"
                value={user.password}
                name="password"
                onChange={(e) => handleFormInput(e)}
              />
              {formError.password && (
                <span className="block font-semibold text-red-600">
                  *{formError.password}
                </span>
              )}
            </div>
            <button
              className="bg-primary hover:bg-hover p-2 md:w-9/12 w-full text-white font-semibold mb-2 rounded-full"
              type="submit"
            >
              LOGIN
            </button>
            <div className="font-medium text-md">
              Not a member?{" "}
              <NavLink
                to="/signup"
                className="text-primary underline font-bold"
              >
                Sign Up
              </NavLink>
            </div>
            <div className="mt-2 text-red-600 font-semibold text-lg">
              {loginError}
            </div>
          </form>
        </div>
        <div className="hidden md:block w-1/2  h-screen flex flex-col items-start justify-center py-10 px-6 ">
          {/* <img
          src="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          alt="login"
        /> */}
        </div>
      </div>
    </>
  );
};
