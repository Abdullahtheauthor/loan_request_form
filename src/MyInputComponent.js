import MyGrandChildInputComponent from "./MyGrandInputComponent";

export default function MyInputComponent({ value, handleChange, inputName }) {
  return (
    <>
      <MyGrandChildInputComponent />
    </>
  );
}
