import React, {useState, useEffect, Component} from "react";
import { useCookies } from "react-cookie";
import NoUser from "../components/NoUser";
import Headings from "../stories/Headings";

const Notifications = () => {
  const [cookies, setCookie, removeCookie] = useCookies(['user']);
  const [user, setuser] = useState(false);
  const [quotes, setquote] = useState([]);

  return(
    <div className="pgnotifications">
      <div className="pgnotifications__wrap">
        {cookies.user && (
          <div>
            {quotes &&
              <div>
                <Headings
                  label="Notifications"
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

export default Notifications;