import React, {useState, useEffect} from "react";
import axios from "axios";
import AmpleIcon from "../ample-icon/ample-icon";
import Typo from "../stories/Typo";

const LeaveRequestList = () => {
  const [leavelist, setLeavelist] = useState([]);

  useEffect(() => {
    axios.get(`${window.baseUrl}/${window.devEnv}/${window.apiLeave}/manage-leave`)
    .then((val) => {
      //console.log(val.data.data);
      setLeavelist(val.data.data);
    })
    .catch(err => {
      console.log(err);
    })
  }, [])

  return( 
    <div className="leavereqestlist">
      <div className="leavereqestlist__wrap">
        <div className="leavereqestlist__frame">
          <div className="leavereqestlist__frame-headers scrollbar">
            <div className="leavereqestlist__frame__col leavereqestlist__frame__col--name">
              <Typo
                label="Name"
                size="xs"
                weight="normal"
                customclass="color-neutral-500"
              />
            </div>
            <div className="leavereqestlist__frame__col leavereqestlist__frame__col--type">
              <Typo
                label="Leave type"
                size="xs"
                weight="normal"
                customclass="color-neutral-500"
              />
            </div>
            <div className="leavereqestlist__frame__col leavereqestlist__frame__col--period">
              <Typo
                label="Period"
                size="xs"
                weight="normal"
                customclass="color-neutral-500"
              />
            </div>
            <div className="leavereqestlist__frame__col leavereqestlist__frame__col--days">
              <Typo
                label="Days"
                size="xs"
                weight="normal"
                customclass="color-neutral-500"
              />
            </div>
            <div className="leavereqestlist__frame__col leavereqestlist__frame__col--reason">
              <Typo
                label="Reason"
                size="xs"
                weight="normal"
                customclass="color-neutral-500"
              />
            </div>
            <div className="leavereqestlist__frame__col leavereqestlist__frame__col--status">
              <Typo
                label="Status"
                size="xs"
                weight="normal"
                customclass="color-neutral-500"
              />
            </div>
          </div>
          <div className="leavereqestlist__frame-list scrollbar">
            {leavelist && leavelist.length ? leavelist.map((val) => (
              <div className="leavereqestlist__item leavereqestlist__frame-headers" key={val.lid}>
                <div className="leavereqestlist__frame__col leavereqestlist__frame__col--name">
                  <div className="leavereqestlist__frame__nflex">
                    <div className="leavereqestlist__frame__nflex--nimage">
                      {/* <img className="leavereqestlist__frame__nflex--nimg" src="" alt="User profile image" height="40" width="40" /> */}
                    </div>
                    <div className="leavereqestlist__frame__nflex--ndesc">
                      <div className="leavereqestlist__frame__nflex--nname">
                        <Typo
                          label={val.en ? val.en : '-'}
                          size="sm"
                          weight="normal"
                          customclass="color-neutral-900"
                        />
                      </div>
                      <div className="leavereqestlist__frame__nflex--nemail">
                        {/* {`${val.emp_taxid}` == `${musers.eid}` && 
                          <Typo
                            label={val.emp_email}
                            size="sm"
                            weight="light"
                            customclass="color-neutral-500"
                          />
                        } */}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="leavereqestlist__frame__col leavereqestlist__frame__col--type">
                  <Typo
                    label={val.lty ? val.lty : '-'}
                    size="sm"
                    weight="light"
                    customclass="color-neutral-500"
                  />
                </div>
                <div className="leavereqestlist__frame__col leavereqestlist__frame__col--period">
                  <Typo
                    label={val.lsd ? val.lsd : '-'}
                    size="sm"
                    weight="light"
                    customclass="color-neutral-500"
                  />
                </div>
                <div className="leavereqestlist__frame__col leavereqestlist__frame__col--days">
                  <Typo
                    label={val.nod ? val.nod : '-'}
                    size="sm"
                    weight="light"
                    customclass="color-neutral-500"
                  />
                </div>
                <div className="leavereqestlist__frame__col leavereqestlist__frame__col--reason">
                  <Typo
                    label={val.ldc ? val.ldc : '-'}
                    size="sm"
                    weight="light"
                    customclass="color-neutral-500"
                  />
                </div>
                <div className="leavereqestlist__frame__col leavereqestlist__frame__col--status">
                  <Typo
                    label="Approved"
                    size="xs"
                    weight="normal"
                    customclass={["color-semintic-g4-700 status--approved"].join()}
                  />
                </div>
              </div> 
            )) : ''} 
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

export default LeaveRequestList;