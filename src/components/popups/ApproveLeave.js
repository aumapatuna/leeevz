import React, {useState, useEffect} from "react";
import axios from "axios";
import {useParams, Link} from 'react-router-dom';
import AmpleIcon from "../../ample-icon/ample-icon";
import Typo from "../../stories/Typo";
import { Buttons } from "../../stories/Buttons";
import Alert from "../../stories/Alert";

const ApproveLeave = (props) => {
  const [grantleavelist, setGrantleavelist] = useState([]);
  const [approveleaveid, setApproveleaveid] = useState([]);

  useEffect(() => {
    axios.get(`${window.baseUrl}/${window.devEnv}/${window.apiLeave}/manage-leave`)
    .then((val) => {
      console.log(val.data.data);
      setGrantleavelist(val.data.data);
    })
    .catch(err => {
      console.log(err);
    })
  }, [])

  const inputAcceptTextVal = () => {
    let acceptnote = document.getElementById('grantformaccept__note').value;
    console.log("Text length is: " + acceptnote.length);
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

  const approveLeaveEvent = () => {
    console.log("Clicked item id is: " + approveleaveid);
    //alert(props.acceptid);
    //alert(glObj.lid);
    //alert(glObj.lid);
    // let apilid = lid;
    // let apicmt = cmt;
    // console.log("Apply id: " + apilid);
    // console.log("Apply comment: " + apicmt);
    // axios.patch(`${window.baseUrl}/${window.devEnv}/${window.apiLeave}/manage-leave`, 
    // { 
    //   'lid': apilid,
    //   'lst': 'Approved',
    //   'cmt': apicmt
    // });
    //console.log(res.data);
    //window.location.reload();
  }

  return(
    <div id="approveleave" className="grantleave grantleave--approve">
      {grantleavelist && grantleavelist.length ? grantleavelist.map((val) => (
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
                      onClick={approveCloseEvent}
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
              </form>
          </div>
        </div>
      )) : 'No leaves to approve'}
    </div>
  );
}

export default ApproveLeave;