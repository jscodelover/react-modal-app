import React from "react";
import { Link } from "react-router-dom";
import { StyledHome, Image, Container } from "./home.styled";
import Modal from "../modal/Modal";

function Home() {
  return (
    <Container>
      <h1>Click the Image !!</h1>
      <StyledHome>
        <Link to="/image/image1">
          <Image image="image1.jpg" />
        </Link>
        <Link to="/image/image2">
          <Image image="image2.jpeg" />
        </Link>
        <Link to="/image/image3">
          <Image image="image3.jpg" />
        </Link>
        <Link to="/image/image4">
          <Image image="image4.png" />
        </Link>
      </StyledHome>
    </Container>
  );
}

export default Home;
