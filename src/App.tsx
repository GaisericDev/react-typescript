import './App.css';
import {Counter} from "./components/state/Counter";

function App() {
  const personName = {
    first: "Bruce",
    last: "Wayne"
  }

  return (
    <div className="App">
      <Counter></Counter>
    </div>
  );
}

export default App;
