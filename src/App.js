import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
import Skills from "./Pages/Skills";



function App() {
  let component
  switch (window.location.pathname) {
    case "/":
      component = <Home />
      break
      case "/About":
        component = <About />
      break
      case "/Projects":
        component = <Projects />
      break
      case "/Skills":
        component = <Skills />
      break
      case "/Contact":
        component = <Contact />
      break

  }
  return (
<>
     <Navbar />
     {component}
     </>
  )
  
     
}
export default App;
