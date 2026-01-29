import Greeting from "./Greeting";
import NavBar from "./NavBar";
import './App.css'

function App() {
  return (
    <div>
      <NavBar />
      <h1>Welcome to Day 2 Project</h1>
      <Greeting name="Devanjali" />
    </div>
  );
}

export default App;