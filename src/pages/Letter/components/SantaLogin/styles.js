import styled from "styled-components";

export const Login = styled.div`
  background: white;
  position: absolute;
  top: 10%;
  right: 5%;
  padding: 20px;
  border-radius: 20px;
  height: max-content;
  width: 250px;

  transition: 0.4s all;

  h1 {
    font-family: Risque;
    font-size: 16px;
    text-align: center;
    color: #000000;

    cursor: pointer;
  }

  input {
    width: 100%;
    border: none;
    background: #9b0506;
    padding: 10px 15px;
    border-radius: 16px;
    margin: 10px 0;

    &,
    &::placeholder {
      color: #fff;
    }
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
    top: 5%;
  }
`;
