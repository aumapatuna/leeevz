import React, {useState, useEffect} from "react";
import axios from "axios";
import {useParams, Link} from 'react-router-dom';
import Cookies from "universal-cookie";
import Headings from "../stories/Headings";
import Typo from "../stories/Typo";
import AmpleIcon from "../ample-icon/ample-icon";

const MyLeaves = () => {
  const [empleave, setEmpleave] = useState([]);
  const [empleavesummary, setEmpleavesummary] = useState([]);

  const cookie = new Cookies();
  const id = cookie.get('id');

  const params = useParams();
  const userid = params.leaveId;

  useEffect(() => {
    axios.get(`${window.baseUrl}/${window.devEnv}/${window.apiLeave}/manage-emp-leave?eid=`+id)
    .then(res => {
      setEmpleave(res.data.data);
      console.log(res.data.data);
    }, [])
    .catch(err => {
      console.log(err);
    })
  }, [])

  useEffect(() => {
    axios.get(`${window.baseUrl}/${window.devEnv}/${window.apiLeave}/manage-emp-leave-summary?eid=`+id)
    .then(res => {
      setEmpleavesummary(res.data.data);
    }, [])
    .catch(err => {
      console.log(err);
    })
  }, [])

  return(
    <div className="myleaves">
      <div className="myleaves__wrap">
        <div className="myleaves__balance">
          <div className="myleaves__balance-header">
            <Headings
              label="Leave balance"
              renderAs="h6"
              weight="semibold"
              customclass="color-neutral-800"
            />
          </div>
          <div className="myleaves__balance-grid">
            <div className="myleaves__balance-col myleaves__balance-col--annual">
              <div className="myleaves__balance-title">
                <Typo
                  label="Annual leaves"
                  size="lg"
                  weight="normal"
                  customclass="color-base-900"
                />
              </div>
              <div className="myleaves__balance-icon myleaves__balance-icon--annual">
                <AmpleIcon type={"filled"} icon="sun-1" />
              </div>
              <div className="myleaves__balance-availability">
                {(empleavesummary.ual == 'NA' || empleavesummary.ual == 'NA') &&
                  <Typo
                    label="No days available"
                    size="md"
                    weight="semibold"
                    customclass="color-primary-600"
                  />
                }
                {(empleavesummary.eal != 'NA' || empleavesummary.ual != 'NA') &&
                  <Typo
                    label={(empleavesummary.eal - empleavesummary.ual) + " days available"}
                    size="md"
                    weight="semibold"
                    customclass="color-primary-600"
                  />
                }
              </div>
              <div className="myleaves__balance-taken">
                <Typo
                  label={empleavesummary.ual + " days taken"}
                  size="sm"
                  weight="light"
                  customclass="color-neutral-600"
                />
              </div>
            </div>
            <div className="myleaves__balance-col myleaves__balance-col--casual">
              <div className="myleaves__balance-title">
                  <Typo
                    label="Casual leaves"
                    size="lg"
                    weight="normal"
                    customclass="color-base-900"
                  />
                </div>
                <div className="myleaves__balance-icon myleaves__balance-icon--casual">
                  <AmpleIcon type={"filled"} icon="car" />
                </div>
                <div className="myleaves__balance-availability">
                  {(empleavesummary.ecl == 'NA' || empleavesummary.ucl == 'NA') &&
                    <Typo
                      label="No days available"
                      size="md"
                      weight="semibold"
                      customclass="color-primary-600"
                    />
                  }
                  {(empleavesummary.ecl != 'NA' || empleavesummary.ucl != 'NA') &&
                    <Typo
                      label={(empleavesummary.ecl - empleavesummary.ucl) + " days available"}
                      size="md"
                      weight="semibold"
                      customclass="color-primary-600"
                    />
                }
                </div>
                <div className="myleaves__balance-taken">
                  <Typo
                    label={empleavesummary.ucl + " days taken"}
                    size="sm"
                    weight="light"
                    customclass="color-neutral-600"
                  />
                </div>
              </div>
            <div className="myleaves__balance-col myleaves__balance-col--medical">
              <div className="myleaves__balance-title">
                <Typo
                  label="Medical leaves"
                  size="lg"
                  weight="normal"
                  customclass="color-base-900"
                />
              </div>
              <div className="myleaves__balance-icon myleaves__balance-icon--medical">
                <AmpleIcon type={"filled"} icon="hospital" />
              </div>
              <div className="myleaves__balance-availability">
                {(empleavesummary.eml == 'NA' || empleavesummary.uml == 'NA') &&
                  <Typo
                    label="No days available"
                    size="md"
                    weight="semibold"
                    customclass="color-primary-600"
                  />
                }
                {(empleavesummary.eml != 'NA' || empleavesummary.uml != 'NA') &&
                  <Typo
                    label={(empleavesummary.eml - empleavesummary.uml) + " days available"}
                    size="md"
                    weight="semibold"
                    customclass="color-primary-600"
                  />
                }
              </div>
              <div className="myleaves__balance-taken">
                <Typo
                  label={empleavesummary.uml + " days taken"}
                  size="sm"
                  weight="light"
                  customclass="color-neutral-600"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="myleaves__upcoming">
          <div className="myleaves__upcoming-wrap">
            <div className="myleaves__upcoming-title">
              <Typo
                label="Upcoming leaves"
                size="xl"
                weight="semibold"
                customclass="color-neutral-800"
              />
            </div>
            {/* My leave list start */}
            <div className="myleaves__frame">
              <div className="myleaves__frame-headers scrollbar">
                <div className="myleaves__frame__col myleaves__frame__col--type">
                  <Typo
                    label="Leave type"
                    size="sm"
                    weight="light"
                    customclass="color-neutral-500"
                  />
                </div>
                <div className="myleaves__frame__col myleaves__frame__col--period">
                  <Typo
                    id="d-period"
                    label="Period"
                    size="sm"
                    weight="light"
                    customclass="color-neutral-500"
                  /> 
                </div>
                <div className="myleaves__frame__col myleaves__frame__col--days text-center">
                  <Typo
                    label="Days"
                    size="sm"
                    weight="light"
                    customclass="color-neutral-500"
                  />
                </div>
                <div className="myleaves__frame__col myleaves__frame__col--reason">
                  <Typo
                    label="Reason"
                    size="sm"
                    weight="light"
                    customclass="color-neutral-500"
                  />
                </div>
                <div className="myleaves__frame__col myleaves__frame__col--status">
                  <Typo
                    label="Status"
                    size="sm"
                    weight="light"
                    customclass="color-neutral-500"
                  />
                </div>
              </div>
              <div className="myleaves__frame-list scrollbar">
                {empleave && empleave.length ? empleave.map((val) => (
                  <div className="myleaves__item myleaves__frame-headers" key={val.lid}>
                    <div className="myleaves__frame__col myleaves__frame__col--type">
                      <div className="myleaves__frame__tflex">
                        {/* <div className="myleaves__balance-icon myleaves__balance-icon--list myleaves__balance-icon--"> */}
                        <div className={`myleaves__balance-icon myleaves__balance-icon--list myleaves__balance-icon--${val.lty.toLowerCase()}`}>
                          {val.lty.toLowerCase() == 'annual' &&
                            <AmpleIcon type={"filled"} icon="sun-1" />
                          }
                          {val.lty.toLowerCase() == 'casual' &&
                            <AmpleIcon type={"filled"} icon="car" />
                          }
                          {val.lty.toLowerCase() == 'medical' &&
                            <AmpleIcon type={"filled"} icon="hospital" />
                          }
                          </div>
                        <div className="myleaves__frame__tflex--tdesc">
                          <Typo
                            label={val.lty}
                            size="sm"
                            weight="normal"
                            customclass="color-neutral-900"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="myleaves__frame__col myleaves__frame__col--period">
                      <Typo
                        label={val.lsd}
                        size="sm"
                        weight="light"
                        customclass="color-neutral-500"
                      />
                    </div>
                    <div className="myleaves__frame__col myleaves__frame__col--days text-center">
                      <Typo
                        label={val.nod}
                        size="sm"
                        weight="light"
                        customclass="color-neutral-500"
                      />
                    </div>
                    <div className="myleaves__frame__col myleaves__frame__col--reason">
                      <Typo
                        label={val.ldc}
                        size="sm"
                        weight="light"
                        customclass="color-neutral-500"
                      />
                    </div>
                    <div className="myleaves__frame__col myleaves__frame__col--status">
                      <Typo
                        label={val.lst}
                        size="xs"
                        weight="normal"
                        //customclass={["color-semintic-g4-700", `status--${val.lst.replace(/\b\w/g, l => l.toLowerCase())}`, ''].join(' ')}
                        customclass={["color-semintic-g4-700", `status--${val.lst.toLowerCase()}`, ''].join(' ')}
                      />
                      <div className="myleaves__frame__goto pt-4 pl-20">
                        <Link to={`/leaverequests/${val.lid}`} userid={userid}>
                          <AmpleIcon icon="arrow-right-3" />
                        </Link>
                      </div>
                    </div>
                  </div>
                )) : 
                <div className="employlist--myleave">
                  <div className="employlist__wrap employlist__wrap--noitem"> 
                      <div className="employlist__noitem">
                        <div className="employlist__noitem-image-wrap">
                          <div className="employlist__noitem-image">
                            <AmpleIcon icon="search-normal-1" />
                          </div>
                        </div>
                        <div className="employlist__noitem-title">
                          <Typo
                            label="No leaves yet"
                            size="lg"
                            weight="normal"
                            customclass="color-base-invert"
                          />
                        </div>
                      </div>
                  </div>
                </div>
                }
                <div className="force-overflow"></div>
              </div>     
            </div>  
            {/* My leave list end */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyLeaves;