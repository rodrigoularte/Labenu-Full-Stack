import React, { useState } from "react"
import Header from "./components/Header"
import Home from "./pages/Home"
import Matches from "./pages/Matches"

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
        return <Home />
      case "matches":
        return <Matches />
      default:
        return <Home />
    }
  }

  return (
    <div>
      <Header irParaMatches={irParaMatches} irParaHome={irParaHome} />
      {mudaTela()}
    </div>
  )
}

export default App