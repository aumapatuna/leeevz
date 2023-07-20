import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { NavLink } from "react-router-dom";
import Typo from "../stories/Typo";
import AmpleIcon from "../ample-icon/ample-icon";

const ActiveUser = () => {
  const [cookies, setCookie, removeCookie] = useCookies(['user']);
  const [user, setuser] = useState(false);

  const uemail = cookies.user.email;
  const uname = cookies.user.name;
  const upicture = cookies.user.picture;

  return (
    <div className="activeuser">
      <div className="activeuser__signedin"> 
        <div className="activeuser__wrapper">
          <NavLink to="/myprofile" className={({ isActive }) => (isActive ? "navigation__nav-link navigation__nav-active" : "navigation__nav-link navigation__nav-link--profile")}>
            <div className="navigation__nav-link-ttip navigation__nav-link-ttip--inverse">
              <Typo
                label="View profile"
                size="xs"
                weight="normal"
                customclass={['info-incomplete', 'color-neutral-700', ''].join(' ')}
              />
            </div>
            <div className="activeuser__image-wrapper">
              <img className="activeuser__image" src={upicture} height="40" width="40" alt="Profile picture" />
            </div>
            <div className="activeuser__prof"> 
              <Typo
                label={uname}
                size="sm"
                weight="normal"
                customclass={['color-neutral-100','d-block', ''].join(' ')}
              />
              <Typo
                label={uemail}
                size="sm"
                weight="light"
                customclass={['color-neutral-400', 'd-block', ''].join(' ')}
              />
            </div>
            
         </NavLink>
          <div id="activeuser__more-btn" className="activeuser__more-btn"
            onClick={() => {
              setuser(false)
              removeCookie("user")
            }}>
            <AmpleIcon icon="logout" />
            <div className="activeuser__logout-ttip">
              <Typo
                label="Logout"
                size="xs"
                weight="normal"
                customclass={['info-incomplete', 'color-base', ''].join(' ')}
              />
            </div>
          </div>
        </div>
      </div> 
    </div> 
  )   
};

export default ActiveUser;