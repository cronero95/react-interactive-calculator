import React from 'react';
import '../style-sheets/Button.css'

function Button(props) {

  const isOperator = (value) => {
    return isNaN(value) && (value !== '.') && (value !== '=');
  };

  return (
    <div 
      className={`button-wrapper ${isOperator(props.children) ? 'operator' : ''}`.trimEnd()}>
      {props.children}
    </div>
  );
}

export default Button;