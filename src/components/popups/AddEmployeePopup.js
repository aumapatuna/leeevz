import React from "react";
import Typo from "../../stories/Typo";

const AddEmployeePopup = () => {

  function openGsync() {
    let opengsync = document.getElementById('addemployeepopup__row__gsync');
    let addemployeepopup = document.getElementById('addemployeepopup');
    let addemp = document.getElementById('addemp');
    let gsclose = document.getElementById('googlesyncpopup');
    opengsync.classList.toggle('open');
    addemployeepopup.classList.remove('show');
    addemp.classList.remove('btn--clicked');
    gsclose.classList.add('open');
  }

  return(
    <div id="addemployeepopup" className="addemployeepopup">
      <div className="addemployeepopup__wrapper">
      <div id="addemployeepopup__row__manual" className="addemployeepopup__row addemployeepopup__row__manual">
        <Typo
          label="Add an employee"
          size="md"
          weight="normal"
          customclass={['addemployeepopup__item', 'color-neutral-800', ''].join(' ')}
        />
        </div>
        <div id="addemployeepopup__row__gsync" className="addemployeepopup__row addemployeepopup__row__gsync" onClick={openGsync}>
          <Typo
            label="Sync with G Suite"
            size="md"
            weight="normal"
            customclass={['addemployeepopup__item', 'color-neutral-800', ''].join(' ')}
          />
        </div>
      </div>
    </div>
  );
}

export default AddEmployeePopup;