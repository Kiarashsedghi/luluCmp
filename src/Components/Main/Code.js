import React, { useState } from "react";
import antlr4 from "antlr4";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, Form, Button } from "react-bootstrap";
import LuluLexer from "../../lib/LuluLexer";
import LuluParser from "../../lib/LuluParser";
import { useProjectsValue, useThemeValue } from "../Context";
import { Route, NavLink ,withRouter} from "react-router-dom";
import { onChangeTextArea, removeProject } from "../Context/Action";
import styled from "styled-components";

const Times = styled.i.attrs(props => ({className: "fas fa-times"}))`
  color : #b7b7b7;
  &:hover {
    color : red ;
  }
`;

const Code = ({ handleChangeOutput, handleLoading ,...props}) => {
  const [projects, projectsDispatch] = useProjectsValue();
  const [themeValue,] = useThemeValue()

  const runCompile = value => {
    handleLoading(true);
    const chars = new antlr4.InputStream(value);
    const lexer = new LuluLexer.LuluLexer(chars);

    const tokens = new antlr4.CommonTokenStream(lexer);

    const parser = new LuluParser.LuluParser(tokens);
    parser.buildParseTrees = true;
    const tree = parser.program();

    console.log(tree.toStringTree(parser.ruleNames));
    handleChangeOutput(tree.toStringTree(parser.ruleNames));
    setTimeout(() => {
      handleLoading(false);
    }, 1000);
  };
  const handleChangeInput = (id, e) => {
    console.log(e);
    projectsDispatch(onChangeTextArea(e.target.value, id));
  };
  const handleRemoveProject = (id ,e) =>{
    e.preventDefault()
    e.stopPropagation();
    projectsDispatch(removeProject(id))
    props.history.push('/');
  }

  return (
    <div>
      <Nav variant="tabs" defaultActiveKey="/" className="mb-2">
        {projects.map(p => (
          <Nav.Item>
            <Nav.Link as={NavLink} to={`/${p.name}`}>
              {p.name} <Times className='ml-2' onClick={(e)=>handleRemoveProject(p.id,e)}/>
            </Nav.Link>
          </Nav.Item>
        ))}
      </Nav>
      {projects.map(p => (
        <Route
          path={`/${p.name}`}
          render={() => (
            <React.Fragment>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Control
                  as="textarea"
                  rows="15"
                  value={p.value}
                  onChange={e => handleChangeInput(p.id, e)}
                />
              </Form.Group>
              <Button
                variant={themeValue}
                text={themeValue ==='light' ?'black' :'white'}
                size="lg"
                block
                onClick={() => runCompile(p.value)}
              >
                Compile
              </Button>
            </React.Fragment>
          )}
        />
      ))}
    </div>
  );
};

export default withRouter(Code);
