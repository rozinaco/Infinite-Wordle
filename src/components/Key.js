import React from "react";
import { useContext } from "react";
import { AppContext } from "../App";

function Key({ keyVal, bigKey }) {
  const { board, setBoard, currAttempt, setCurrAttempt } =
    useContext(AppContext);
  const selectLetter = () => {
    if (keyVal === "ENTER") {
      
    } else if (keyVal === "DELETE") {
      
    } else {
     
    }
  };
  return (
    <div className="key" id={bigKey && "big"} onClick={selectLetter}>
      {keyVal}
    </div>
  );
}

export default Key;
