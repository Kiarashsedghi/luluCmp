import React, { useState} from "react";
import { useModalValue, useProjectsValue } from "./Context";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Row } from "react-bootstrap";
import { toggleModal, addProject } from "./Context/Action";
import uuid from 'uuid'

const ModalContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(33, 33, 33, 0.6);
  position: fixed;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ModalContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ModalTimes = styled.i.attrs(props => {
  return {
    className: "fas fa-times"
  };
})`
  font-size: 30px;
  color: #d8d8d8;
  transition: 0.1s all;
  &:hover {
    color: white;
    transform: scale(1.6);
    cursor: pointer;
  }
  margin-bottom: 30px;
`;

const ModalInput = styled.input`
  display: block;
  width: 100%;
  height: 50px;
  border: none;
  color: white;
  padding: 40px 100px;
  background: rgb(33, 33, 33, 0.7);
  font-size: 2rem;
  :focus {
    outline: none;
  }
  ::placeholder {
    color: #535353;
    font-size: 2rem;
    font-weight:700;
    letter-spacing: 1.1px;     
  }
`;

const CreateModal = () => {
  const [input, setInput] = useState("");
  const [modalValue, modalDispatch] = useModalValue();
  const [projects,projectsDispatch] = useProjectsValue();

  const handleToggleModal = () => {
    modalDispatch(toggleModal("create"));
  };
  const handleAddProject = () => {
    projectsDispatch(addProject({name : input , value :'' ,id:uuid.v4()}))
    modalDispatch(toggleModal('create'));
    setInput('')

  };
  const handleChangeInput = e => {
    setInput(e.target.value);
  };
  return (
    <div>
      {modalValue.create ? (
        <ModalContainer>
          <ModalContent>
            <ModalTimes onClick={handleToggleModal} />
            <ModalInput
              placeholder="Enter Project Name ..."
              value={input}
              onChange={handleChangeInput}
            />
            <Row className="mt-5">
              <Button
                variant="outline-light"
                className="mr-3 py-2 px-5"
                onClick={handleAddProject}
              >
                Create
              </Button>
              <Button
                variant="outline-dark"
                className="ml-3 py-2 px-5"
                onClick={handleToggleModal}
              >
                Close
              </Button>
            </Row>
          </ModalContent>
        </ModalContainer>
      ) : (
        <></>
      )}
    </div>
  );
};

export default CreateModal;
