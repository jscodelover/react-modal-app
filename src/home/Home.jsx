import React from "react";
import { Link, Route } from "react-router-dom";
import Modal from "../modal/Modal";
import { StyledHome, Image, Container } from "./home.styled";

function Home() {
  return (
    <Container>
      <h1>Click the Image !!</h1>
      <StyledHome>
        <Link to="/image1">
          <Image image="image1" />
        </Link>
        <Link to="/image2">
          <Image image="image2" />
        </Link>
        <Link to="/image3">
          <Image image="image3" />
        </Link>
        <Link to="/image4">
          <Image image="image4" />
        </Link>
      </StyledHome>
      <Route path="/:id" component={Modal} />
    </Container>
  );
}

export default Home;
