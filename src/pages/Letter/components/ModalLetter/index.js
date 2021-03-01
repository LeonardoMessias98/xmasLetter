import React from "react";
import { message } from "antd";

import { Modal } from "./styles";

const ModalLetter = () => {
  const handleSendLetter = () => {
    message.success("Cartinha enviada com successo");
  };

  return (
    <Modal>
      <h1>Carta para o Papai Noel</h1>

      <input placeholder="Escreva seu nome" />
      <input placeholder="Escreva seu endereço" />

      <textarea placeholder="Escreva sua cartinha" />

      <button onClick={handleSendLetter}>Enviar carta</button>
    </Modal>
  );
};

export default ModalLetter;
