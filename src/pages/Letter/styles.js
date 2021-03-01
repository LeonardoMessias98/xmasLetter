import styled from "styled-components";

import app_bg from "../../assets/app_bg.svg";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;

  background-image: url(${app_bg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;
