import { useState } from 'react';
import './App.css';


function App() {
  const[disp, setdisp] = useState(0);
  const[num1, setnum1] = useState(null);
  const[num2, setnum2] = useState(null);
  const[op, setop] = useState(null);

  // const genenricclickHandler = (e) => {
  //   e.preventDefault();
  //   const value  = e.target.innerHTML;
  //   console.log(value);
  // }

  const messages = {
    1: "Being On Time",
    2: "Making An Effort",
    3: "Being High Energy",
    4: "Having A Positive Attitude",
    5: "Being Passionate",
    6: "Using Good Body Language",
    7: "Being Coachable",
    8: "Doing A Little Extra",
    9: "Being Prepared",
    0: "Having A Strong Work Ethic"
  };
  
  const numclickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;
  
    // Check if the clicked key is a number from 0-9
    if (messages[value]) {
      console.log(messages[value]); // Displays the corresponding message
      setdisp(messages[value]); // Display message in the UI (assuming setdisp updates display)
    } else {
      console.log("Invalid key pressed");
    }
  };
  



  const clearclickHandler = (e) => {
    e.preventDefault();
    const value  = e.target.innerHTML;
    console.log(value);
    setdisp("10 Things That Require Zero Talent");
    
  }

  // const numclearclickHandler = (e) => {
  //   e.preventDefault();
  //   const value  = e.target.innerHTML;
  //   console.log(value);
  // }
  const nameclickHandler = (e) => {
    e.preventDefault();
    const value  = e.target.innerHTML;
    console.log(value);
    setdisp("SEAN GLENN MAGCALAS");
  }

  return (
    <div className="Calculator">
      <h1>Sean Glenn B. Magcalas-IT3A</h1>
      <div className="Calcucontainer">
        <div className="Displaycon">
        <Display display ={disp}/>
        </div>

        <div className="Buttons">
          <Key label={7} clickHandler={numclickHandler}/> 
          <Key label={8} clickHandler={numclickHandler}/>
          <Key label={9} clickHandler={numclickHandler}/>
          <Key label={4} clickHandler={numclickHandler}/>
          <Key label={5} clickHandler={numclickHandler}/>
          <Key label={6} clickHandler={numclickHandler}/>
          <Key label={1} clickHandler={numclickHandler}/>
          <Key label={2} clickHandler={numclickHandler}/>
          <Key label={3} clickHandler={numclickHandler}/>
          <Key label={0} clickHandler={numclickHandler}/>
          <Key label={'RESET'} className="clear-Keybutton" clickHandler={clearclickHandler}/>
          <Key label ={'NAME'} className="MAGCALAS" clickHandler={nameclickHandler}/>
        </div>
      </div>
    </div>
  );
}

function Key({label, clickHandler, className}){
  return(
    <button onClick={clickHandler} className={className}>
      {label}
    </button>
    
  );
}

function Display({display}){
  return(
    <div className="Display">
      {display}
    </div>
  );
}


export default App;