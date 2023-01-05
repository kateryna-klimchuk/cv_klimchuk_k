// import logo from "./logo.svg";
import "./App.css";
import Education from "./Components/Education/index.tsx";
import SideBar from "./Components/SideBar/index.tsx";
import Summary from "./Components/Summary/index.tsx";
import Projects from "./Components/Projects/index.tsx";
import Experience from "./Components/Experience/index.tsx";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <h1 className="text-3xl font-bold text-red-400 underline">
          Hello world!
        </h1>
      </header> */}
      <SideBar />
      <Summary />
      <Projects />
      <Experience />
      <Education />
    </div>
  );
}

export default App;
