import React from "react";
import "../styles/About.css";
import ben_image from "../images/ben.png";
import { Grid } from "@mui/material";

function About() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <div className="about-image">
          <img src={ben_image} alt="Benjamin Lui" />
        </div>
      </Grid>
      <Grid item xs={8}>
        <div id="about" className="about">
          <div className="description">
            <h1 className="about-first-line">About</h1>
            <h1 className="about-second-line">
              Full-Stack Web Developer & Mobile Developer / Software Engineer
            </h1>
            <p>👨‍💻 I'm Benjamin Lui 👋</p>
            <p>
              I recently graduated from BCIT's Computer System Technology
              Diploma program specializing in Web and Mobile Development. Prior
              to starting my journey at BCIT's Computer System Technology
              program, I hold a Bachelor of Commerce in Finance and Economics
              from the University of Toronto and have worked in the finance
              industry in Hong Kong. However, I realize my passion lies in
              programming, building and developing software. I love following
              the latest trend in Technology and applying them in my development
              process. Having spent some time at Realtor.com as a Software
              Engineer Co-op specifically in the Mobile Search team, I have
              gained valuable experience in the industry and have learned a lot
              about both the software development process and Android
              development. I am currently looking for a full-time position as a
              Software Engineer / Mobile Developer / Front End Developer /
              Backend Developer.
            </p>
            <p>
              Besides programming, I enjoy playing soccer, video games,
              following the financial markets, and snowboarding.
            </p>
            <p>
              I am open to opportunities in the Greater Vancouver Area, Toronto,
              and Hong Kong. If anyone is interested in hiring me or have
              freelance / contract projects opportunities, please feel free to
              reach me on my Linkedin.
            </p>
            <h1 className="about-second-line">Resume</h1>
          </div>
        </div>
      </Grid>
    </Grid>
  );
}

export default About;
