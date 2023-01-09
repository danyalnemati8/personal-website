import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import About from "./Pages/About";
import Home from "./Pages/Home";


function App() {
  let component
  switch (window.location.pathname) {
    case "/":
      component = <Home />
      break
      case "/About":
        component = <About />
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
