import React from 'react';
import PropTypes from 'prop-types';
import AmpleIcon from '../ample-icon/ample-icon';
import './buttons.scss';

export const Buttons = ({ disabled, id, backgroundColor, size, varient, buttonIcon, iconName, color, label, handleClick, ...props }) => {
  const mode = disabled ? `btn__${varient}--disabled` : '';
  return (
    <button
      type="button"
      id={id}
      className={['btn', `btn__${varient}`,`btn__${size}`, `btn__${varient}--${size}`, `btn__${varient}--${buttonIcon}`, `btn__${buttonIcon}--${size}`, `btn__${buttonIcon}`,  mode].join(' ')}
      style={backgroundColor && { backgroundColor }}
      onClick={handleClick}
      {...props}
    >
      <AmpleIcon icon={iconName} />
      <label>{label}</label>
    </button>
  );
};

Buttons.propTypes = {
  disabled: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  varient: PropTypes.oneOf(['primary', 'secondary', 'secondary-gray', 'secondary-white', 'secondary-red', 'secondary-neutral']),
  buttonIcon: PropTypes.oneOf(['plane', 'left-image', 'right-image']),
  id: PropTypes.string,
  iconName: PropTypes.string,
  label: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
};

Buttons.defaultProps = {
  id: '',
  size: 'small',
  varient: 'primary',
  buttonIcon: 'plane',
  disabled: false,
  onClick: undefined,
};
