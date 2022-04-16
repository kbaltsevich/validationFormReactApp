import "./App.css";
import ValidatorForm from "./helpers/myValidator";

function App() {
  return (
    <div className="App">
      {console.log(ValidatorForm.validPassword("123saSasd"))}
    </div>
  );
}

export default App;
