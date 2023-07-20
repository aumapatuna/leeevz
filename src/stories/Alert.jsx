import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./alert.scss";
import AmpleIcon from "../ample-icon/ample-icon";

export const Alert = ({ color, varient, label, ...props }) => {

  function closeTip() {
    let alerttip = document.getElementById('alert');
    if (!alerttip.classList.contains('hide')) {
      alerttip.classList.add('hide');
    }
    window.location.reload();
  }

  return (
    <div
      id={[`alert--${varient}`]}
      className={['alert', `alert--${varient}`, 'hide', ''].join(' ')}
      {...props}
    >
      <div 
        id={[`alert__status--${varient}`]}
        className="alert__wrapper">
        <span className={['alert__status', `alert__status--${varient}`, ''].join(' ')}>
          <span className="success">
            <AmpleIcon icon="tick-circle" />
          </span>
          <span className="fail">
            <AmpleIcon icon="info-circle" /> 
          </span>
        </span>
        <p 
        className={['alert__text', `alert__text--${color}`, ''].join(' ')}
        style={color && { color }}
        >
          {label}
        </p>  
        <span className='alert__close' onClick={closeTip}>
          <AmpleIcon icon="close" />
        </span>
      </div>    
    </div>
  )
};

Alert.propTypes = {
  color: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  varient: PropTypes.oneOf(['success', 'fail'])
}

Alert.defaultProps = {
  color: '#027A48',
  varient: 'success',
};

export default Alert;