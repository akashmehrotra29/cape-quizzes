import { useState } from "react";
import { useAuth } from "../../context/auth.context";
import { NavLink } from "react-router-dom";
import { signupFormValidation } from "./Signup.util";

export const Signup = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    password: "",
  });

  const [formError, setFormError] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    password: "",
  });

  const [signupError, setSignupError] = useState();

  const { signUpUser } = useAuth();

  const handleFormSubmit = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    if (signupFormValidation({ user, setFormError })) {
      try {
        const response = await signUpUser({
          firstName: user.firstName,
          lastName: user.lastName,
          userName: user.userName,
          email: user.email,
          password: user.password,
        });
        if (response !== "SUCCESS") {
          setSignupError(response);
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
    <div className="flex justify-between min-h-screen text-left">
      <div className="flex flex-col items-center mx-4 justify-center w-full md:w-1/2 text-gray-500 my-2 dark:text-gray-50">
        <h2 className="font-semibold text-2xl mb-2 ">Sign Up</h2>
        <form className="flex flex-col w-full items-center">
          <div className="mb-2 text-red-600 font-semibold text-xl">
            {signupError}
          </div>

          <div className="mb-4 md:w-9/12 w-full">
            <label className="mb-2 font-semibold block">FirstName</label>
            <input
              className="px-3 py-2 w-full border focus:outline-none focus:ring focus:border-primary rounded-md"
              placeholder="FirstName"
              type="text"
              value={user.firstName}
              name="firstName"
              onChange={(e) => handleFormInput(e)}
            />
            {formError.firstName && (
              <span className="block font-semibold font-sm text-red-600">
                *{formError.firstName}
              </span>
            )}
          </div>
          <div className="mb-4 md:w-9/12 w-full">
            <label className="mb-2 font-semibold block">LastName</label>
            <input
              className="px-3 py-2 w-full border focus:outline-none focus:ring focus:border-primary rounded-md"
              placeholder="Last Name"
              type="text"
              value={user.lastName}
              name="lastName"
              onChange={(e) => handleFormInput(e)}
            />
            {formError.lastName && (
              <span className="block font-semibold font-sm text-red-600">
                *{formError.lastName}
              </span>
            )}
          </div>
          <div className="mb-4 md:w-9/12 w-full">
            <label className="mb-2 font-semibold block">Username</label>
            <input
              className="px-3 py-2 w-full border focus:outline-none focus:ring focus:border-primary rounded-md"
              placeholder="Username"
              type="text"
              value={user.userName}
              name="userName"
              onChange={(e) => handleFormInput(e)}
            />
            {formError.userName && (
              <span className="block font-semibold font-sm text-red-600">
                *{formError.userName}
              </span>
            )}
          </div>
          <div className="mb-4 md:w-9/12 w-full">
            <label className="mb-2 font-semibold block">Email</label>
            <input
              className="px-3 py-2 w-full border focus:outline-none focus:ring focus:border-primary rounded-md"
              placeholder="Email"
              type="text"
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
          <div className="mb-4 md:w-9/12 w-full">
            <label className="mb-2 font-semibold block font-sm">Password</label>

            <input
              className="px-3 py-2 w-full border focus:outline-none focus:ring focus:border-primary rounded-md"
              placeholder="Password"
              type="password"
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
            onClick={(e) => handleFormSubmit(e)}
          >
            SignUp
          </button>
          <div className="font-medium text-md">
            Already a member?{" "}
            <NavLink to="/login" className="text-primary underline font-bold">
              Login
            </NavLink>
          </div>
        </form>
      </div>
      <div className="hidden md:block w-1/2  min-h-screen flex flex-col items-center justify-center py-10 px-6">
        {/* <img src="" alt="signup" /> */}
      </div>
    </div>
  );
};
