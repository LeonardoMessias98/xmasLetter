import React from "react";

import ModalLetter from "./components/ModalLetter";
import SantaLogin from "./components/SantaLogin";

import { Container } from "./styles";

const Letter = () => {
  return (
    <Container>
      <ModalLetter />

      <SantaLogin />
    </Container>
  );
};

export default Letter;
