import React from "react";
import { Col, Image } from "react-bootstrap";

const HomeImage = ({ url }) => {
  return (
    <Col sm={7}>
      <Image src={url} fluid rounded width={900} height={400} />
    </Col>
  );
};

export default HomeImage;
