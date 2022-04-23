import React, { useState } from "react"
// import Header from "./components/Header"
import Home from "./pages/Home/Home"
import Matches from "./pages/Matches/Matches"
import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

const ContainerApp = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100vw;
  min-height: 100vh;
  background-color: #517373;
  align-items: center;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
`

function App() {

  const [telaAtual, setTelaAtual] = useState("home")

  const irParaMatches = () => {
    setTelaAtual("matches")
  }

  const irParaHome = () => {
    setTelaAtual("home")
  }

  const mudaTela = () => {
    switch (telaAtual) {
      case "home":
        return <Home irParaMatches={irParaMatches}/>
      case "matches":
        return <Matches irParaHome={irParaHome}/>
      default:
        return <Home irParaMatches={irParaMatches}/>
    }
  }

  return (
    <ContainerApp>
      <GlobalStyle/>
      {/* <Header irParaMatches={irParaMatches} irParaHome={irParaHome} /> */}
      {mudaTela()}
    </ContainerApp>
  )
}

export default App