import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";
import { NavLink, useLocation } from "react-router-dom";
import AmpleIcon from "../ample-icon/ample-icon"
import Typo from "../stories/Typo";

const Navigation = (usrRole) => {
  const [cookies, setCookie, removeCookie] = useCookies(['user']);
  const [quotes, setquote] = useState([]);

  const location = useLocation();
  console.log(location.pathname);

  const uemail = cookies.user.email;
  useEffect(() => {
    axios.get(`${window.baseUrl}/${window.devEnv}/${window.apiUser}/auth?em=`+uemail)
    .then(res => {
       setquote(res.data.data);
       console.log(res.data.data);
    })
    .catch(err => {
      console.log(err);
    })  
  }, [])

  function openLeaves() {
    let hassub = document.getElementById('nav-leaves');
    let navarrow = document.getElementById('nav-link-arrow');
    hassub.parentNode.classList.toggle('has-sub');
    hassub.parentNode.classList.toggle('nav-hide');
    navarrow.classList.toggle('collapse');
  }

  if(location.pathname != "/") {
    setTimeout(() => {
      let navhome = document.getElementById('nav-home');
      navhome.classList.remove('navigation__nav-active');
    }, 1000)
  }

  return (
    <div className="navigation">
      <nav>
      {quotes && quotes.emp_role == "1" &&
        <ul>
          <li id="n-home" className="navigation__item hide">
            <NavLink to="/home" id="home" className={({ isActive }) => (isActive ? "navigation__nav-link navigation__nav-active" : "navigation__nav-link")}>
              <AmpleIcon icon="home-2" />
              <span className="navigation__nav-link-name">Home</span>
            </NavLink>
            <div className="navigation__nav-link-ttip navigation__nav-link-ttip--default">
              <Typo
                label="Home"
                size="xs"
                weight="normal"
                customclass={['info-incomplete', 'color-base', ''].join(' ')}
              />
            </div>
          </li>
          <li id="n-leaves" className="navigation__item has-sub">
            <NavLink to="/leaves" id="nav-leaves" className={({ isActive }) => (isActive ? "navigation__nav-link navigation__nav-active" : "navigation__nav-link")} onClick={openLeaves}>
              <AmpleIcon icon="calendar-1" />
              <span className="navigation__nav-link-name">Leaves</span>
              <span id="nav-link-arrow" className="navigation__nav-link-arrow">
                <AmpleIcon icon="arrow-up-2" />
              </span>
            </NavLink>
            <div className="navigation__nav-link-ttip navigation__nav-link-ttip--default">
              <Typo
                label="Leaves"
                size="xs"
                weight="normal"
                customclass={['info-incomplete', 'color-base', ''].join(' ')}
              />
            </div>
            <ul className="navigation__item__sub">
              <li className="navigation__item__li">
                <NavLink to="/leaves" className={({ isActive }) => (isActive ? "navigation__nav-link navigation__nav-active" : "navigation__nav-link")}>
                  <span className="navigation__no-nav-icon"></span>
                  <span className="navigation__nav-link-name">Dashboard</span>
                </NavLink>
              </li>
              <li className="navigation__item__li"> 
                <NavLink to="/" id="nav-home" className={({ isActive }) => (isActive ? "navigation__nav-link navigation__nav-active" : "navigation__nav-link")}>
                  <span className="navigation__no-nav-icon"></span>
                  <span className="navigation__nav-link-name">My leaves</span>
                </NavLink>
              </li>
              <li className="navigation__item__li">
                <NavLink to="/leaverequests" className={({ isActive }) => (isActive ? "navigation__nav-link navigation__nav-active" : "navigation__nav-link")}>
                  <span className="navigation__no-nav-icon"></span>
                  <span className="navigation__nav-link-name">Leave requests</span>
                </NavLink>
              </li>
            </ul>
          </li>
          <li id="n-employees" className="navigation__item">
            <NavLink to="/employees" className={({ isActive }) => (isActive ? "navigation__nav-link navigation__nav-active" : "navigation__nav-link")}>
              <AmpleIcon icon="profile-2user" />
              <span className="navigation__nav-link-name">Employees</span>
            </NavLink>
            <div className="navigation__nav-link-ttip navigation__nav-link-ttip--default">
              <Typo
                label="Employees"
                size="xs"
                weight="normal"
                customclass={['info-incomplete', 'color-base', ''].join(' ')}
              />
            </div>
          </li>
          <li id="n-notifications" className="navigation__item hide">
            <NavLink to="/notifications" className={({ isActive }) => (isActive ? "navigation__nav-link navigation__nav-active" : "navigation__nav-link")}>
              <AmpleIcon icon="notification" />
              <span className="navigation__nav-link-name">Notifications</span>
            </NavLink>
            <div className="navigation__nav-link-ttip navigation__nav-link-ttip--default">
              <Typo
                label="Notification"
                size="xs"
                weight="normal"
                customclass={['info-incomplete', 'color-base', ''].join(' ')}
              />
            </div>
          </li>
          <li id="n-activitylog" className="navigation__item hide">
            <NavLink to="/activitylog" className={({ isActive }) => (isActive ? "navigation__nav-link navigation__nav-active" : "navigation__nav-link")}>
              <AmpleIcon icon="clock" />
              <span className="navigation__nav-link-name">Activity log</span>
            </NavLink>
            <div className="navigation__nav-link-ttip navigation__nav-link-ttip--default">
              <Typo
                label="Activity log"
                size="xs"
                weight="normal"
                customclass={['info-incomplete', 'color-base', ''].join(' ')}
              />
            </div>  
          </li>
        </ul>
        }
        {quotes && quotes.emp_role != "1" &&
          <ul>
            <li id="n-myleaves" className="navigation__item navigation__item--user has-sub">
              <ul className="navigation__item__sub">
                <li className="navigation__item__li">
                  <NavLink to="/" className="navigation__nav-link navigation__nav-active">
                    {/* <span className="navigation__no-nav-icon"></span> */}
                    <AmpleIcon icon="calendar-1" />
                    <span className="navigation__nav-link-name">My leaves</span>
                  </NavLink>
                </li>
              </ul>
            </li>
          </ul>
        }
      </nav>
    </div>
  )
};

export default Navigation;