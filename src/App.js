import "./App.css";

function App() {
  return (
    <div id="header">
      <h1>weather</h1>

      <style>{"body { background-color:black; }"}</style>
      <div id="textbox">
        <label>
          {" "}
          <input
            id="search"
            type="text"
            placeholder="search your city or airport"
          />
        </label>
      </div>
    </div>
  );
}

export default App;
