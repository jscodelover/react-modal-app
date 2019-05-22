import React from "react";
import { Route } from "react-router-dom";
import Home from "./home/Home";
import Modal from "./modal/Modal";

function App() {
  return (
    <>
      <Route path="/" component={Home} />
      <Route path="/image/:id" component={Modal} />
    </>
  );
}

export default App;
