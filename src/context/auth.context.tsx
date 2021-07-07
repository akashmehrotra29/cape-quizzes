import { useContext, useReducer } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router";
import {
  AuthContext,
  AuthInitialState,
  LoginUserDetails,
  SignUpUserDetails,
} from "./auth.context.types";
import { authReducer } from "../reducers/auth.reducer";
import axios from "axios";
import { API } from "../utils/api.config";

const authContext = createContext<AuthContext>({} as AuthContext);

export const AuthProvider: React.FC = ({ children }) => {
  const navigate = useNavigate();

  const loggedInUserDetails = localStorage.getItem("QuizUser");
  const { username, token, firstName, userId } = loggedInUserDetails
    ? JSON.parse(loggedInUserDetails)
    : { username: "", token: "", firstName: "", userId: "" };

  const initialState: AuthInitialState = {
    username,
    token,
    firstName,
    userId,
  };

  const [authState, authDispatch] = useReducer(authReducer, initialState);

  const loginUser = async ({ email, password, path }: LoginUserDetails) => {
    try {
      const { data, status } = await axios({
        method: "POST",
        url: `${API}/login`,
        data: { email, password },
      });

      if (status === 200) {
        localStorage.setItem("QuizUser", JSON.stringify(data));
        authDispatch({ type: "SET_USER", payload: data });
        navigate(path, { replace: true });
      }
      return "SUCCESS";
    } catch (error) {
      console.log({ error });
      return (
        error?.response?.data?.error || "Something went wrong. Can't login user"
      );
    }
  };

  const signUpUser = async ({
    firstName,
    lastName,
    userName,
    email,
    password,
  }: SignUpUserDetails) => {
    try {
      const { data, status } = await axios({
        method: "POST",
        url: `${API}/signup`,
        data: {
          email,
          password,
          firstName,
          lastName,
          userName,
        },
      });

      if (status === 200) {
        localStorage.setItem(
          "QuizUser",
          JSON.stringify({
            token: data.token,
            username: data.userName,
            userId: data.userId,
            firstName: data.firstName,
          })
        );
        authDispatch({ type: "SET_USER", payload: data });
        navigate("/", { replace: true });
      }
      return "SUCCESS";
    } catch (error) {
      console.log({ error });
      return error?.response?.data?.error || "Something went wrong";
    }
  };

  const logoutUser = () => {
    localStorage.removeItem("QuizUser");
    authDispatch({
      type: "SET_USER",
      payload: { username: "", token: "", firstName: "", userId: "" },
    });
  };

  return (
    <authContext.Provider
      value={{ authState, authDispatch, signUpUser, loginUser, logoutUser }}
    >
      {children}
    </authContext.Provider>
  );
};

export const useAuth = () => useContext(authContext);
