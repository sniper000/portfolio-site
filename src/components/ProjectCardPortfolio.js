import React from "react";
import "../styles/SkillCard.css";
import { Card, Col, Text, Button, Row, Spacer } from "@nextui-org/react";
import portfolio_image from "../images/portfolio.png";

function ProjectCardPortfolio(props) {
  const { prop } = props;
  const linkToPortfolio = () => {
    console.log("Button clicked");
    window.open("https://benjaminlui.netlify.app/", "_blank", "noreferrer");
  };
  const linkToGithub = () => {
    console.log("Button clicked");
    window.open(
      "https://github.com/sniper000/portfolio-site",
      "_blank",
      "noreferrer"
    );
  };
  return (
    <Card isHoverable variant="bordered" css={{ bg: "$black", w: "100%" }}>
      <Card.Header css={{ position: "absolute", zIndex: 1, top: 35 }}>
        <Col>
          {/* <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
            A Chatroom built with React and Firebase
          </Text> */}
          <Text h4 color="white">
            {props.project_name}
          </Text>
        </Col>
      </Card.Header>
      <Card.Image
        src={portfolio_image}
        width="100%"
        height={420}
        objectFit="cover"
        alt="Card image background"
      />
      <Card.Divider />
      <Card.Footer>
        <Row justify="flex-end">
          <Button size="sm" color="gradient" onClick={linkToGithub}>
            Github
          </Button>
          <Spacer />
          <Button size="sm" color="gradient" onClick={linkToPortfolio}>
            View Project
          </Button>
        </Row>
      </Card.Footer>
    </Card>
  );
}

export default ProjectCardPortfolio;
