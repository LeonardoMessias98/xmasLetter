import styled from "styled-components";

import santa_bg from "../../../../assets/santa_letter.svg";

export const Modal = styled.div`
  min-width: 400px;
  min-height: 550px;
  max-width: 500px;
  max-height: 650px;

  background-image: url(${santa_bg});
  background-position: top;
  background-size: cover;
  border-radius: 20px;

  box-shadow: 0 0 20px 0px #4e4e4e;
  padding-top: 200px;

  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-family: Risque;
    font-size: 26px;
    text-align: center;
    color: #000000;
    margin-bottom: 10px;
  }

  input,
  textarea {
    border: none;
    background: #62babb;
    padding: 10px 15px;
    border-radius: 16px;
    font-weight: 600;

    width: 80%;

    margin: 10px 0;

    &,
    &::placeholder {
      color: #fff;
    }
  }

  textarea {
    min-height: 150px;
    resize: none;
  }

  button {
    background: rgb(245 30 30);
    border: none;
    border-radius: 16px;
    padding: 10px 15px;
    color: #fff;
    font-weight: 600;
    margin: 5px 0 15px 0;

    transition: 0.4s all;
  }

  button:hover {
    transition: 0.4s all;

    background: rgb(155 5 6);
  }

  @media (max-width: 600px) {
    width: 100vw;
    height: 100vh;

    max-width: unset;
    max-height: unset;

    padding-top: 40vh;
    border-radius: 0;
  }
`;
