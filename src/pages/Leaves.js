import React, { useState } from "react";
import Cookies from "universal-cookie";
import SlidingMenu from "../components/SlidingMenu";
import NoUser from "../components/NoUser";
import LeaveList from "../components/LeaveList";
import Headings from "../stories/Headings";

const Leaves = (userObj) => {
  const [quotes, setquote] = useState([]);

  const cookie = new Cookies();
  const email = cookie.get('email');
  const id = cookie.get('id');
  
  return (
    <div className="pgsummary">
      <div className="pgsummary__wrapper">
        <div>
          {quotes &&
            <div key={email}>
              <div>
                <SlidingMenu 
                  usrRole={userObj.role}
                />
                <div className="content-container pgsummary__content">
                  <Headings
                    label="Dashboard"
                    renderAs="h5"
                    weight="semibold"
                    customclass="color-neutral-800"
                  />
                  <LeaveList
                    email={email}
                    id={id} 
                  />
                </div>
              </div>
            </div>
          }
          {!quotes &&
            <NoUser/>
          }
        </div>
      </div>
    </div>
  );
}

export default Leaves;