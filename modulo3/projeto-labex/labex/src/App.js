import React from "react"
import Router from "./routes/Router"
import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

const ContainerApp = styled.div`
  max-width: 100vw;
  min-height: 100vh;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
`


function App() {
  return (
    
    <ContainerApp>
      <GlobalStyle/>
      <Router />
    </ContainerApp>
  )
}

export default App