import axios from "axios"
import React from "react"
import { urlBase } from "../constants/variaveis"
import styled from "styled-components"

const ContainerBotoes = styled.div`
  display: flex;
  height: 100px;
  align-items: center;
  justify-content: space-around;
  border: 1px solid black;
`


function Escolhas(props) {
  
  const matchPerfil = (id, mostraPerfil) => {
    console.log("clicou")
    const body = {id: id, choice: true}
    axios
    .post(`${urlBase}/choose-person`, body)
    .then(mostraPerfil)
    .catch(err => {console.log(err)})
  }

  return(
    <ContainerBotoes>
      <button onClick={props.mostraPerfil}>Descartar</button>
      <button onClick={() => matchPerfil(props.id, props.mostraPerfil)}>Like</button>
    </ContainerBotoes>
  )
}

export default Escolhas