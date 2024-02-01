import React from 'react';
import '../style-sheets/ClearButton.css'

const ClearButton = (props) => (
  <button 
    className='clear-button'
    onClick={props.clearManagement}
  >
    Clear
  </button>
);

export default ClearButton;