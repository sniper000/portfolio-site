import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Experiences from "./pages/Experiences";
import Footer from "./pages/Footer";
import { NextUIProvider } from "@nextui-org/react";

function App() {
  // const scrollToSection = (elementRef) => {
  //   window.scrollTo({
  //     top: elementRef.current.offsetTop,
  //     behavior: "smooth",
  //   });
  // };
  return (
    // <NextUIProvider>
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
                <About />
                <Projects />
                <Skills />
              </>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/experiences" element={<Experiences />} />
        </Routes>
      </Router>
      <Footer />
    </div>
    // </NextUIProvider>
  );
}

export default App;
