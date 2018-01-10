import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Button3 = ({ text, onClick }) => (
  <button
    onClick={onClick}
  >
    {text}
  </button>
);

Button3.propTypes = {
  text: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired
};


export default Button3;
