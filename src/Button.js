import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Button = ({ text, onClick, children }) => (
  <button
    onClick={onClick}
  >
    {children}
    {text}
  </button>
);

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ])
};


export default Button;
