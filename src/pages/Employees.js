import React, { useState } from "react";
import EmployList from "../components/EmployList";
import SlidingMenu from "../components/SlidingMenu";
import NoUser from "../components/NoUser";
import Headings from "../stories/Headings";

const Employees = (userObj) => {
  const [quotes, setquote] = useState([]);
  
  return(
    <div className="pgsummary">
      <div className="pgsummary__wrapper">
          <div>
            {quotes &&
              <div key={userObj.email}>
                  <div>
                  {console.log("sliding menu role is: " + userObj.role)}
                    <SlidingMenu 
                      usrRole={userObj.role}
                    />
                    {console.log("Employee ur: " + `${userObj.role}`)}
                    <div className="content-container pgsummary__content">
                      <Headings
                        label="Employees"
                        renderAs="h5"
                        weight="semibold"
                        customclass="color-neutral-800"
                      />
                      <EmployList />
                    </div>
                  </div>
              </div>
            }
            {!quotes &&
              <NoUser />
            }
          </div>
      </div>
    </div>
  );
}

export default Employees;