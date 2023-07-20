import React from "react";
import axios from "axios";
import AmpleIcon from "../../ample-icon/ample-icon";
import Typo from "../../stories/Typo";
import { Buttons } from "../../stories/Buttons";
import Alert from "../../stories/Alert";

const RejectLeave = () => {

  const inputRejectTextVal = () => {
    let rejectnote = document.getElementById('grantformreject__note').value;
    console.log("Text length is: " + rejectnote.length);
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

  const rejectLeaveEvent = async() => {
    // const res = await axios.patch(`${window.baseUrl}/${window.devEnv}/${window.apiLeave}/manage-leave`, 
    // { 
    //   'lid': '1664970754949',
    //   'lst': "Rejected",
    //   'cmt': "Granted"
    // });
    // console.log(res.data);
    // window.location.reload();
  }

  return(
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
    </div>
  );
}

export default RejectLeave;