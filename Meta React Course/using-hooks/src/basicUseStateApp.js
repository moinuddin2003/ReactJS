import {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function InputComponent(){
const [inpotValue, setText] = useState("");


return (
  <>
  <input type="text" value={inpotValue}  onChange={(e) => setText(e.target.value)}/>
  <p>You Typed: {inpotValue}</p>
  <button onClick={() => setText("Bhaaago") }>Reset</button>
  </>
);
}
// function App() {
  // return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  // );

// }

export default InputComponent;
