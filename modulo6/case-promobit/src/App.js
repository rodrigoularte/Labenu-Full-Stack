import React from "react"
import Router from "./routes/Router"
import { ContainerApp, GlobalStyle } from "./styled/GlobalStyle"

function App() {
  return (
    <ContainerApp>
      <GlobalStyle/>
      <Router/>
    </ContainerApp>
  )
}

export default App