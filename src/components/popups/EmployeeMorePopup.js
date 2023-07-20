import React from "react";
import Typo from "../../stories/Typo";

const EmployeeMorePopup = () => {
  return(
    <div className="employeemorepopup">
      <div className="employeemorepopup__wrapper">
        <div className="employeemorepopup__row employeemorepopup__row--edit">
          <Typo
            label="Edit"
            size="xs"
            weight="normal"
            customclass={['employeemorepopup__item', 'color-neutral-900', ''].join(' ')}
          />
        </div>
        <div className="employeemorepopup__row employeemorepopup__row--archieve">
          <Typo
            label="Archieve"
            size="xs"
            weight="normal"
            customclass={['employeemorepopup__item', 'color-neutral-900', ''].join(' ')}
          />
        </div>
        <div className="employeemorepopup__row employeemorepopup__row--delete">
          <Typo
            label="Delete"
            size="xs"
            weight="normal"
            customclass={['employeemorepopup__item', 'color-neutral-900', ''].join(' ')}
          />
        </div>
      </div>
    </div>
  );
}

export default EmployeeMorePopup;