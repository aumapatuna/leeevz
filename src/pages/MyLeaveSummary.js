import React, { useState } from "react";
import SlidingMenu from "../components/SlidingMenu";
import MyLeavesummaryView from "../components/MyLeaveSummaryView";
import NoUser from "../components/NoUser";
import Headings from "../stories/Headings";

const MyLeaveSummary = (userObj) => {
  const [quotes, setquote] = useState([]);

  return(
    <>
      <div className="pgmyleavesummary">
        <div className="pgmyleavesummary__wrapper">
            <div>
              {quotes &&
                <div key={userObj.email}>
                  <div>
                    <SlidingMenu 
                      usrRole={userObj.role}
                    />
                    <div className="content-container pgsummary__content">
                      <Headings
                        label="My leaves"
                        renderAs="h5"
                        weight="semibold"
                        customclass="color-neutral-800"
                      />
                      <MyLeavesummaryView />
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
    </>
  );
}

export default MyLeaveSummary;