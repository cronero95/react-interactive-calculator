import './App.css';
import freeCodeCampLogo from './images/freecodecamp-logo.png'
import Button from './components/Button';
import Screen from './components/Screen';
import ClearButton from './components/ClearButton';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

  const [userInput, setUserInput] = useState('');

  const addInput = (value) => {
    setUserInput(userInput+value);
  };

  const calculateResult = () => {
    setUserInput(evaluate(userInput));
  };

  return (
    <div className="App">
      <div className='freecodecamp-logo-wrapper'>
        <img
          className='freecodecamp-logo'
          src={freeCodeCampLogo}
          alt='FreeCodeCamp logo'
        />
      </div>
      <div className='calculator-wrapper'>
        <Screen 
          input={userInput}
        />
        <div className='buttons-row'>
          <Button clickManagement = {addInput}>1</Button>
          <Button clickManagement = {addInput}>2</Button>
          <Button clickManagement = {addInput}>3</Button>
          <Button clickManagement = {addInput}>+</Button>
        </div>
        <div className='buttons-row'>
          <Button clickManagement = {addInput}>4</Button>
          <Button clickManagement = {addInput}>5</Button>
          <Button clickManagement = {addInput}>6</Button>
          <Button clickManagement = {addInput}>-</Button>
        </div>
        <div className='buttons-row'>
          <Button clickManagement = {addInput}>7</Button>
          <Button clickManagement = {addInput}>8</Button>
          <Button clickManagement = {addInput}>9</Button>
          <Button clickManagement = {addInput}>*</Button>
        </div>
        <div className='buttons-row'>
          <Button clickManagement = {calculateResult}>=</Button>
          <Button clickManagement = {addInput}>0</Button>
          <Button clickManagement = {addInput}>.</Button>
          <Button clickManagement = {addInput}>/</Button>
        </div>
        <div className='buttons-row'>
          <ClearButton 
            clearManagement = {() => setUserInput('')}
          />
        </div>
      </div>
    </div>
  );
}

export default App;