import React, {useState, useEffect} from "react";
import Cookies from "universal-cookie";
import axios from "axios";
import LeaveRequestForm from "../forms/LeaveRequestForm";
import Typo from "../../stories/Typo";
import { Buttons } from "../../stories/Buttons";
import { Alert } from "../../stories/Alert";
import AmpleIcon from "../../ample-icon/ample-icon";

const RequestLeavePopup = () => {
  const [lreasons, setLreasons] = useState([]);
  const [quotes, setquote] = useState([]);

  const cookie = new Cookies();
  const email = cookie.get('email');

  useEffect(() => {
    axios.get(`${window.baseUrl}/${window.devEnv}/${window.apiUser}/auth?em=`+email)
    .then(res => {
       setquote(res.data.data);
    })
    .catch(err => {
      console.log(err);
    })
  }, [])

  function requestLeaveClose() {
    let lrpopupclose = document.getElementById('requstleavepopup');
    let removefields = document.getElementById('rl-wrapper');
    let removeinfo = document.getElementById('reqleave-info');
    let lcdate = document.getElementById('reql-date');
    let lctype = document.getElementById('reql-type');
    let lcreason = document.getElementById('reql-note');
    let lreqbtn =  document.getElementById('sendreq');
    lreqbtn.classList.remove('disabled');
    lrpopupclose.classList.remove('open');
    removefields.classList.remove('rldate');
    removefields.classList.remove('rltype');
    removeinfo.classList.remove('show');
    lcdate.parentNode.classList.remove('required');
    lctype.parentNode.classList.remove('required');
    lcreason.parentNode.classList.remove('required');
    document.getElementById("leeevzform-create").reset();
    window.location.reload();
  }

  function postRequest(e) {
    let success = 'alert--success';
    let fail = 'alert--fail';
    let stsuccess = 'alert__status--success';
    let stfail = 'alert__status--fail';
    let ldate = document.getElementById('reql-date').value;
    let ltype = document.getElementById('reql-type').value;
    let lreason = document.getElementById('reql-note').value;

    if (ldate == '') {
      let ldate = document.getElementById('reql-date');
      ldate.parentNode.classList.add('required');
    } else {
      let ldate = document.getElementById('reql-date');
      ldate.parentNode.classList.remove('required');
    }
    console.log("date is:" + ldate);

    if (ltype == '') {
      let ltype = document.getElementById('reql-type');
      ltype.parentNode.classList.add('required');
    } else {
      let ltype = document.getElementById('reql-type');
      ltype.parentNode.classList.remove('required');
    }
    console.log("leave type is: " + ltype);

    let ldet;
    let reasonl = lreason.length;
    if (lreason == '' || reasonl <= 7) {
      let lreason = document.getElementById('reql-note');
      lreason.parentNode.classList.add('required');
    } else if (reasonl >= 8){
      let lreason = document.getElementById('reql-note');
      ldet = lreason.value;
      lreason.parentNode.classList.remove('required');
    }

    console.log(lreasons);

    // Get date and time with formatting start
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    console.log('My timezone is: ' + timezone);
    // ====
    //const str = new Date().toLocaleString('en-US', { timeZone: 'Asia/Colombo' });
    const str = new Date().toJSON().slice(0, 100);
    const convertedtime = str.toLocaleString('en-US', {
      timeZone: timezone,
      dateStyle: 'full',
      timeStyle: 'full',
    });
    console.log("This is the converted time string: " + convertedtime);
    let dt = new Date(convertedtime);
    let ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(dt);
    let mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(dt);
    let da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(dt);
    let tm = new Intl.DateTimeFormat('en', { timeStyle: 'short' }).format(dt);
    let displaycurrentdate = `${da}` + ' ' + `${mo}` + ', ' + `${ye}` + ' ' + `${tm}`;
    console.log(displaycurrentdate);
    // Get date and time with formatting end 

    if (ldate != '' && ltype != '' && reasonl >= 8) {

      let dcount;
      let atype = document.getElementById('reql-away').value;
      if(atype == 'full' || atype == '') {
        dcount = '1';
      } else if (atype == 'half') {
        dcount = '0.5';
      }

      try {
        axios.post(`${window.baseUrl}/${window.devEnv}/${window.apiLeave}/manage-leave`, {
          "eid": quotes.emp_taxid,
          "en": quotes.emp_name,
          "lsd": ldate,
          "led": ldate,
          "lty": ltype,
          "nod": dcount,
          "ldc": ldet,
          "lst": "Pending"
        });
        let alerttip = document.getElementById(success);
        let alerttipfail = document.getElementById(fail);
        alerttip.classList.remove('hide');
        alerttipfail.classList.add('hide');
        document.getElementById(stfail).style.visibility = "hidden";
        document.getElementById(stsuccess).style.visibility = "visible";
        setInterval(() => {
          window.location.reload();
        }, 3000);
      } catch (error) {
        let alerttip = document.getElementById(fail);
        let alerttipsuccess = document.getElementById(success);
        alerttip.classList.remove('hide');
        alerttipsuccess.classList.add('hide');
        document.getElementById(stsuccess).style.visibility = "hidden";
        document.getElementById(stfail).style.visibility = "visible";
        console.log(error);
      }
    } else {
      console.log("Error dentified");
    }
  }

  return(
    <div id="requstleavepopup" className="requstleavepopup">
      <div className="requstleavepopup__wrap">
        <div className="requstleavepopup__header">
          <Typo
            label="Create leave request"
            size="xl"
            weight="light"
          />
          <div id="requstleavepopup__header__close" className="requstleavepopup__header__close" onClick={requestLeaveClose}>
            <AmpleIcon icon="close" />
          </div>
        </div>
        <div className="requstleavepopup__body">
          <div className="requstleavepopup__body__info">
            <Typo
              label="Please make sure to get your supervisor’s approval before applying for the leave."
              size="md"
              weight="normal"
              customclass="color-primary-900"
            />
          </div>
          <LeaveRequestForm />
        </div>
        <div className="requstleavepopup__footer">
          <div id="sendreq-wrp" className="requstleavepopup__footer__btns btn-disabled">
            <Buttons
              id="sendreq"
              onClick={postRequest}
              label="Send request"
              size="medium"
            />
            <Buttons
              onClick={requestLeaveClose}
              label="Cancel"
              size="medium"
              varient="secondary-gray"
            />
            <div className="requstleavepopup__footer__btns--status">
              <Alert 
                color="#027A48"
                label="Leave request has been sent successfully." 
              />
              <Alert
                color="#7A271A"
                label="Leave request failed."
                varient="fail"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RequestLeavePopup;