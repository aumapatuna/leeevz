import React from "react";
import { NavLink } from "react-router-dom";
import AmpleIcon from "../ample-icon/ample-icon";
import Typo from "../stories/Typo";

const BottomNavigation = () => {
  return (
    <div className="navigation">
      <nav>
        <ul>
          <li className="navigation__item hide">
            <NavLink to="/integrations" className={({ isActive }) => (isActive ? "navigation__nav-link navigation__nav-active" : "navigation__nav-link")}>
              <AmpleIcon icon="category" />
              <span className="navigation__nav-link-name">Integrations</span>
            </NavLink>
            <div className="navigation__nav-link-ttip navigation__nav-link-ttip--default">
              <Typo
                label="Integrations"
                size="xs"
                weight="normal"
                customclass={['info-incomplete', 'color-base', ''].join(' ')}
              />
            </div>
          </li>
          <li className="navigation__item hide">
            <NavLink to="/settings" className={({ isActive }) => (isActive ? "navigation__nav-link navigation__nav-active" : "navigation__nav-link")}>
              <AmpleIcon icon="setting-2" />
              <span className="navigation__nav-link-name">Settings</span>
            </NavLink>
            <div className="navigation__nav-link-ttip navigation__nav-link-ttip--default">
              <Typo
                label="Settings"
                size="xs"
                weight="normal"
                customclass={['info-incomplete', 'color-base', ''].join(' ')}
              />
            </div>
          </li>
        </ul>
      </nav>
    </div> 
  )   
};

export default BottomNavigation;