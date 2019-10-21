import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Button } from "react-bootstrap";
import { useModalValue } from "./Context";
import { toggleModal } from "./Context/Action";

const Header = () => {

  
  const [modalValue, dispatchModal] = useModalValue();
  const handleCreateModal = () => {
    dispatchModal(toggleModal("create"));

  };
  console.log(modalValue);
  return (
    <div>
      <Navbar bg="light" className="mb-3">
        <Navbar.Brand href="#home">LULU Compiler</Navbar.Brand>
        <Button
          variant="outline-dark"
          className="ml-auto mr-sm-2 px-5"
          onClick ={handleCreateModal}
        >
          Create New
          <i
            className="fas fa-folder-plus ml-sm-3"
          ></i>
        </Button>
      </Navbar>
    </div>
  );
};

export default Header;
