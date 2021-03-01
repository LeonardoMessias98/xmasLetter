import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";

import { letters } from "./data";

import { Container, LetterModal } from "./styles";

const Letter = () => {
  const [openLetterModal, setOpenLetterModal] = useState(false);
  const [selectedLetter, setSelectedLetter] = useState(null);
  const [filteredLetters, setFilteredLetters] = useState([]);

  const handleFilterLetters = (e) => {
    const valueSearch = e.target.value.toLowerCase();

    const filteredByName = letters.filter(
      (letter) => letter?.name.toLowerCase().indexOf(valueSearch) >= 0
    );

    const filteredByTitle = letters.filter(
      (letter) => letter?.title.toLowerCase().indexOf(valueSearch) >= 0
    );

    if (filteredByTitle.length > 0) {
      setFilteredLetters(filteredByTitle);
    } else if (filteredByName.length > 0) {
      setFilteredLetters(filteredByName);
    }
  };

  const handleNavigateToMap = (address) => {
    window.open(`https://www.google.com.br/maps/search/${address}`);
  };

  const handleSelectLetter = (letter) => {
    setSelectedLetter(letter);
    setOpenLetterModal(true);
  };

  const handleCloseModal = () => {
    setOpenLetterModal(false);
  };

  return (
    <>
      {openLetterModal && (
        <LetterModal>
          <div className="content">
            <button onClick={handleCloseModal}>
              <IoMdClose />
            </button>

            <section className="letterContent">
              <h1>{selectedLetter?.title}</h1>
              <h3>Carta de {selectedLetter?.name}</h3>

              <span className="letter">{selectedLetter?.letter}</span>

              <span
                className="address"
                onClick={() => handleNavigateToMap(selectedLetter?.address)}
              >
                Endereço: {selectedLetter?.address}
              </span>
            </section>
          </div>
        </LetterModal>
      )}

      <Container>
        <section>
          <h1>Listas de cartas para o papai noel</h1>
          <input
            type="text"
            placeholder="Pesquisar..."
            onChange={handleFilterLetters}
          />
        </section>

        <ul>
          {filteredLetters.length > 0
            ? filteredLetters?.map((letter) => (
                <li key={letter?.id}>
                  <h2>{letter?.title}</h2>
                  <p>Carta de: {letter?.name}</p>
                </li>
              ))
            : letters?.map((letter) => (
                <li key={letter?.id} onClick={() => handleSelectLetter(letter)}>
                  <h2>{letter?.title}</h2>
                  <p>Carta de: {letter?.name}</p>
                </li>
              ))}
        </ul>
      </Container>
    </>
  );
};

export default Letter;
