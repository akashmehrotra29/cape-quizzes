import { AuthActionType, AuthInitialState } from "../context/auth.context.types";

export const authReducer = (
  state: AuthInitialState,
  action: AuthActionType
) => {
  switch (action.type) {
    case "SET_USER":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
