import MyGrandInputComponent from "./MyGrandInputComponent";

export default function MyInputComponent({ value, handleChange, inputName }) {
  return (
    <>
      <MyGrandInputComponent
        value={value}
        handleChange={handleChange}
        inputName={inputName}
      />
    </>
  );
}
