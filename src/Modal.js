import "./FormStyles.css";
export default function Modal({ isVisible, errorMessage = null }) {
  function message() {
    {
      if (errorMessage != null) {
        return errorMessage;
      } else {
        return "The form has been submitted";
      }
    }
  }
  if (isVisible) {
    return (
      <div id="modal">
        <div id="modal-content">
          <h1 style={{ color: errorMessage ? "red" : "green" }}>{message()}</h1>
        </div>
      </div>
    );
  } else return <></>;
}
