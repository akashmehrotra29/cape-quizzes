export type SignUpUserDetails = {
  email: string;
  password: string;
  userName: string;
  firstName: string;
  lastName: string;
};

export type LoginUserDetails = {
  email: string;
  password: string;
  path: string;
};

export type AuthInitialState = {
  username: string;
  token: string;
  firstName: string;
  userId: string;
};

export type AuthContext = {
  authState: AuthInitialState;
  authDispatch: React.Dispatch<any>;
  loginUser: ({ email, password, path }: LoginUserDetails) => Promise<string>;
  logoutUser: () => void;
  signUpUser: ({
    email,
    password,
    firstName,
    lastName,
    userName,
  }: SignUpUserDetails) => Promise<any>;
};

export type AuthActionType = {
  type: "SET_USER";
  payload: AuthInitialState;
};
