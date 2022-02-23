import './App.css';
import { Status } from './components/Status';
import { Heading } from './components/Heading';
import { Oscar } from './components/Oscar';
import { Greet } from './components/Greet';

function App() {
  const personName = {
    first: "Bruce",
    last: "Wayne"
  }

  const nameList = [
    {
      first: "Bruce",
      last: "Wayne"
    },
    {
      first: "Clark",
      last: "Kent"
    },
    {
      first: "Princess",
      last: "Diana"
    }
  ]

  return (
    <div className="App">
      <Status status="loading"></Status>
      <Heading>Placeholder text</Heading>
      <Oscar><Heading>Oscar goes to Leonardo Dicaprio!</Heading></Oscar>
      <Greet name="Gaiseric" isLoggedIn={false}></Greet>
    </div>
  );
}

export default App;
