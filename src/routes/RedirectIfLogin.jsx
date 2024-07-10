import { useContext } from "react";
import { UserContext } from "../Context/FormContext";
import { Navigate } from "react-router-dom";

const RedirectIfLogin = ({ to, children }) => {
  const { user } = useContext(UserContext);

  if (user) {
    return <Navigate to={to} />;
  }

  if (!user || user === null) {
    return children;
  }
};
export default RedirectIfLogin;
