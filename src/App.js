import "./App.css";
import Education from "./Components/Education/index.jsx";
import SideBar from "./Components/SideBar/index.jsx";
import Summary from "./Components/Summary/index.jsx";
import Projects from "./Components/Projects/index.jsx";
import Experience from "./Components/Experience/index.jsx";

function App() {
  return (
    <div className="flex bg-pink-50 max-w-6xl ml-auto mr-auto shadow-lg text-xs sm:text-sm md:text-base">
      <SideBar />
      <div className="p-4 w-1/2 sm:w-2/3">
        <Summary />
        <Projects />
        <Experience />
        <Education />
      </div>
    </div>
  );
}

export default App;
