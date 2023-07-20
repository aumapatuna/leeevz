import React, { useState } from "react";
import Navigation from "./Navigation";
import BottomNavigation from "./BottomNavigation";
import ActiveUser from "./ActiveUser";
import AmpleIcon from "../ample-icon/ample-icon";
import ExpandedLogo from "../assets/images/amplifynHR.svg";
import CollapsedLogo from "../assets/images/amplifynHR-icon.svg";

const SlidingMenu = (usrObj) => {
  const [show, setShow] = useState(false)

  const urole = usrObj.usrRole;

  return(
    <div className={['nav', `${show ? 'show' : 'nav__space-toggle'}`, ''].join(' ')}>
      <aside className="nav__sidebar">
        <div className="nav__wrapper">
        <div id="space-toggle" className="nav__btn nav__space-toggle" onClick={() => setShow(!show)}>
          <AmpleIcon icon="arrow-left-2" />
        </div>
          <div className="nav__logo-wrapper">
            <div className="nav__logo-collapse">
              <img className="nav__logo-collapse-img" src={CollapsedLogo} />
            </div>
            <div className="nav__logo-expanded">
              <img className="nav__logo-expanded-img" src={ExpandedLogo} width="148" height="28" />
            </div>
          </div>
          <div className="nav__item-wrapper">
            <Navigation 
              role={urole}
            />
          </div>
          <div className="nav__bottom-bar">
            <div className="nav__bottom-bar-nav">
              <BottomNavigation />
            </div>
            <div className="nav__bottom-bar-user">
              <ActiveUser />
            </div>
          </div>
        </div>
      </aside>
    </div>
  )
} 

export default SlidingMenu;