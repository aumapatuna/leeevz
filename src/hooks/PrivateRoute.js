import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { useCookies } from "react-cookie";

const PrivateRoute = ({children, userObj}) => {
  const [cookies, setCookie, removeCookie] = useCookies(['user']);
  const [user, setuser] = useState(false);

    if (!cookies.user) {
      return <Navigate to="/" />;
    } else {
      return children;
    }
}

export default PrivateRoute;