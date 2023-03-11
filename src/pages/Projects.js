import React from "react";
import "../styles/Projects.css";
import ProjectCardSAP from "../components/ProjectCardSAP";
import ProjectCardPortfolio from "../components/ProjectCardPortfolio";
import ProjectCardPitchU from "../components/ProjectCardPitchU";
import { Grid } from "@nextui-org/react";

function Projects() {
  return (
    <div className="projects">
      <div className="description">
        <h1 className="projects-first-line" id="projects">
          Projects
        </h1>
        {/* <h1 className="projects-second-line">Coming Soon</h1> */}
      </div>
      <div>
        {/* <img
          className="icon"
          style={{ width: 100, height: 100 }}
          src={portfolio}
          alt="animated star"
        /> */}
        {/* <div className="about-image">
          <video autoPlay loop muted>
            <source
              style={{ width: 100, height: 100 }}
              src={sap_project}
              type="video/mp4"
            />
          </video>
        </div> */}
      </div>
      <Grid.Container gap={2} justify="center">
        <Grid xs={12} sm={4}>
          <ProjectCardSAP
            project_name={"SAP Breakroom"}
            project_link={"https://sapworkstatuschatroom.netlify.app/"}
            project_image={"sap_project"}
          />
        </Grid>
        <Grid xs={12} sm={4}>
          <ProjectCardPortfolio project_name={"Personal Portfolio"} />
        </Grid>
        <Grid xs={12} sm={4}>
          <ProjectCardPitchU project_name={"PitchU"} />
        </Grid>
      </Grid.Container>
    </div>
  );
}

export default Projects;
