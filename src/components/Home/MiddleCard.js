import React from "react";
import { Card } from "react-bootstrap";

const MiddleCard = ({ text, setPageType }) => {
  return (
    <Card
      className="text-center bg-secondary text-white my-5 py-4"
      onClick={() => {
        setPageType("home");
      }}
    >
      <Card.Body>{text}</Card.Body>
    </Card>
  );
};

export default MiddleCard;
