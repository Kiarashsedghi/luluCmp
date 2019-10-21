import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";
const Result = ({output}) => {
  return (
    <div>
      <Card>
        <Card.Header>Result</Card.Header>
        <Card.Body>
          <Card.Text>{output}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Result;
