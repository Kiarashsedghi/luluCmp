import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";
import { useThemeValue } from "../Context";
const Result = ({output}) => {
  const [themeValue , ] = useThemeValue()
  return (
    <div>
      <Card bg={themeValue} text={themeValue==='dark' ? 'white' :'black'}>
        <Card.Header >Result</Card.Header>
        <Card.Body>
          <Card.Text>{output}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Result;
