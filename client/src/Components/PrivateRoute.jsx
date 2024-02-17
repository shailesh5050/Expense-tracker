import { Outlet, Navigate } from "react-router-dom";

const PrivateRoute = () => {
  const isAuth = true;
  return isAuth ? <Outlet /> : <Navigate to="/sign-in" />;
};

export default PrivateRoute;
