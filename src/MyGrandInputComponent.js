import { FormInputContext } from "./contexts/FormInputContext";
import React, { useContext } from "react";

export default function MyGrandChildInputComponent() {
  const myInputContext = useContext(FormInputContext);
  //   console.log("context", myInputContext);
  return (
    <>
      <label>{myInputContext.labelTitle}</label>
      <input
        value={myInputContext.inputValue}
        onChange={(event) => {
          myInputContext.handleChange(event.target.value);
        }}
      ></input>
    </>
  );
}
