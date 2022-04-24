import React, { useEffect, useState } from "react"
import axios from "axios"
import { urlBase } from "../../constants/variaveis"
import Header from "../../components/Header/Header"
import { BotaoRemover, ContainerLista, ContainerMatch, ContainerPagina, PerfilImg, ContainerBotao } from "./styled"
import {ImHeartBroken} from "react-icons/im"

function Matches(props) {

  const [matches, setMatches] = useState([])

  const mostraMatches = () => {
    axios
    .get(`${urlBase}/matches`)
    .then((res) => {
      setMatches(res.data.matches)
    })
    .catch(err => { console.log(err) })
  }

  const removeMatches = () => {
    axios
    .put(`${urlBase}/clear`)
    .then(mostraMatches)
    .catch(err => { console.log(err) })
  }

  useEffect(() => {mostraMatches()},[])

  const listaDeMatches = matches.map((match) => {
    return(
      <ContainerMatch>
        <PerfilImg src={match.photo} alt="" />
        <h2>{match.name}</h2>
      </ContainerMatch>
    )
  })


  return(
    <ContainerPagina>

      <Header irParaHome={props.irParaHome} telaAtual={props.telaAtual}/>

      <ContainerLista>{listaDeMatches}</ContainerLista>

      <ContainerBotao>
        <BotaoRemover onClick={removeMatches}>
          Remover todos os matches  <ImHeartBroken/>
        </BotaoRemover>
      </ContainerBotao>

    </ContainerPagina>
  )
}

export default Matches