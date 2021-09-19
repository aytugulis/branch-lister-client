import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const AdminRoute = ({ component: Component, ...rest }) => {
  const { userInfo } = useSelector((state) => state.userLogin);

  const isAdmin = userInfo?.user?.role === "admin";

  return (
    <Route
      {...rest}
      render={(props) =>
        userInfo && isAdmin ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};

export default AdminRoute;
