import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./popover.scss";
import AmpleIcon from "../ample-icon/ample-icon";

export const Popover = ({ backgroundColor, color, varient, label, ...props }) => {

  function closeTip() {
    let poptip = document.getElementById('popover');
    if (!poptip.classList.contains('hide')) {
      poptip.classList.add('hide');
    }
  }

  return (
    <div
      id="popover"
      className={['popover', `popover__${varient}`, 'hide', ''].join(' ')}
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
      <div className="popover__wrapper">
        <p 
        className={['popover__text', `popover__text--${color}`, ''].join(' ')}
        style={color && { color }}
        >
          {label}
        </p>  
        <span className='popover__close' onClick={closeTip}>
          <AmpleIcon icon="close" />
        </span>
      </div>    
    </div>
  )
};

Popover.propTypes = {
  color: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
}

Popover.defaultProps = {
  backgroundColor: '#101828',
  color: '#ffffff',
  varient: 'dark',
};

export default Popover;