import styled from "styled-components"
import { createGlobalStyle } from "styled-components"

//Styled App

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

export const AppContainer = styled.div`
  max-width: 100vw;
  min-height: 100vh
`