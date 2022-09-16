import React from "react";
import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
  margin:0;
  padding:0;
  box-sizing:border-box;
  list-style:none;
}
`;

export const Wrapper = styled.div`
  font-family: sans-serif;
  text-align: center;
  background-color: #151515;
  height: 100vh;
  overflow: scroll;
`;
export const Scroll = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 50vh;
  overflow: scroll;
`;
