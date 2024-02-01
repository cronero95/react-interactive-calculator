import React from 'react';
import '../style-sheets/Button.css'

function Button(props) {

  const isOperator = (value) => {
    return isNaN(value) && (value !== '.') && (value !== '=');
  };

  return (
    <button 
      className={`button-wrapper ${isOperator(props.children) ? 'operator' : ''}`.trimEnd()}
      onClick={() => props.clickManagement(props.children)}
    >
      {props.children}
    </button>
  );
}

export default Button;