import './App.css';
import freeCodeCampLogo from './images/freecodecamp-logo.png'

function App() {
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
        <div className='buttons-row'></div>
        <div className='buttons-row'></div>
        <div className='buttons-row'></div>
        <div className='buttons-row'></div>
        <div className='buttons-row'></div>
      </div>
    </div>
  );
}

export default App;