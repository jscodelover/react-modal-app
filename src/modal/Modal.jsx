import React from "react";
import { Image } from "../home/home.styled";
import { StyledModal, BackDrop } from "./modal.styled";

function Modal(props) {
  function close() {
    props.history.goBack();
  }
  return (
    <>
      <BackDrop onClick={close} />
      <StyledModal>
        <Image image={`${props.match.params.id}`} width="100%" height="100%" />
      </StyledModal>
    </>
  );
}

export default Modal;
