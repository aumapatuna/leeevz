import React from "react";
import { Buttons } from "../stories/Buttons";
import RequestLeavePopup from "./popups/RequestLeavePopup";
import MyLeaves from "./MyLeaves";

const MyLeavesummaryView = () => {

  function requestLeaveHandler() {
    let lrpopup = document.getElementById('requstleavepopup');
    lrpopup.classList.add('open');
  }

  return(
    <div className="myleavesummaryview">
      <div className="myleavesummaryview__wrap">
        <div className="myleavesummaryview__header">
          <div className="myleavesummaryview__request">
            <Buttons
              id="addemp"
              buttonIcon="left-image"
              iconName="add"
              onClick={requestLeaveHandler}
              label="Create leave request"
              size="medium"
            />
          </div>
        </div>
        <div className="myleavesummaryview__body">
          <MyLeaves />
        </div>
      </div>
      <RequestLeavePopup />
    </div>
  );
}

export default MyLeavesummaryView;