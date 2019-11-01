import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Navbar,
  Button,
  DropdownButton,
  Nav,
  Dropdown
} from "react-bootstrap";
import { useModalValue, useThemeValue } from "./Context";
import { toggleModal, changeTheme } from "./Context/Action";

const Header = () => {
  const [modalValue, dispatchModal] = useModalValue();
  const [themeValue, dispatchTheme] = useThemeValue();

  const hanldeLightMode = () => {
    dispatchTheme(changeTheme("light"));
  };
  const handleDarkMode = () => {
    dispatchTheme(changeTheme("dark"));
  };

  const handleCreateModal = () => {
    dispatchModal(toggleModal("create"));
  };
  return (
    <div>
      <Navbar bg={themeValue} className="mb-3">
        <Navbar.Brand
          style={{
            color: themeValue === "light" ? "black" : "white"
          }}
        >
          LULU Compiler
        </Navbar.Brand>
        <Nav className="ml-auto">
          <DropdownButton
            variant={
              themeValue === "light"
                ? "outline-dark"
                : "outline-light"
            }
            className="mr-sm-3"
            title="Theme"
          >
            <Dropdown.Item eventKey="1" onClick={handleDarkMode}>
              Dark
            </Dropdown.Item>
            <Dropdown.Item eventKey="2" onClick={hanldeLightMode}>
              Light
            </Dropdown.Item>
          </DropdownButton>
          <Button
            variant={
              themeValue === "light"
                ? "outline-dark"
                : "outline-light"
            }
            className="mr-sm-2"
            onClick={handleCreateModal}
            text={themeValue === "light" ? "black" : "white"}
          >
            Create New
            <i className="fas fa-folder-plus ml-sm-3"></i>
          </Button>
        </Nav>
      </Navbar>
    </div>
  );
};

export default Header;
