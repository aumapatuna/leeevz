import React from "react";
import { useNavigate } from "react-router-dom";
import LeaveDetails from "../components/LeaveDetails";
import SlidingMenu from "../components/SlidingMenu";
import Headings from "../stories/Headings";
import buttonBase from "../assets/images/icons/button-base.svg";

const LeaveRequestDetails = (userObj) => {
  const navigate = useNavigate();

  return(
    <div className="pgleaverequests pgleaverequests--details">
      <div className="pgleaverequests__wrapper">
        <div>
            <div>
              <SlidingMenu 
                usrRole={userObj.role}
              />
              <div className="content-container pgleaverequests__content">
                <div className="pgleaverequests__group d-flex">
                  <div className="leavedetails__back d-inline-block mt-4 mr-16">
                    <img src={buttonBase} onClick={() => navigate(-1)} className="leavedetails__arrow-img" height="36" width="36" />
                  </div>
                  <Headings
                    label="Request details"
                    renderAs="h5"
                    weight="semibold"
                    customclass={['color-neutral-800', 'd-inline-block', ''].join(' ')}
                  />
                </div>
                <LeaveDetails />
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default LeaveRequestDetails;