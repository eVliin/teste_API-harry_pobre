import React from "react";
import styled, { createGlobalStyles } from "styled-components";
import * as S from "./Components/Styles.js";
import Rotas from "./Components/Routes.js";

export default function App() {
  return (
    <S.Wrapper>
      <Rotas />
      <S.GlobalStyle />
    </S.Wrapper>
  );
}
