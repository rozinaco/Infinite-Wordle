import React, { useEffect } from "react";
import Key from "./Key";

function Keyboard() {
  const keys1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const keys2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const keys3 = ["Z", "X", "C", "V", "B", "N", "M"];

  const keypress = (e) => {
    if(e.key==="Enter"){
      console.log('Enter pressed')
    } else if(e.key==="Backspace"){
      console.log('Backspace pressed')
    } else {
      console.log(e.key+' pressed')
    }
  };
  useEffect(() => {
    document.addEventListener("keydown",keypress);
  }, []);

  return (
    <div className="keyboard">
      <div className="line1">
        {keys1.map((key, i) => {
          return <Key keyVal={key} key={i} />;
        })}
      </div>
      <div className="line2">
        {keys2.map((key, i) => {
          return <Key keyVal={key} key={i} />;
        })}
      </div>
      <div className="line3">
        <Key keyVal={"ENTER"} bigKey />
        {keys3.map((key, i) => {
          return <Key keyVal={key} key={i} />;
        })}
        <Key keyVal={"DELETE"} bigKey />
      </div>
    </div>
  );
}

export default Keyboard;
