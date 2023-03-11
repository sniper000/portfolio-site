import React from "react";
import Card from "react-bootstrap/Card";
import "../styles/SkillCard.css";

function SkillsCard(props) {
  const { prop } = props;
  return (
    <div className="photo">
      <Card style={{ width: "30vh" }}>
        <Card.Img variant="top" src={prop} />
      </Card>
    </div>
  );
}

export default SkillsCard;
