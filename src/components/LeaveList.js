import React, {useState, useEffect} from "react";
import axios from "axios";
import AmpleIcon from "../ample-icon/ample-icon";
import Headings from "../stories/Headings";
import Typo from "../stories/Typo";


const LeaveList = () => {
  const [leavelist, setLeavelist] = useState([]);
  const [emplist, setEmplist] = useState([]);

  useEffect(() => {
    axios.get(`${window.baseUrl}/${window.devEnv}/${window.apiLeave}/manage-leave-summary`)
    .then(val => {
      console.log(val.data.data)
      setLeavelist(val.data.data);
    })
    .catch(err => {
      console.log(err);
    })
  }, [])

  useEffect(() => {
    axios.get(`${window.baseUrl}/${window.devEnv}/${window.apiUsers}/manage-users`)
    .then(val => {
      console.log(val.data.data)
      setEmplist(val.data.data);
    })
    .catch(err => {
      console.log(err);
    })
  }, [])

  return(
    <div className="leavelist">
      <div className="leavelist__wrap">
        <div className="leavelist__count hide">
          <span className="leavelist__count__number">
            <Typo
              //label={emplist.length}
              label="10"
              size="md"
              weight="light"
              customclass="color-neutral-600"
            />
          </span>
          <span className="leavelist__count__title">
            <Typo
              label=" Employees"
              size="md"
              weight="light"
              customclass="color-neutral-600"
            />
          </span>
        </div>
        <div className="leavelist__summary">
          <Headings
            label="Employee leave summary"
            renderAs="h6"
            weight="semibold"
            customclass="color-neutral-800"
          />
        </div>
        <div className="leavelist__frame">
          <div className="leavelist__frame-headers scrollbar">
            <div className="leavelist__frame__col leavelist__frame__col--name">
              <Typo
                label="Name"
                size="xs"
                weight="normal"
                customclass="color-neutral-500"
              />
            </div>
            <div className="leavelist__frame__col leavelist__frame__col--annual">
              <div className="leavelist__frame__cat">
                <Typo
                  label="Annual"
                  size="xs"
                  weight="normal"
                  customclass="color-neutral-500"
                />
              </div>
              <div className="leavelist__frame__sub-cat">
                <Typo
                  label="Entitled"
                  size="xs"
                  weight="normal"
                  customclass="color-neutral-500"
                />
                <Typo
                  label="Taken"
                  size="xs"
                  weight="normal"
                  customclass="color-neutral-500"
                />
                <Typo
                  label="Available"
                  size="xs"
                  weight="normal"
                  customclass="color-neutral-500"
                />
              </div>    
            </div>
            <div className="leavelist__frame__col leavelist__frame__col--casual">
              <div className="leavelist__frame__cat">
                <Typo
                  label="Casual"
                  size="xs"
                  weight="normal"
                  customclass="color-neutral-500"
                />
              </div>
              <div className="leavelist__frame__sub-cat">
                <Typo
                  label="Entitled"
                  size="xs"
                  weight="normal"
                  customclass="color-neutral-500"
                />
                <Typo
                  label="Taken"
                  size="xs"
                  weight="normal"
                  customclass="color-neutral-500"
                />
                <Typo
                  label="Available"
                  size="xs"
                  weight="normal"
                  customclass="color-neutral-500"
                />
              </div>
            </div>
            <div className="leavelist__frame__col leavelist__frame__col--medical">
              <div className="leavelist__frame__cat">
                <Typo
                  label="Medical"
                  size="xs"
                  weight="normal"
                  customclass="color-neutral-500"
                />
              </div>
              <div className="leavelist__frame__sub-cat">
                <Typo
                  label="Entitled"
                  size="xs"
                  weight="normal"
                  customclass="color-neutral-500"
                />
                <Typo
                  label="Taken"
                  size="xs"
                  weight="normal"
                  customclass="color-neutral-500"
                />
                <Typo
                  label="Available"
                  size="xs"
                  weight="normal"
                  customclass="color-neutral-500"
                />
              </div>
            </div>
          </div>
          <div className="leavelist__frame-list scrollbar">
            {/* Starting API loop */}
            {leavelist && leavelist.length ? leavelist.map((leave, i) => (
              <div className="leavelist__item leavelist__frame-headers" key={i}>
                <div className="leavelist__frame__col leavelist__frame__col--name">
                  <div className="leavelist__frame__nflex">
                    <div className="leavelist__frame__nflex--nimage">
                      {/* <img className="leavelist__frame__nflex--nimg" src="" alt="User profile image" height="40" width="40" /> */}
                    </div>
                    <div className="leavelist__frame__nflex--ndesc">
                      <div className="leavelist__frame__nflex--nname">
                        {emplist && emplist.length ? emplist.map((emp, i) => (
                          <Typo
                            key={i}
                            label={(`${leave.empid}` === `${emp.emp_taxid}`) ? emp.emp_name : ''}
                            size="sm"
                            weight="normal"
                            customclass={["leave-name color-neutral-900"].join(' ')}
                          />
                        )) : ''} 
                      </div>
                    </div>
                  </div>
                </div>
                <div className="leavelist__frame__col leavelist__frame__col--annual">
                  <div className="leavelist__frame__sub-cat leavelist__frame__sub-cat--col">
                    <Typo
                      id="eal-entitled"
                      label={leave.eal ? leave.eal : 'NA'}
                      size="xs"
                      weight="normal"
                      customclass="color-neutral-500"
                    />
                    {(leave.eal != 'NA') && 
                      <Typo
                        id="eal-taken"
                        label={leave.ual ? leave.ual : '0'}
                        size="xs"
                        weight="normal"
                        customclass="color-neutral-500"
                      />
                    }
                    {(leave.eal == 'NA') && 
                      <Typo
                        id="eal-taken"
                        label={leave.ual ? leave.ual : 'NA'}
                        size="xs"
                        weight="normal"
                        customclass="color-neutral-500"
                      />
                    }
                    {(leave.eal == 'NA' || leave.ual == 'NA') &&
                      <Typo
                        id="eal-available"
                        label="NA"
                        size="xs"
                        weight="normal"
                        customclass="color-neutral-500"
                      />
                    }
                    {(leave.eal != 'NA' && leave.ual != 'NA') &&
                      <Typo
                        id="eal-available"
                        label={leave.eal - leave.ual}
                        size="xs"
                        weight="normal"
                        customclass="color-neutral-500"
                      />
                    }
                  </div>    
                </div>
                <div className="leavelist__frame__col leavelist__frame__col--casual">
                  <div className="leavelist__frame__sub-cat leavelist__frame__sub-cat--col">
                    <Typo
                      id="ecl-entitled"
                      label={leave.ecl ? leave.ecl : 'NA'}
                      size="xs"
                      weight="normal"
                      customclass="color-neutral-500"
                    />
                    {(leave.ecl != 'NA') && 
                      <Typo
                        id="ecl-taken"
                        label={leave.ucl ? leave.ucl : '0'}
                        size="xs"
                        weight="normal"
                        customclass="color-neutral-500"
                      />
                    }
                    {(leave.ecl == 'NA') && 
                      <Typo
                        id="ecl-taken"
                        label={leave.ucl ? leave.ucl : 'NA'}
                        size="xs"
                        weight="normal"
                        customclass="color-neutral-500"
                      />
                    }
                    {(leave.ecl == 'NA' || leave.ucl == 'NA') &&
                      <Typo
                        id="ecl-available"
                        label="NA"
                        size="xs"
                        weight="normal"
                        customclass="color-neutral-500"
                      />
                    }
                    {(leave.ecl != 'NA' && leave.ucl != 'NA') &&
                      <Typo
                        id="ecl-available"
                        label={(leave.ecl - leave.ucl).toString()}
                        size="xs"
                        weight="normal"
                        customclass="color-neutral-500"
                      />
                    }
                  </div>
                </div>
                <div className="leavelist__frame__col leavelist__frame__col--medical">
                  <div className="leavelist__frame__sub-cat leavelist__frame__sub-cat--col">
                    <Typo
                      id="eml-entitled"
                      label={leave.eml ? leave.eml : 'NA'}
                      size="xs"
                      weight="normal"
                      customclass="color-neutral-500"
                    />
                    {(leave.eml != 'NA') && 
                      <Typo
                        id="eml-taken"
                        label={leave.uml ? leave.uml : '0'}
                        size="xs"
                        weight="normal"
                        customclass="color-neutral-500"
                      />
                    }
                    {(leave.eml == 'NA') && 
                      <Typo
                        id="eml-taken"
                        label={leave.uml ? leave.uml : 'NA'}
                        size="xs"
                        weight="normal"
                        customclass="color-neutral-500"
                      />
                    }
                    {(leave.eml == 'NA' || leave.uml == 'NA') &&
                      <Typo
                        id="available"
                        label="NA"
                        size="xs"
                        weight="normal"
                        customclass="color-neutral-500"
                      />
                    }
                    {(leave.eml != 'NA' && leave.uml != 'NA') &&
                      <Typo
                        id="available"
                        label={(leave.eml - leave.uml).toString()}
                        size="xs"
                        weight="normal"
                        customclass="color-neutral-500"
                      />
                    }
                  </div>
                </div>
              </div>
            )) : ''}
            {/* End API loop */}
          </div>
          <div className="leavelist__bottom">
            <div className="leavelist__bottom__wrap">
              <div className="leavelist__bottom__col leavelist__bottom__col--noitem hide">
                <Typo
                  label="No of items per page"
                  size="sm"
                  weight="light"
                  customclass="color-neutral-700"
                />
                <div className="leavelist__bottom__col--dropdown">
                  <select className="leavelist__bottom__col--select">
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="30">30</option>
                    <option value="40">40</option>
                    <option value="50">50</option>
                  </select>
                  <AmpleIcon icon="arrow-down-1" />
                </div>
              </div>
              <div className="leavelist__bottom__col leavelist__bottom__col--pager"></div>
            </div> 
          </div>
        </div>  
      </div>
    </div>
  );
}

export default LeaveList;