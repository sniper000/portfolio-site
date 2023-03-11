import React from "react";
// import { Link } from "react-router-dom";
import { Link } from "react-scroll";
import "../styles/Navbar.css";

function Navbar() {
  // const home = useRef(null);
  // const about = useRef(null);
  // const skills = useRef(null);
  // const projects = useRef(null);

  // const scrollToSection = (elementRef) => {
  //   window.scrollTo({
  //     top: elementRef.current.offsetTop,
  //     behavior: "smooth",
  //   });
  // };

  return (
    <div className="navbar">
      <div className="links">
        {/* <Link to="/" smooth={true}>
          Home
        </Link> */}
        {/* <Link to="/about" smooth={true}>
          About
        </Link> */}
        {/* <Link to="/skills" smooth={true}>
          Skills
        </Link>
        <Link to="/projects" smooth={true}>
          Projects
        </Link> */}
        <Link to="home" smooth={true} offset={0} duration={500}>
          Home
        </Link>
        <Link to="about" smooth={true} offset={0} duration={500}>
          About
        </Link>
        <Link to="projects" smooth={true} offset={0} duration={500}>
          Projects
        </Link>
        <Link to="skills" smooth={true} offset={0} duration={500}>
          Skills
        </Link>
        {/* <Link>Experiences</Link> */}
        {/* <Link>Resume</Link> */}
      </div>
    </div>
  );
}

export default Navbar;
