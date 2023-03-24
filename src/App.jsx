import './App.css'
import {PortfolioHeader} from "./components/PortfolioHeader.jsx";
import AboutMe from "./components/AboutMe.jsx";
import Projects from "./components/Projects.jsx";

function App() {

  return (
      <div>
        <PortfolioHeader />
            {/*
            TODO: Conditionally render Work, About, Contact
            TODO: Add resume button to download resume. Maybe from linkedin?
            */}
          <AboutMe />
          <Projects />
      </div>
  )
}

export default App
