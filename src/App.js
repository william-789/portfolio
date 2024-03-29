import Intro from "./Intro";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

export default function App() {
  return (
    <>
      <Intro />
      <Navbar />
      <Homepage />
      <Projects />
      <Skills />
      <Contact />
    </>
  );
}

/*
Navbar - missing responsive active
Homepage - ok
Projects - 
Skills - 
Contact - 
*/