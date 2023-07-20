import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import Typo from "../stories/Typo";

const NoUser = () => {
  const [cookies, setCookie, removeCookie] = useCookies(['user']);
  const [user, setuser] = useState(false);
  const [quotes, setquote] = useState([]);

  const uemail = cookies.user.email;
  useEffect(() => {
    axios.get('https://wjap10b65e.execute-api.us-east-1.amazonaws.com/dev/user/auth?em='+uemail)
    .then(res => {
      console.log(res.data.data);
       setquote(res.data.data);
    })
    .catch(err => {
      console.log(err);
    })  
  }, [])

  return(
    <div className="pgsummary__nouser">
      {/* {!quotes && */}
        <div className="pgsummary__nouser-wrapper">
          <Typo
            customclass="error-header"
            label="Sorry, you don't have access"
            size="xl"
            weight="semibold"
          />
          <Typo
            customclass="error-description"
            label="You may need to request permission from the administrator to access the application."
            size="md"
            weight="light"
          />
          <Link
            to={'./'}
            className="link"
            onClick={() => {
              setuser(false)
              removeCookie("user")
            }}
          >Back to sign in</Link>
        </div>
      {/* } */}
    </div>
  );
}

export default NoUser;