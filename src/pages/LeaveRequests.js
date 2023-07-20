import React, {useState, useEffect} from "react";
import Cookies from "universal-cookie";
import SlidingMenu from "../components/SlidingMenu";
import NoUser from "../components/NoUser";
//import LeaveRequestList from "../components/LeaveReqestList";
import GrantLeaveRequestList from "../components/GrantLeaveReqestList";
import Headings from "../stories/Headings";

const LeaveRequests = () => {
  const [quotes, setquote] = useState([]);

  const cookie = new Cookies();
  const email = cookie.get('email');
  const id = cookie.get('id');
  const role = cookie.get('role');

  console.log("Leave request email is: " + email);
  console.log("Leave request id is: " + id);
  console.log("Leave request role is: " + role);

  return(
    <div className="pgleaverequests">
      <div className="pgleaverequests__wrap">
        <div>
          {quotes &&
            <div>
              <SlidingMenu />
              <div className="content-container pgleaverequests__content">
                <Headings
                  label="Leave requests"
                  renderAs="h5"
                  weight="semibold"
                  customclass="color-neutral-800"
                />
                {/* <LeaveRequestList /> */}
                <GrantLeaveRequestList />
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

export default LeaveRequests;