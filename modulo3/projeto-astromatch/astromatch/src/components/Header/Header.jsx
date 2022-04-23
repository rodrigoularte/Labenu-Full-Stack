import React from "react"
import {ContainerHeader, Titulo1, Titulo2} from "./styled"


function Header(props) {

  return (
    <ContainerHeader>
      <button onClick={props.irParaHome}>Voltar</button>
      <h1>
        <Titulo1>Astro</Titulo1><Titulo2>match</Titulo2>
      </h1>
      <button onClick={props.irParaMatches}>Ver Matches</button>
    </ContainerHeader>
  )
}

export default Header