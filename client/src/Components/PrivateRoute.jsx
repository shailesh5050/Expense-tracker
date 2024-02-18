import { Outlet, Navigate } from "react-router-dom";

const PrivateRoute = () => {
  const isAuth = localStorage.getItem("user") ? true : false;
  return isAuth ? <Outlet /> : <Navigate to="/sign-in" />;
};

export default PrivateRoute;
