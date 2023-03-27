import { useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";

function App() {
  const [section, setSection] = useState("home");
  return (
    <div>
      <Navbar section={section} setSection={setSection} />
      <Home setSection={setSection} />
      <About />
      <Skills />
      <Work />
      <Contact />
    </div>
  );
}

export default App;
