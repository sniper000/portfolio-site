import React from "react";
import "../styles/SkillCard.css";
import { Card, Col, Text, Button, Row } from "@nextui-org/react";
import pitchu from "../images/pitchu.png";

function ProjectCardPitchU(props) {
  const { prop } = props;
  const linkToDemo = () => {
    console.log("Button clicked");
    window.open(
      "https://www.youtube.com/watch?v=34ZqqZaFbFE&ab_channel=BenjaminLui",
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
        src={pitchu}
        width="100%"
        height={420}
        objectFit="cover"
        alt="Card image background"
      />
      <Card.Divider />
      <Card.Footer>
        <Row justify="flex-end">
          <Button size="sm" color="gradient" onClick={linkToDemo}>
            View Project
          </Button>
        </Row>
      </Card.Footer>
    </Card>
  );
}

export default ProjectCardPitchU;
