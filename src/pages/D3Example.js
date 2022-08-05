import React, { useRef, useEffect, useState } from "react";
import * as d3 from "d3";
import Container from "react-bootstrap/Container";

// Ref: https://wattenberger.com/blog/react-and-d3

const getNumber = () => {
  return Math.floor(Math.random() * 50);
};

const generateDataset = () => {
  return [
    [getNumber(), getNumber()],
    [getNumber(), getNumber()],
    [getNumber(), getNumber()],
    [getNumber(), getNumber()],
    [getNumber(), getNumber()],
  ];
};

const D3Example = () => {
  const [dataset, setDataset] = useState(generateDataset());
  const ref = useRef();
  useEffect(() => {
    const svgElement = d3.select(ref.current);
    svgElement
      .selectAll("circle")
      .data(dataset)
      .join("circle")
      .attr("cx", (d) => d[0])
      .attr("cy", (d) => d[1])
      .attr("r", 3);
  }, [dataset]);

  setTimeout(() => {
    setDataset(generateDataset());
  }, 1000);

  return <svg ref={ref} />;
};

export default D3Example;
