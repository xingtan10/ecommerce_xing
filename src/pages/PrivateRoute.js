import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
// will remove later
import { useUserContext } from "../context/user_context";
import { Route, Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  // const { myUser } = useUserContext();
  const { user } = useAuth0();

  // return <Route {...rest} render={()=>{
  //   return myUser ? children : <Navigate to ="/" ></Navigate>
  // }}>Private Route</Route>;
  return user ? <Outlet /> : <Navigate to="/" />;
};
export default PrivateRoute;
