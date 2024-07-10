import { useContext } from "react";
import { UserContext } from "../Context/FormContext";
import NotFound from "../pages/NotFound";

const ProtectedRoute = ({ children }) => {
  const { user } = useContext(UserContext);

  if (user) {
    return children;
  }

  if (!user || user === null) {
    return <NotFound />;
  }
  if (!user) {
    return null;
  }
};

export default ProtectedRoute;
