import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";
import SlidingMenu from "../components/SlidingMenu";
import NoUser from "../components/NoUser";
import Headings from "../stories/Headings";

const Home = () => {
  const [cookies, setCookie, removeCookie] = useCookies(['user']);
  const [user, setuser] = useState(false);
  const [quotes, setquote] = useState([]);

  const uemail = cookies.user.email;
  useEffect(() => {
    axios.get(`${window.baseUrl}/${window.devEnv}/${window.apiUser}/auth?em=`+uemail)
    .then(res => {
      //console.log(res.data.data);
       setquote(res.data.data);
    })
    .catch(err => {
      console.log(err);
    })
  }, [])

  return(
    <div className="pgsummary">
      <div className="pgsummary__wrapper">
        {cookies.user && (
          <div>
            {quotes && 
              <div key={quotes.emp_email}>
                <div className="hide">
                </div>
                {(`${quotes.emp_email}` == uemail) &&
                  <div>
                    <SlidingMenu />
                    <div className="content-container pgsummary__content">
                      <Headings
                        label="Home"
                        renderAs="h5"
                        weight="semibold"
                        customclass="color-neutral-800"
                      />
                    </div>
                  </div>
                }
              </div> 
            }
            {!quotes && 
              <NoUser />
            }
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;