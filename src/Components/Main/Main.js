import React, { useState } from "react";
import CreateModal from "../CreateModal";
import { Container, Row,Col ,Spinner } from "react-bootstrap"
import Code from './Code';
import Result from './Result'


const Main= () => {

const [isLoading, setIsLoading] = useState(false);
  const [output, setOutput] = useState("");

  const handleChangeOutput = output => {
    setOutput(output);
  };

  const handleLoading = loadState => {
    setIsLoading(loadState);
  };
  return (
    <div>
      <CreateModal />

      <Container>
        <Row>
          <Col>
            <Code
              handleChangeOutput={handleChangeOutput}
              handleLoading={handleLoading}
            />
          </Col>
          {isLoading ? (
            <Col
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <Spinner
                animation="grow"
                style={{ width: "200px", height: "200px" }}
              />
            </Col>
          ) : (
            <Col>
              <Result output={output} />
            </Col>
          )}
        </Row>
      </Container>
    </div>
  );
};

export default Main;