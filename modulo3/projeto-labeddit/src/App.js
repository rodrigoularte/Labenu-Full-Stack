import React from "react"
import Router from "./routes/Router"
import { AppContainer, GlobalStyle } from "./styled"

const App = () => {
  return (
    <AppContainer>
      <GlobalStyle/>
      <Router/>
    </AppContainer>
  )
}

export default App