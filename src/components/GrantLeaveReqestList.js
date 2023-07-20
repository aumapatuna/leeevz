import React, {useState, useEffect} from "react";
import Cookies from "universal-cookie";
import axios from "axios";
import { Link } from "react-router-dom";
import AmpleIcon from "../ample-icon/ample-icon";
import Typo from "../stories/Typo";
import { Buttons } from "../stories/Buttons";
import Alert from "../stories/Alert";

const GrantLeaveRequestList = (glrObj) => {
  const [grantleavelist, setGrantleavelist] = useState([]);
  const [approveleaveid, setApproveleaveid] = useState([]);
  const [grantleaveempid, setGrantleaveempid] = useState([]);
  const [grantleavetype, setGrantleavetype] = useState([]);
  const [grantleavenod, setGrantleavenod] = useState([]);
  const [rejectleaveid, setRejectleaveid] = useState([]);
  const [acceptcomment, setAcceptcomment] = useState([]);
  const [rejectcomment, setRejectcomment] = useState([]);

  const cookie = new Cookies();
  const role = cookie.get('role');

  let success = 'alert--success';
  let fail = 'alert--fail';
  let stsuccess = 'alert__status--success';
  let stfail = 'alert__status--fail';
  let approveleave = 'approveleave';
  let rejectleaves = 'rejectleaves';

  useEffect(() => {
    axios.get(`${window.baseUrl}/${window.devEnv}/${window.apiLeave}/manage-leave`)
    .then((val) => {
      setGrantleavelist(val.data.data);
    })
    .catch(err => {
      console.log(err);
    })
  }, [])

  const handleAcceptClick = (lid,eid,lty,nod) => {
    let approveleave = document.getElementById('approveleave');
    approveleave.classList.add('show');
    setApproveleaveid(lid);
    setGrantleaveempid(eid);
    setGrantleavetype(lty);
    setGrantleavenod(nod);
  }

  const handleRejectClick = (lid,eid,lty,nod) => {
    let rejectleaves = document.getElementById('rejectleaves');
    rejectleaves.classList.add('show');
    setRejectleaveid(lid);
    setGrantleaveempid(eid);
    setGrantleavetype(lty);
    setGrantleavenod(nod);
  }

  /* Accept leave start */
  const inputAcceptTextVal = () => {
    let acceptnote = document.getElementById('grantformaccept__note').value;
    setAcceptcomment(acceptnote);
    if(acceptnote.length > 0) {
      let caccept = document.getElementById('approvereq');
      caccept.parentNode.classList.remove('btn-disabled');
    } else {
      let caccept = document.getElementById('approvereq');
      caccept.parentNode.classList.add('btn-disabled');
    }
  }

  const approveCloseEvent = () => {
    let appc = document.getElementById('approveleave');
    appc.classList.remove('show');
    window.location.reload();
  }

  const approveLeaveEvent = (lid,eid,lty,nod) => {
    let apilid = approveleaveid;
    let apieid = grantleaveempid;
    let apilty = grantleavetype;
    let apinod = grantleavenod;

    axios.patch(`${window.baseUrl}/${window.devEnv}/${window.apiLeave}/manage-leave`, {
      'lid': apilid,
      'lst': 'APPROVED',
      'cmt': acceptcomment,
      'eid': apieid,
      'lty': apilty,
      'nod': apinod
    })
    .then((val) => {
      console.log("Great... Submitted successfully");
      let alerttip = document.getElementById(success);
      let alerttipfail = document.getElementById(fail);
      let approvedleave = document.getElementById(approveleave);
      alerttip.classList.remove('hide');
      alerttipfail.classList.add('hide');
      approvedleave.classList.remove('show');
      document.getElementById(stfail).style.visibility = "hidden";
      document.getElementById(stsuccess).style.visibility = "visible";
    })
    .catch((error) => {
      console.log("Opps... Submissin unsuccessfull " + error);
      let alerttip = document.getElementById(fail);
      let alerttipsuccess = document.getElementById(success);
      let approvedleave = document.getElementById(approveleave);
      alerttip.classList.remove('hide');
      alerttipsuccess.classList.add('hide');
      approvedleave.classList.remove('show');
      document.getElementById(stsuccess).style.visibility = "hidden";
      document.getElementById(stfail).style.visibility = "visible";
    });
    setInterval(() => {
      window.location.reload();
    }, 2000);
}
/* Accept leave end */

/* Reject leave start */
const inputRejectTextVal = () => {
  let rejectnote = document.getElementById('grantformreject__note').value;
  setRejectcomment(rejectnote);
  if(rejectnote.length > 0) {
    let reject = document.getElementById('rejectreq');
    reject.parentNode.classList.remove('btn-disabled');
  } else {
    let reject = document.getElementById('rejectreq');
    reject.parentNode.classList.add('btn-disabled');
  }
}

const rejectCloseEvent = () => {
  let appc = document.getElementById('rejectleaves');
  appc.classList.remove('show');
  window.location.reload();
}

const rejectLeaveEvent = (lid,eid,lty,nod) => {
  let rejlid = rejectleaveid;
  let apieid = grantleaveempid;
  let apilty = grantleavetype;
  let apinod = grantleavenod;

  axios.patch(`${window.baseUrl}/${window.devEnv}/${window.apiLeave}/manage-leave`, {
    'lid': rejlid,
    'lst': 'REJECTED',
    'cmt': rejectcomment,
    'eid': apieid,
    'lty': apilty,
    'nod': apinod
  })
  .then((val) => {
    console.log("Great... Submitted successfully");
    let alerttip = document.getElementById(success);
    let alerttipfail = document.getElementById(fail);
    let rejectedleaves = document.getElementById(rejectleaves);
    alerttip.classList.remove('hide');
    alerttipfail.classList.add('hide');
    rejectedleaves.classList.remove('show');
    document.getElementById(stfail).style.visibility = "hidden";
    document.getElementById(stsuccess).style.visibility = "visible";
  })
  .catch((error) => {
    console.log("Opps... Submissin unsuccessfull " + error);
    let alerttip = document.getElementById(fail);
    let alerttipsuccess = document.getElementById(success);
    let rejectedleaves = document.getElementById(rejectleaves);
    alerttip.classList.remove('hide');
    alerttipsuccess.classList.add('hide');
    rejectedleaves.classList.remove('show');
    document.getElementById(stsuccess).style.visibility = "hidden";
    document.getElementById(stfail).style.visibility = "visible";
  });
  setInterval(() => {
    window.location.reload();
  }, 3000);
}
/* Reject leave end */

  return( 
    <div className="garntleavereqestlist">
      <div className="garntleavereqestlist__wrap">
        <div className="garntleavereqestlist__frame">
          <div className="garntleavereqestlist__frame-headers scrollbar">
            <div className="garntleavereqestlist__frame__col garntleavereqestlist__frame__col--lrequest">
              <Typo
                label="Leave request"
                size="xs"
                weight="normal"
                customclass="color-neutral-500"
              />
            </div>
            <div className="garntleavereqestlist__frame__col garntleavereqestlist__frame__col--lstatus">
              <Typo
                label="Status"
                size="xs"
                weight="normal"
                customclass="color-neutral-500"
              />
            </div>
            <div className="garntleavereqestlist__frame__col garntleavereqestlist__frame__col--laction">
              <Typo
                label="Action"
                size="xs"
                weight="normal"
                customclass="color-neutral-500"
              />
            </div>
            <div className="garntleavereqestlist__frame__col garntleavereqestlist__frame__col--ldesc">
              <Typo
                label=""
                size="xs"
                weight="normal"
                customclass="color-neutral-500"
              />
            </div>
          </div>
          <div className="garntleavereqestlist__frame-list scrollbar">
            {grantleavelist && grantleavelist.length ? grantleavelist.map((val) => (
              <div className="garntleavereqestlist__item garntleavereqestlist__frame-headers" key={val.lid}>
                <div className="garntleavereqestlist__frame__col garntleavereqestlist__frame__col--lrequest">
                  <div className="garntleavereqestlist__frame__lrequest">
                    <div className="garntleavereqestlist__frame__lrequest--limage">
                      {/* <img className="garntleavereqestlist__frame__nflex--nimg" src="" alt="User profile image" height="40" width="40" /> */}
                    </div>
                    <div className="garntleavereqestlist__frame__lrequest--wrap">
                      <div className="garntleavereqestlist__frame__lrequest--ldesc-wrp">
                        <div className="garntleavereqestlist__frame__lrequest--ldesc">
                          <Typo
                            label={val.en}
                            size="sm"
                            weight="semibold"
                            customclass="color-neutral-900"
                          />
                          <Typo
                            label=" is requesting"
                            size="sm"
                            weight="normal"
                            customclass="color-neutral-900"
                          />
                          <Typo
                            label={" " + val.lty.replace(/\b\w/g, l => l.toUpperCase()) + " leave"}
                            size="sm"
                            weight="normal"
                            customclass="color-neutral-900"
                          />
                          <Typo
                            label={" from " + val.lsd + " - " + val.led}
                            //label={(val.lsd), "dd MMM, yyyy"}
                            size="sm"
                            weight="normal"
                            customclass="color-neutral-900"
                          />
                        </div>
                      </div>
                    <div className="garntleavereqestlist__frame__lrequest--reason pt-4">
                      <Typo
                        label={val.ldc}
                        size="sm"
                        weight="normal"
                        customclass="color-neutral-500"
                      />
                    </div>
                    <div className="garntleavereqestlist__frame__lrequest--attachments hide pt-8 pb-12">
                      <div className="garntleavereqestlist__frame__lrequest--attachment">
                        <AmpleIcon icon="document-1" />
                        <Typo
                          label="Medical report.pdf"
                          size="sm"
                          weight="normal"
                          customclass={['color-neutral-700', 'ml-4', ''].join(' ')}
                        />
                      </div>
                      <div className="garntleavereqestlist__frame__lrequest--attachment">
                        <AmpleIcon icon="document-1" />
                        <Typo
                          label="Prescription.pdf"
                          size="sm"
                          weight="normal"
                          customclass={['color-neutral-700', 'ml-4', ''].join(' ')}
                        />
                      </div>
                      <div className="garntleavereqestlist__frame__lrequest--attachment">
                        <AmpleIcon icon="document-1" />
                        <Typo
                          label="Prescription.pdf"
                          size="sm"
                          weight="normal"
                          customclass={['color-neutral-700', 'ml-4', ''].join(' ')}
                        />
                      </div>
                      <div className="garntleavereqestlist__frame__lrequest--attachment has-more">
                        <Typo
                          label="+2"
                          size="sm"
                          weight="normal"
                          customclass={['color-neutral-700', 'ml-4', ''].join(' ')}
                        />
                      </div>
                    </div>
                    </div>
                  </div>
                </div>
                <div className="garntleavereqestlist__frame__col garntleavereqestlist__frame__col--lstatus">
                  <Typo
                    label={val.lst}
                    size="xs"
                    weight="normal"
                    customclass={["color-neutral-500", `status--${val.lst.toLowerCase()}`, ''].join(' ')}
                  />
                </div>
                <div className="garntleavereqestlist__frame__col garntleavereqestlist__frame__col--laction">
                  {role === '1' && val.lst.toLowerCase() === 'pending' &&
                    <>
                      <Buttons
                        id="leave-accept"
                        label="Accept"
                        size="small"
                        varient="secondary-gray"
                        onClick={() => handleAcceptClick(val.lid,val.eid,val.lty,val.nod)}
                      />
                      <Buttons
                        id="leave-reject"
                        label="Reject"
                        size="small"
                        varient="secondary-neutral"
                        onClick={() => handleRejectClick(val.lid,val.eid,val.lty,val.nod)}
                      />
                    </>
                  }
                </div>
                <div className="garntleavereqestlist__frame__col garntleavereqestlist__frame__col--ldesc">
                  <Link to={`/leaverequests/${val.lid}`} userid={glrObj.lid}>
                    <AmpleIcon icon="arrow-right-3" />
                  </Link>
                </div>

                {/* Approve popup start */}
                <div id="approveleave" className="grantleave grantleave--approve">
                  <div className="grantleave__wrap" key={val.lid}>
                    <div className="grantleave__popup p-24">
                      <div id="grantleave__close" className="grantleave__close" onClick={approveCloseEvent}>
                        <AmpleIcon icon="close" />
                      </div>
                        <Typo
                          label="Approved leave request"
                          size="xl"
                          weight="semibold"
                          customclass={['color-base-invert', 'd-block', 'mt-4', ''].join(' ')}
                        />
                        <Typo
                          label="You have successfully accepted the request."
                          size="lg"
                          weight="normal"
                          customclass={['color-neutral-900', 'd-block', 'mt-40', ''].join(' ')}
                        />
                        <form action="" method="post" id="approveleave" className="grantform mt-12">
                          <div id="grantform__comment" className="grantform__section grantform__section--comment mb-24">
                            <label className="grantform__label">
                              <Typo
                                label="Comment"
                                size="sm"
                                weight="normal"
                                customclass="color-neutral-800"
                              />
                              <span className="mandatory color-semintic-g2-600 ml-4">*</span>
                            </label>
                            <div className="grantform__field mt-4 color-semintic-g2-600">
                              <textarea id="grantformaccept__note" name="comments" rows="4" cols="50" placeholder="Enter your comment..." onInput={inputAcceptTextVal} value={val.cmd} required></textarea>
                            </div>
                          </div>

                          <div className="grantform__footer">
                            <div id="grantform__footer__btns" className="grantform__footer__btns btn-disabled">
                              <Buttons
                                id="approvereq"
                                onClick={() => approveLeaveEvent(val.lid)}
                                label="Save"
                                size="medium"
                              />
                              <Buttons
                                id="approveclose"
                                onClick={() => approveCloseEvent(val.lid)}
                                label="Cancel"
                                size="medium"
                                varient="secondary-gray"
                              />
                            </div>
                          </div>
                        </form>
                    </div>
                  </div>
                </div>
                {/* Approve popup end */}

                {/* Reject popup stat */}
                <div id="rejectleaves" className="grantleave grantleave--reject">
                  <div className="grantleave__wrap">
                    <div className="grantleave__popup p-24">
                      <div id="grantleave__close" className="grantleave__close" onClick={rejectCloseEvent}>
                        <AmpleIcon icon="close" />
                      </div>
                        <Typo
                          label="Denied leave request"
                          size="xl"
                          weight="semibold"
                          customclass={['color-base-invert', 'd-block', 'mt-4', ''].join(' ')}
                        />
                        <Typo
                          label="You have successfully rejected this request."
                          size="lg"
                          weight="normal"
                          customclass={['color-neutral-900', 'd-block', 'mt-40', ''].join(' ')}
                        />
                        <form action="" method="post" id="rejectleaves" className="grantform mt-12">
                          <div id="grantform__comment" className="grantform__section grantform__section--comment mb-24">
                            <label className="grantform__label">
                              <Typo
                                label="Comment"
                                size="sm"
                                weight="normal"
                                customclass="color-neutral-800"
                              />
                              <span className="mandatory color-semintic-g2-600 ml-4">*</span>
                            </label>
                            <div className="grantform__field mt-4 color-semintic-g2-600">
                              <textarea id="grantformreject__note" name="comments" rows="4" cols="50" placeholder="Enter your comment..." onInput={inputRejectTextVal} required></textarea>
                            </div>
                          </div>

                          <div className="grantform__footer">
                            <div id="grantform__footer__btns" className="grantform__footer__btns btn-disabled">
                              <Buttons
                                id="rejectreq"
                                onClick={rejectLeaveEvent}
                                label="Save"
                                size="medium"
                              />
                              <Buttons
                                id="rejectclose"
                                onClick={rejectCloseEvent}
                                label="Cancel"
                                size="medium"
                                varient="secondary-gray"
                              />
                            </div>
                          </div>
                        </form>
                    </div>
                  </div>
                </div>
                {/* Reject popup end */}
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

            <div className="requstleavepopup__footer__btns--status">
              <Alert 
                color="#027A48"
                label="Leave grant process successfull." 
              />
              <Alert
                color="#7A271A"
                label="Leave grant process failed."
                varient="fail"
              />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default GrantLeaveRequestList;