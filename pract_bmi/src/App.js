import "./App.css";

function App() {
  return (
    <div className="container">
      <h1>BMI Calculator</h1>

      <form className="forMan">
        <div className="forMan1">
          <lable> Weight in KG </lable>
          <input type="text" placeholder="Enter your weight" />
        </div>

        <div className="forMan2">
          <lable>Height in Meter </lable>
          <input type="text" placeholder="Enter your height" />
        </div>
      </form>

      <div className="button1">
        <button class="btn" type="submit">
          Submit
        </button>
      </div>

      <div className="button2">
        <button class="btn btn-primary" type="submit">
          Reload
        </button>
      </div>
      <div className="center">
        <h3>Your BMI is:{ }</h3>
        <p>{ }</p>
      </div>
    </div>
  );
}

export default App;
