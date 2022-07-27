import React from "react"
import GlobalState from "./global/GlobalState"
import Router from "./routes/Router"
import { ContainerApp, GlobalStyle } from "./styled/GlobalStyle"

function App() {
  return (
    <GlobalState>
      <ContainerApp>
        <GlobalStyle/>
        <Router/>
      </ContainerApp>
    </GlobalState>
    )
}

export default App