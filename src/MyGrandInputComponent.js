import { FormInputContext } from "./contexts/FormInputContext";
import React, { useContext } from "react";
import { UserContext } from "./contexts/UserContext";

export default function MyGrandChildInputComponent() {
  const myInputContext = useContext(FormInputContext);
  const myUserInfo = useContext(UserContext);
  //   console.log("context", myInputContext);
  return (
    <>
      <label>
        {myUserInfo.name} {myInputContext.labelTitle}
      </label>
      <input
        value={myInputContext.inputValue}
        onChange={(event) => {
          myInputContext.handleChange(event.target.value);
        }}
      ></input>
    </>
  );
}
