import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';

function BasicUseStateApp() {
  const [inpotValue, setText] = useState("");


  return (
      <>
      <h1>Basic UseState Application</h1>
      {/* Link to navigate to IntermediateUseStateApp */}
      <Link to="/intermediate">Go to Intermediate UseState App</Link>
      <br/>
      <input type="text" value={inpotValue} onChange={(e) => setText(e.target.value)} />
      <p>You Typed: {inpotValue}</p>
      <button onClick={() => setText("Bhaaago")}>Reset</button>
      </>
  );
};

export default BasicUseStateApp;