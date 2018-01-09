import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Button = ({ text, className }) => (
  <button
    className={className}>
    {text}
  </button>
);

Button.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string
};

Button.defaultProps = {
  className: ''
};

export default Button;
