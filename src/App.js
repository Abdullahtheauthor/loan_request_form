import "./App.css";
import LoanForm from "./LoanForm";
import { UserContext } from "./contexts/UserContext";

function App() {
  return (
    <UserContext.Provider value={{ name: "User", email: "abdo@gmail.com" }}>
      <div className="App" style={{ marginTop: "200px" }}>
        <LoanForm />
      </div>
    </UserContext.Provider>
  );
}

export default App;
