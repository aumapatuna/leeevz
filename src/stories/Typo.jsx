import React from "react";
import PropTypes from "prop-types";
import "./typo.scss";

function Typo ({ size, weight, label, customclass, ...props }) {

  return (
    <p
      type="text"
      className={['typo', `typo__${size}`, `typo__${weight}`, `${customclass}`, ''].join(' ')}
      {...props}
    >
      {label}
    </p>
  )
};

Typo.propTypes = {
  customclass: PropTypes.string,
  weight: PropTypes.oneOf(['light', 'normal', 'semibold', 'bold']),
  size: PropTypes.oneOf(['xl', 'lg', 'md', 'sm', 'xs']),
  label: PropTypes.string,
}

export default Typo