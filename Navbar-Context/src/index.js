import React from "react";
import ReactDOM from "react-dom";

import Wrapper from "./components/Wrapper";
import NavBar from "./components/NavBar";
import FormWrapper from "./components/FormWrapper";

import "./App.css";

function App() {
  return (
    <Wrapper>
      <NavBar />
      <FormWrapper />
    </Wrapper>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);