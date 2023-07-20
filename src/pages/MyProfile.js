import React, {useState, useEffect, Component} from "react";
import { useCookies } from "react-cookie";
import NoUser from "../components/NoUser";
import Headings from "../stories/Headings";

const MyProfile = () => {
  const [cookies, setCookie, removeCookie] = useCookies(['user']);
  const [user, setuser] = useState(false);
  const [quotes, setquote] = useState([]);

  return(
    <div className="pgmyprofile">
      <div className="pgmyprofile__wrap">
        {cookies.user && (
          <div>
            {quotes &&
              <div>
                <Headings
                  label="My Profile"
                  renderAs="h1"
                  weight="normal"
                />
              </div>
            }
            {!quotes &&
              <NoUser />
            }
          </div>
        )}
      </div>
    </div>
  )
}

export default MyProfile;