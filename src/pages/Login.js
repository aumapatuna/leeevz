import React, { useState, useEffect, useRef } from "react";
import { useCookies } from "react-cookie";
import jwt_deocde from "jwt-decode";

import { useScript } from "../hooks/useScript";
import Logo from "../assets/images/logo.svg";
import LoginImage from "../assets/images/login-img.svg";
import Typo from "../stories/Typo"
import Popover from "../stories/Popover";
import UserRole from "../components/UserRole"

function Login() {
  const [cookies, setCookie] = useCookies(["user"]);
  const [quotes, setquote] = useState([]);

  const googlebuttonref = useRef();
  const [user, setuser] = useState(false);  
  const onGoogleSignIn = (user) => {
    let userCred = user.credential;
    let payload = jwt_deocde(userCred);
    setuser(payload);

    setCookie("user", payload, {
      path: "/"
    });
  };

  useScript("https://accounts.google.com/gsi/client", () => {
    window.google.accounts.id.initialize({
      client_id: "83661310283-jh8fbehtpl1hms83f4p6sl4r67nssekl.apps.googleusercontent.com",
      callback: onGoogleSignIn,
      CookiePolicy: "single_host_origin",
      auto_select: false,
    });

    window.google.accounts.id.renderButton(googlebuttonref.current, {
      size: "medium",
    });
  });

  console.log(user);
  

  function openTip() {
    let poptip = document.getElementById('popover');
    if (poptip.classList.contains('hide')) {
      poptip.classList.remove('hide');
    }
  }

  return (
    <>
    <div className="leeevzwindow">
      <div className="leeevzwindow__wrapper">
        {!cookies.user &&
          <div className="leeevzwindow__inner">
            <div className="leeevzwindow__inner-logo">
              <img
                src={Logo}
                alt="Amplifyn HR Logo"
                className="leeevzwindow__inner-logo-img"
              />
            </div>
            <div className="leeevzwindow__inner-illustration">
              <img
                src={LoginImage}
                alt="Login window image"
                className="leeevzwindow__inner-illustration-img"
              />
            </div>
            <div id="leeevzwindow__signin" ref={googlebuttonref}></div>
            <div className="leeevzwindow__informations">
              <span className="leeevzwindow__information-plane">
                <Typo
                  label="Dont' have access?"
                  size="sm"
                  weight="normal"
                />
              </span>
              <span className="leeevzwindow__information-link">
                <Popover
                  label="You may need to request access from the administrator to access the application."
                />
                <p id="leeevzwindow__information-close" type="text" className="typo typo__sm typo__normal" onClick={openTip}>Contact admin</p>
              </span>
            </div>
          </div>
        }
        {cookies.user && (
          <>
          <UserRole />
          </>
        )}
      </div>
    </div>
    </>
  );
}

export default Login;