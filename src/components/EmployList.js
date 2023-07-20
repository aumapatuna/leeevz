import React, {useState, useEffect, Component} from "react";
import axios from "axios";
import AmpleIcon from "../ample-icon/ample-icon";
import { Buttons } from "../stories/Buttons";
import Typo from "../stories/Typo";
import EmployeeMorePopup from "./popups/EmployeeMorePopup";
import AddEmployeePopup from "./popups/AddEmployeePopup";
import GoogleSyncPopup from "./popups/GoogleSyncPopup";

const EmployList = () => {
  const [emplist, setEmplist] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [checked, setChecked] = useState(false);

  let empstatus;

  const handleChange = () => {
    setChecked(!checked);
  };

  useEffect(() => {
    axios.get(`${window.baseUrl}/${window.devEnv}/${window.apiUsers}/manage-users`)
    .then(val => {
      //console.log(val.data.data);
      setEmplist(val.data.data);
    })
    .catch(err => {
      console.log(err);
    })
  }, [])

  function next(elem) {
    do {
      elem = elem.nextSibling;
    } while (elem && elem.nodeType !== 1);
    return elem;        
  }

  function employeeMorePopupToggle(e) {
    let nextElem = next(e.currentTarget);
    if (nextElem)  {
    nextElem.parentNode.classList.toggle('popblock');
    e.stopPropagation();
    }
  }

  function addHandler() {
    let addpopup = document.getElementById('addemployeepopup');
    let addemp = document.getElementById('addemp');
    addpopup.classList.toggle('show');
    addemp.classList.toggle('btn--clicked');
  }

  window.addEventListener('mouseup',function(event){
    let addpopup = document.getElementById('addemployeepopup');
    var pol = document.getElementById('addemp');
    if(event.target != pol && event.target.parentNode != pol){
      addpopup.classList.remove('show');
      pol.classList.remove('btn--clicked');
    }
  });  
  
  return (
    <div className="employlist">
      <div className="employlist__wrap">
        <div className="employlist__header">
          <div id="employlist__search" className="employlist__search">
            <AmpleIcon icon="search-normal-1" />
            <input
            id="employlist__search__input"
            className="employlist__search__input"
            placeholder="Search"
            type="text"
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
          />
          </div>
          <div className="employlist__add">
            <Buttons
              id="addemp"
              buttonIcon="right-image"
              iconName="arrow-down-1"
              onClick={addHandler}
              label="Add employees"
              size="medium"
            />
          </div>
        </div>
        <div className="employlist__count">
          <span className="employlist__count__number">
            <Typo
              //label={emplist.length}
              label="10"
              size="md"
              weight="light"
              customclass="color-neutral-600"
            />
          </span>
          <span className="employlist__count__title">
            <Typo
              label=" Employees"
              size="md"
              weight="light"
              customclass="color-neutral-600"
            />
          </span>
        </div>
        <div className="employlist__archieve__check">
          <label className="employlist__archieve__wrap">
            <input
              id="employlist__archieve__checkbox"
              className="employlist__archieve__checkbox"
              type="checkbox"
              checked={checked}
              onChange={handleChange}
            />
            <Typo
              label="Show archived employees"
              size="sm"
              weight="normal"
              customclass="color-neutral-700"
            />
          </label>  
        </div>
        <div className="employlist__frame">
          <div className="employlist__frame-headers scrollbar">
            <div className="employlist__frame__col employlist__frame__col--name">
              <Typo
                label="Name"
                size="xs"
                weight="normal"
                customclass="color-neutral-500"
              />
            </div>
            <div className="employlist__frame__col employlist__frame__col--empid">
              <Typo
                label="Emp ID"
                size="xs"
                weight="normal"
                customclass="color-neutral-500"
              /> 
              <AmpleIcon icon="arrow-up-3" />
            </div>
            <div className="employlist__frame__col employlist__frame__col--jobtitle">
              <Typo
                label="Job title/Department"
                size="xs"
                weight="normal"
                customclass="color-neutral-500"
              />
            </div>
            <div className="employlist__frame__col employlist__frame__col--empstatus">
              <Typo
                label="Employment status"
                size="xs"
                weight="normal"
                customclass="color-neutral-500"
              />
            </div>
            <div className="employlist__frame__col employlist__frame__col--status">
              <Typo
                label="Status"
                size="xs"
                weight="normal"
                customclass="color-neutral-500"
              />
              <AmpleIcon icon="arrow-up-3" />
            </div>
            <div className="employlist__frame__col employlist__frame__col--more"></div>
          </div>
          <div className="employlist__frame-list scrollbar">
            {emplist && emplist.length ? emplist.filter((val) => {
            if(searchTerm === "") {
              return val
            } else if (val.title.toLowerCase().includes(searchTerm.toLowerCase())) {
              return val
            } else if (val.id.toString().toLowerCase().indexOf(searchTerm.toLowerCase()) > -1) {
              return val
            }
            }).map((emp) => (
              <div className="employlist__item employlist__frame-headers" key={emp.emp_taxid}>
                <div className="employlist__frame__col employlist__frame__col--name">
                  <div className="employlist__frame__nflex">
                    <div className="employlist__frame__nflex--nimage">
                      {/* <img className="employlist__frame__nflex--nimg" src="" alt="User profile image" height="40" width="40" /> */}
                    </div>
                    <div className="employlist__frame__nflex--ndesc">
                      <div className="employlist__frame__nflex--nname">
                        <Typo
                        label={emp.emp_fname + ' ' + emp.emp_lname} 
                          size="sm"
                          weight="normal"
                          customclass="color-neutral-900"
                        />
                        <div className="employlist__frame--incomplete">
                          <Typo
                            label="The user profile is incomplete. Please edit it."
                            size="xs"
                            weight="normal"
                            customclass={['info-incomplete', 'color-base', ''].join(' ')}
                          />
                        </div>
                      </div>
                      <div className="employlist__frame__nflex--nemail">
                        <Typo
                          label={emp.emp_email}
                          size="sm"
                          weight="light"
                          customclass="color-neutral-500"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="employlist__frame__col employlist__frame__col--empid">
                  <Typo
                    label={emp.emp_taxid}
                    size="sm"
                    weight="light"
                    customclass="color-neutral-500"
                  />
                </div>
                <div className="employlist__frame__col employlist__frame__col--jobtitle">
                  <div className="employlist__frame__tflex--tdesc">
                    <div className="employlist__frame__tflex--ttitle">
                      <Typo
                        label="-"
                        size="sm"
                        weight="normal"
                        customclass="color-neutral-900"
                      />
                    </div>
                    <div className="employlist__frame__tflex--tdescription">
                      <Typo
                        label="-"
                        size="sm"
                        weight="light"
                        customclass="color-neutral-500"
                      />
                    </div>
                  </div>
                </div>
                <div className="employlist__frame__col employlist__frame__col--empstatus">
                {(() => {
                  switch (emp.emp_status) {
                    case "1":   
                      return <Typo
                        label="Permanent"
                        size="sm"
                        weight="light"
                        customclass="color-neutral-500"
                      />;
                    case "2": 
                      return <Typo
                        label="Probation"
                        size="sm"
                        weight="light"
                        customclass="color-neutral-500"
                      />;
                    case "3":  
                      return <Typo
                        label="Internship"
                        size="sm"
                        weight="light"
                        customclass="color-neutral-500"
                      />;
                    case "4":
                      return <Typo
                        label="Contract"
                        size="sm"
                        weight="light"
                        customclass="color-neutral-500"
                      />;
                    default:
                      return <Typo
                        label="Probation"
                        size="sm"
                        weight="light"
                        customclass="color-neutral-500"
                      />;
                  }
                })()}
                </div>
                <div className="employlist__frame__col employlist__frame__col--status">
                  {emp.sys_status ? (
                    <Typo
                      label="Active"
                      size="xs"
                      weight="normal"
                      customclass={["color-neutral-500", `status--active`, ''].join(' ')}
                    />
                  ) : (
                    <Typo
                      label="Pending"
                      size="xs"
                      weight="normal"
                      customclass={["color-neutral-500", `status--pending`, ''].join(' ')}
                    />
                  )}
                </div>
                <div id={"emp-" + emp.emp_taxid} className="employlist__frame__col employlist__frame__col--more" onClick={employeeMorePopupToggle}> 
                  <AmpleIcon type={"filled"} icon="more-verticle" />
                </div>
                <EmployeeMorePopup />
              </div>
            )) : 
              <div className="employlist">
                <div className="employlist__wrap employlist__wrap--noitem"> 
                    <div className="employlist__noitem">
                      <div className="employlist__noitem-image-wrap">
                        <div className="employlist__noitem-image">
                          <AmpleIcon icon="search-normal-1" />
                        </div>
                      </div>
                      <div className="employlist__noitem-title">
                        <Typo
                          label="No employees found"
                          size="lg"
                          weight="normal"
                          customclass="color-base-invert"
                        />
                      </div>
                      {/* <div className="employlist__noitem-description">
                        <Typo
                          label="Your searched “Olivia Rhye” did not match any users."
                          size="lg"
                          weight="medium"
                          customclass="color-neutral-500"
                        />
                      </div>  */}
                    </div>
                </div>
              </div>
            }
            <div className="force-overflow"></div>
          </div>
          <div className="employlist__bottom">
            <div className="employlist__bottom__wrap">
              <div className="employlist__bottom__col employlist__bottom__col--noitem">
                <Typo
                  label="No of items per page"
                  size="sm"
                  weight="light"
                  customclass="color-neutral-700"
                />
                <div className="employlist__bottom__col--dropdown">
                  <select className="employlist__bottom__col--select">
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="30">30</option>
                    <option value="40">40</option>
                    <option value="50">50</option>
                  </select>
                  <AmpleIcon icon="arrow-down-1" />
                </div>
              </div>
              <div className="employlist__bottom__col employlist__bottom__col--pager"></div>
            </div> 
          </div>      
        </div>     
      </div>
      <AddEmployeePopup />
      <GoogleSyncPopup />
    </div>
  );
}

export default EmployList;