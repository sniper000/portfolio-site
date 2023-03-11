import React from "react";
import SkillsCard from "../components/SkillsCard";
import { Grid } from "@mui/material";
import "../styles/Skills.css";

function Skills() {
  const frontEndSkillsImageUrl = [
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-original.svg",
    "https://keenethics.com/wp-content/uploads/2022/01/rest-api-1.svg",
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/graphql/graphql-plain-wordmark.svg",
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
  ];

  const backendSkillsImageUrl = [
    //backend
    "https://www.nextontop.com/assets/img/services/web/expressjs.svg",
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg",
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    "https://upload.wikimedia.org/wikipedia/commons/e/ee/.NET_Core_Logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/4/4f/Csharp_Logo.png",
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg",
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/laravel/laravel-plain-wordmark.svg",
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/firebase/firebase-plain-wordmark.svg",
    "https://keenethics.com/wp-content/uploads/2022/01/rest-api-1.svg",
  ];
  const mobileSkillsImageUrl = [
    //mobile
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/xcode/xcode-original.svg",
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/swift/swift-original-wordmark.svg",
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/androidstudio/androidstudio-original.svg",
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/kotlin/kotlin-original-wordmark.svg",
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original-wordmark.svg",
    "https://miro.medium.com/max/800/0*RkQY6TXJxvwSjhTl",
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/flutter/flutter-original.svg",
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/dart/dart-original-wordmark.svg",
    "https://user-images.githubusercontent.com/15472/41327135-e4bf090c-6eca-11e8-9b76-032e8e2b0707.png",
  ];
  const databaseSkillsImageUrl = [
    //database
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg",
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/firebase/firebase-plain-wordmark.svg",
  ];
  const designSkillsImageUrl = [
    //design
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/figma/figma-original.svg",
  ];
  const ciCdSkillsImageUrl = [
    //ci/cd
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original-wordmark.svg",
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg",
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/jenkins/jenkins-original.svg",
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/azure/azure-original-wordmark.svg",
  ];
  const otherSkillsImageUrl = [
    //other
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/jira/jira-original-wordmark.svg",
  ];
  const programmingLanguagesImageUrl = [
    //programming languages
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original-wordmark.svg",
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
    "https://upload.wikimedia.org/wikipedia/commons/4/4f/Csharp_Logo.png",
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/r/r-original.svg",
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/swift/swift-original-wordmark.svg",
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg",
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/dart/dart-original-wordmark.svg",
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/kotlin/kotlin-original-wordmark.svg",
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg",
  ];
  return (
    <div className="skills">
      <div className="description">
        <h1 className="skills-first-line" id="skills">
          Skills
        </h1>
        <h1 className="skills-second-line">Technologies I've worked with</h1>
        <h1 className="skills-second-line">Frontend</h1>
        <div className="skills-card">
          <Grid container spacing={4}>
            {frontEndSkillsImageUrl.map((skill) => {
              return (
                <Grid item xs={4} sm={4}>
                  <SkillsCard prop={skill} />
                </Grid>
              );
            })}
          </Grid>
        </div>
        <h1 className="skills-second-line">Backend</h1>
        <div className="skills-card">
          <Grid container spacing={4}>
            {backendSkillsImageUrl.map((skill) => {
              return (
                <Grid item xs={4} sm={4}>
                  <SkillsCard prop={skill} />
                </Grid>
              );
            })}
          </Grid>
        </div>
        <h1 className="skills-second-line">Mobile</h1>
        <div className="skills-card">
          <Grid container spacing={4}>
            {mobileSkillsImageUrl.map((skill) => {
              return (
                <Grid item xs={4} sm={4}>
                  <SkillsCard prop={skill} />
                </Grid>
              );
            })}
          </Grid>
        </div>
        <h1 className="skills-second-line">Programming Languages</h1>
        <div className="skills-card">
          <Grid container spacing={4}>
            {programmingLanguagesImageUrl.map((skill) => {
              return (
                <Grid item xs={4} sm={4}>
                  <SkillsCard prop={skill} />
                </Grid>
              );
            })}
          </Grid>
        </div>
        <h1 className="skills-second-line">Database</h1>
        <div className="skills-card">
          <Grid container spacing={4}>
            {databaseSkillsImageUrl.map((skill) => {
              return (
                <Grid item xs={4} sm={4}>
                  <SkillsCard prop={skill} />
                </Grid>
              );
            })}
          </Grid>
        </div>
        <h1 className="skills-second-line">CI/CD</h1>
        <div className="skills-card">
          <Grid container spacing={4}>
            {ciCdSkillsImageUrl.map((skill) => {
              return (
                <Grid item xs={4} sm={4}>
                  <SkillsCard prop={skill} />
                </Grid>
              );
            })}
          </Grid>
        </div>
        <h1 className="skills-second-line">Design</h1>
        <div className="skills-card">
          <Grid container spacing={4}>
            {designSkillsImageUrl.map((skill) => {
              return (
                <Grid item xs={4} sm={4}>
                  <SkillsCard prop={skill} />
                </Grid>
              );
            })}
          </Grid>
        </div>
        <h1 className="skills-second-line">Others</h1>
        <div className="skills-card">
          <Grid container spacing={4}>
            {otherSkillsImageUrl.map((skill) => {
              return (
                <Grid item xs={4} sm={4}>
                  <SkillsCard prop={skill} />
                </Grid>
              );
            })}
          </Grid>
        </div>
      </div>
    </div>
  );
}

export default Skills;
