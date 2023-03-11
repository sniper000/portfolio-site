import React from "react";
import "../styles/Home.css";

function Home() {
  return (
    <div id="home" className="home">
      <div className="description">
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <h1 className="first-line">Hello, I'm</h1>
        <h1 className="second-line">Benjamin Lui 👨‍💻</h1>
        <div class="wrapper">
          <div class="static-txt">I'm a</div>
          <ul class="dynamic-txts">
            <li>
              <span>Full-Stack Developer</span>
            </li>
            <li>
              <span>Software Engineer</span>
            </li>
            <li>
              <span>Android Developer</span>
            </li>
            <li>
              <span>iOS Developer</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Home;
