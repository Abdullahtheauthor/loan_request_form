import "./FormStyles.css";
import Modal from "./Modal";
import { useState } from "react";
import MyInputComponent from "./MyInputComponent";
import { FormInputContext } from "./contexts/FormInputContext";

export default function LoanForm() {
  const [errorMessage, setErrorMessage] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [formInputs, setFormInputs] = useState({
    name: "",
    phone: "",
    age: "",
    employeeStatus: false,
    option: "",
  });
  const buttonIsDisabled = formInputs.name === "" || formInputs.age === "";

  function handelSubmit(e) {
    e.preventDefault();
    setModalVisible(true);
    const { age, phone } = formInputs;
    if (age < 18 || age > 100) {
      setErrorMessage("This age is not allowed");
    } else if (phone.length < 10 || phone.length > 15) {
      setErrorMessage("This phone number is not in range,  is not allowed");
    } else if (!/^\d+$/.test(phone)) {
      setErrorMessage(
        "This phone number contains non-numeric characters, which is not allowed"
      );
    } else setErrorMessage(null);

    console.log("button:", buttonIsDisabled);
  }
  function handleDivClick() {
    if (modalVisible) {
      //   alert("klk");
      setModalVisible(false);
    }
  }
  function handleChangeNameInput(value) {
    setFormInputs({ ...formInputs, name: value });
  }
  function handleChangeAgeInput(value) {
    setFormInputs({ ...formInputs, age: value });
  }
  function handleChangePhoneInput(value) {
    setFormInputs({ ...formInputs, phone: value });
  }
  return (
    <div
      onClick={handleDivClick}
      className="flex"
      style={{ flexDirection: "column" }}
    >
      <form id="loan-form" className="flex" style={{ flexDirection: "column" }}>
        <h1>Requesting a loan</h1>
        <hr></hr>
        <FormInputContext.Provider
          value={{
            labelTitle: "Name",
            handleChange: handleChangeNameInput,
            inputName: formInputs.name,
          }}
        >
          <MyInputComponent />
        </FormInputContext.Provider>

        <FormInputContext.Provider
          value={{
            labelTitle: "Age",
            handleChange: handleChangeAgeInput,
            inputName: formInputs.age,
          }}
        >
          <MyInputComponent />
        </FormInputContext.Provider>

        <FormInputContext.Provider
          value={{
            labelTitle: "Phone Number",
            handleChange: handleChangePhoneInput,
            inputName: formInputs.phone,
          }}
        >
          <MyInputComponent />
        </FormInputContext.Provider>

        <label style={{ marginTop: "30px" }}>Are you an employee</label>
        <input
          type="checkBox"
          checked={formInputs.employeeStatus}
          onChange={(e) =>
            setFormInputs({ ...formInputs, employeeStatus: e.target.checked })
          }
        ></input>

        <select
          value={formInputs.option}
          onChange={(e) =>
            setFormInputs({ ...formInputs, option: e.target.value })
          }
        >
          <option>less than 500$</option>
          <option>between 500$ & 10000$</option>
          <option>more than 10000$</option>
        </select>
        <button
          className={
            formInputs.name && formInputs.age && formInputs.phone
              ? "sumbit"
              : ""
          }
          id="submit-loan-button"
          type="button"
          disabled={buttonIsDisabled}
          onClick={(e) => {
            handelSubmit(e);
          }}
        >
          Submit{" "}
        </button>
      </form>
      <Modal isVisible={modalVisible} errorMessage={errorMessage} />
      {/* <h2>Hello</h2> */}
    </div>
  );
}
