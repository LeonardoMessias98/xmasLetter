import styled from "styled-components";

import letters_bg from "../../assets/letters_bg.jpg";
import santa_letter from "../../assets/santa_letter.svg";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;

  height: 100vh;
  width: 100vw;

  background-image: url(${letters_bg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  ul {
    list-style: none;
    width: 100%;
    height: 100%;

    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    overflow-y: scroll;

    li {
      display: flex;
      flex-direction: column;
      justify-content: center;
      min-width: 305px;
      max-width: 305px;
      min-height: 125px;
      max-height: 125px;
      padding: 20px;
      margin: 20px;

      border-radius: 20px;

      font-size: 20px;
      font-weight: 500;

      background: #fff;
      cursor: pointer;

      h2 {
        font-size: 16px;
        font-weight: 600;
      }

      p {
        font-size: 16px;
        color: #565656;

        margin: 0;
      }
    }
  }

  h1 {
    font-family: Risque;
    font-size: 36px;
    text-align: center;
    color: #fff;
  }

  section {
    height: 25%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 40px;

    input {
      border: none;
      border-radius: 20px;
      height: 35px;
      font-size: 18px;
      padding: 10px 15px;
    }
  }
`;

export const LetterModal = styled.div`
  position: absolute;

  div.content {
    width: 100vw;
    height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    background: url(${santa_letter});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    padding: 40px 15px;

    button {
      position: relative;
      top: -60px;
      left: 155px;

      background: none;
      border: none;

      svg {
        font-size: 26px;
      }
    }

    section.letterContent {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .address {
        cursor: pointer;
        font-size: 16px;
        color: #505050;
        text-align: center;
      }

      h1 {
        font-size: 22px;
        font-weight: 600;
      }

      .letter {
        font-size: 18px;
        padding: 0 20px;
        text-align: center;
        margin: 30px 0;
        height: max-content;
        max-height: 200px;
        min-height: 125px;

        overflow-y: scroll;

        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }

  @media (min-width: 700px) {
    display: flex;
    width: 100vw;
    height: 100vh;
    justify-content: center;
    align-items: center;
    background: #ffffff45;
    backdrop-filter: blur(6px);

    div.content {
      width: 400px;
      height: 600px;

      border-radius: 20px;

      section.letterContent .letter {
        height: 140px;
      }
    }
  }
`;
