import React from "react"

function Header(props) {

  return (
    <div>
      <button onClick={props.irParaHome}>Voltar</button>
      Astromatch
      <button onClick={props.irParaMatches}>Ver Matches</button>
    </div>
  )
}

export default Header