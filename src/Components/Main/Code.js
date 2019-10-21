import React, { useState } from "react";
import antlr4 from "antlr4";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, Form, Button } from "react-bootstrap";
import LoopLexer from "../../lib/LoopLexer";
import LoopParser from "../../lib/LoopParser";
import { useProjectsValue } from "../Context";
import { Route, NavLink } from "react-router-dom";

const Code = ({ handleChangeOutput, handleLoading }) => {
  const [projects, projectsDispatch] = useProjectsValue();
  const [input, setInput] = useState("");

  const runCompile = () => {
    handleLoading(true);
    const chars = new antlr4.InputStream(input);
    const lexer = new LoopLexer.LoopLexer(chars);

    const tokens = new antlr4.CommonTokenStream(lexer);

    const parser = new LoopParser.LoopParser(tokens);
    parser.buildParseTrees = true;
    const tree = parser.program();

    console.log(tree.toStringTree(parser.ruleNames));
    handleChangeOutput(tree.toStringTree(parser.ruleNames));
    setTimeout(() => {
      handleLoading(false);
    }, 1000);
  };
  const handleChangeInput = (e,id) => {
    setInput(e.target.value);
    console.log(e , id)
  };

  console.log("projects in navbar", projects);
  return (
    <div>
      <Nav variant="tabs" defaultActiveKey="/" className="mb-2">
        {projects.map(p => (
          <Nav.Item>
            <NavLink to={`/${p.name}`}>
              <Nav.Link>{p.name}</Nav.Link>
            </NavLink>
          </Nav.Item>
        ))}
      </Nav>
      {projects.map(p => (
        <Route
          path={`/${p.name}`}
          render={
            <React.Fragment>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Control
                  as="textarea"
                  rows="15"
                  value={p.value}
                  onChange={()=>handleChangeInput(p.id)}
                />
              </Form.Group>
            </React.Fragment>
          }
        />
      ))}

      <Button variant="light" size="lg" block onClick={runCompile}>
        Compile
      </Button>
    </div>
  );
};

export default Code;
