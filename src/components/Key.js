import React from "react";
import { useContext } from "react";
import { AppContext } from "../App";

function Key({ keyVal, bigKey, disabled }) {
  const { onDelete, onEnter, onSelectLetter } = useContext(AppContext);
  const selectLetter = () => {
    if (keyVal === "ENTER") {
      onEnter();
    } else if (keyVal === "DELETE") {
      onDelete();
    } else {
      onSelectLetter(keyVal);
    }
  };
  return (
    <button
      className="key"
      id={bigKey ? "big" : disabled && "disabled"}
      onClick={selectLetter}
    >
      {keyVal}
    </button>
  );
}

export default Key;
