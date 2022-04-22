import React from "react"
import styled from "styled-components"

const ContainerHeader = styled.div`
  display: flex;
  height: 50px;
  align-items: center;
  justify-content: space-between;
  border: 1px solid black;
`

function Header(props) {

  return (
    <ContainerHeader>
      <button onClick={props.irParaHome}>Voltar</button>
      Astromatch
      <button onClick={props.irParaMatches}>Ver Matches</button>
    </ContainerHeader>
  )
}

export default Header