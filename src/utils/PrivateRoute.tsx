import { useLocation } from "react-router";
import { useAuth } from "../context/auth.context";
import { Route, Navigate } from "react-router-dom";

export const PrivateRoute = ({ path, ...props }: any) => {
  const {
    authState: { userId },
  } = useAuth();

  const route = useLocation().pathname;
  return userId ? (
    <Route {...props} path={path} />
  ) : (
    <Navigate state={{ from: route }} replace to="/login" />
  );
};
