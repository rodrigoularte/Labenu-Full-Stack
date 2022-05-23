import React from "react"
import GlobalState from "./global/GlobalState"
import Router from "./routes/Router"
import { AppContainer, GlobalStyle } from "./styled"

const App = () => {
  return (
    <GlobalState>
      <AppContainer>
        <GlobalStyle/>
        <Router/>
      </AppContainer>
    </GlobalState>
  )
}

export default App