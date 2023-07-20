import React from "react";
import PropTypes from "prop-types";
import "./headings.scss";

function Headings ({ renderAs, weight, customclass, label, ...props }) {

  return ( 
    <>
      {(() => {
      if (renderAs === 'h1') {
        return (
          <h1
            type="heading"
            className={['heading', `heading__${renderAs}`, `heading__${weight}`, `${customclass}`, ''].join(' ')}
            {...props}
          >
            {label}
          </h1>
        )
      } else if (renderAs === 'h2') {
        return (
          <h2
            type="heading"
            className={['heading', `heading__${renderAs}`, `heading__${weight}`, `${customclass}`, ''].join(' ')}
            {...props}
          >
            {label}
          </h2>
        )
      } else if (renderAs === 'h3') {
        return (
          <h3
            type="heading"
            className={['heading', `heading__${renderAs}`, `heading__${weight}`, `${customclass}`, ''].join(' ')}
            {...props}
          >
            {label}
          </h3>
        )
      } else if (renderAs === 'h4') {
        return (
          <h4
            type="heading"
            className={['heading', `heading__${renderAs}`, `heading__${weight}`, `${customclass}`, ''].join(' ')}
            {...props}
          >
            {label}
          </h4>
        )
      } else if (renderAs === 'h5') {
        return (
          <h5
            type="heading"
            className={['heading', `heading__${renderAs}`, `heading__${weight}`, `${customclass}`, ''].join(' ')}
            {...props}
          >
            {label}
          </h5>
        )
      } else if (renderAs === 'h6') {
        return (
          <h6
            type="heading"
            className={['heading', `heading__${renderAs}`, `heading__${weight}`, `${customclass}`, ''].join(' ')}
            {...props}
          >
            {label}
          </h6>
        )
      }
    })()}
    </>
  );
};

Headings.propTypes = {
  customclass: PropTypes.string,
  weight: PropTypes.oneOf(['light', 'normal', 'semibold', 'bold']),
  renderAs: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  label: PropTypes.string.isRequired,
}

export default Headings