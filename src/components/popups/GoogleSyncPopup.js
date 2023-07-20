import React, {useState, useEffect} from "react";
import axios from "axios";
import Typo from "../../stories/Typo";
import { Buttons } from "../../stories/Buttons";
import { Alert } from "../../stories/Alert";
import AmpleIcon from "../../ample-icon/ample-icon";

const GoogleSyncPopup = () => {
  const[gsync, setGsync] = useState([]);
  const [archieveuser, setArchieveuser] = useState(false);
  const [userinfo, setUserInfo] = useState({
    selecteduser: [],
    response: [],
  });
  
  // Selected value
  const handleUchange = (e) => {
    const { value, checked } = e.target;
	  const { selecteduser } = userinfo;
    //console.log(`${value} is ${checked}`);

	  if (checked) {
      setUserInfo({
        selecteduser: [...selecteduser, value],
        response: [...selecteduser, value],
      });
    } else {
      setUserInfo({
        selecteduser: selecteduser.filter((e) => e !== value),
        response: selecteduser.filter((e) => e !== value),
      });
    }
  };

  // Get existing users
  useEffect(() => {
    axios.get(`${window.baseUrl}/${window.devEnv}/${window.apiUsers}/manage-users`)
    .then(val => {
      //console.log(val.data.data);
      setGsync(val.data.data);
    })
    .catch(err => {
      console.log(err);
    })
  }, [])

  // Show archieved users
  const handleArchieveuser = () => {
    setArchieveuser(!archieveuser);
  };

  function googleSyncClose() {
    let gsclose = document.getElementById('googlesyncpopup');
    if (gsclose.classList.contains('open')) {
      gsclose.classList.remove('open');
    }
  }

  let str = `${userinfo['response']}`;
  console.log(str);

  const postSelected = async () => {
    let success = 'alert--success';
    let fail = 'alert--fail';
    let stsuccess = 'alert__status--success';
    let stfail = 'alert__status--fail';

    let str = `${userinfo['response']}`;
    let arr = str.split(',');

    for (let index = 0; index < arr.length; index++) {
      let element = arr[index];
      let brr = element.toString().split(' ');

      try {
        if (str != '') {
          const resp = await axios.post(`${window.baseUrl}/${window.devEnv}/${window.apiUser}/manage-user`, {
            "epe": brr[3],
            "epfn": brr[1],
            "emp_id": brr[0],
            "epln": brr[2],
            "epmn": brr[1],
            "epn": brr[1] + "  " + brr[2],
            "eprs": "",
            "epr": "1",
            "emps": "0",
            "eptx": brr[4],
            "eps": "0"
          });
          let alerttip = document.getElementById(success);
          let alerttipfail = document.getElementById(fail);
          alerttip.classList.remove('hide');
          alerttipfail.classList.add('hide');
          document.getElementById(stfail).style.visibility = "hidden";
          document.getElementById(stsuccess).style.visibility = "visible";
        } else {
          console.log("User is already existing");
          let alerttip = document.getElementById(fail);
          let alerttipsuccess = document.getElementById(success);
          alerttip.classList.remove('hide');
          alerttipsuccess.classList.add('hide');
          document.getElementById(stsuccess).style.visibility = "hidden";
          document.getElementById(stfail).style.visibility = "visible";
        }
      } catch (err) {
        console.error(err);
        let alerttip = document.getElementById(fail);
        let alerttipsuccess = document.getElementById(success);
        alerttip.classList.remove('hide');
        alerttipsuccess.classList.add('hide');
        document.getElementById(stsuccess).style.visibility = "hidden";
        document.getElementById(stfail).style.visibility = "visible";
      }
    }
    setInterval(() => {
      window.location.reload();
    }, 3000);
  }

  return(
    <div id="googlesyncpopup" className="googlesyncpopup">
      <div className="googlesyncpopup__wrap">
        <div className="googlesyncpopup__header">
          <Typo
            label="Sync with G suite"
            size="xl"
            weight="light"
          />
          <div id="googlesyncpopup__header__close" className="googlesyncpopup__header__close" onClick={googleSyncClose}>
            <AmpleIcon icon="close" />
          </div>
        </div>
        <div className="googlesyncpopup__body">
          {gsync && gsync.length ? gsync.map((emp) => (
            <div className="googlesyncpopup__body__wrap" key={emp.emp_taxid}>
              <div className="googlesyncpopup__body__check">
                <input
                  id={"googlesyncpopup__body__checkbox--" + emp.id}
                  className="googlesyncpopup__body__checkbox"
                  name="selecteduser"
                  value={[`${emp.emp_taxid}` + " " + `${emp.emp_fname}` + " " + `${emp.emp_lname}` + " " + `${emp.emp_email}`]}
                  type="checkbox"
                  onChange={handleUchange}
                />
              </div> 
              <div className="googlesyncpopup__body__details">
                <div className="googlesyncpopup__body__pimage employlist__frame__nflex--nimage">
                  {/* <img src={emp.imageUrl.toString()} alt="Prfile image" height="40" width="40" /> */}
                </div>
                <div className="googlesyncpopup__body__nmail">
                  <Typo
                    label={emp.emp_fname + " "  + emp.emp_lname}
                    size="sm"
                    weight="normal"
                    customclass="color-neutral-900"
                  />
                  <Typo
                    label={emp.emp_email}
                    size="xs"
                    weight="light"
                    customclass="color-neutral-500"
                  />
                </div>
              </div>
            </div>
          )) : "No items"}
        </div>
        <div className="googlesyncpopup__footer">
          <label className="googlesyncpopup__footer__check">
            <input
              id="googlesyncpopup__footer__checkbox"
              className="googlesyncpopup__footer__checkbox"
              type="checkbox"
              value="archieveuser"
              checked={archieveuser}
              onChange={handleArchieveuser}
            />
            <Typo
              label="Add as active users"
              size="sm"
              weight="normal"
              customclass="color-neutral-700"
            />
          </label>
          <div className="googlesyncpopup__footer__btns">
            <Buttons
              id="addemp"
              onClick={postSelected}
              label="Add employees"
              size="medium"
            />
            <Buttons
              onClick={googleSyncClose}
              label="Cancel"
              size="medium"
              varient="secondary-gray"
            />
            <div className="googlesyncpopup__footer__btns--status">
              <Alert 
                color="#027A48"
                label="The employee has been added successfully." 
              />
              <Alert
                color="#7A271A"
                label="The employee has not been added."
                varient="fail"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GoogleSyncPopup;