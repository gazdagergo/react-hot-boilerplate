import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {

  render() {
    return (
      <button
        className={this.props.className}>
        {this.props.text}
      </button>
    );
  }
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string
};

Button.defaultProps = {
  className: ''
};

export default Button;
