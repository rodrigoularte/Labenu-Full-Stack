import React, { useEffect, useState } from "react"
import axios from "axios"
import { urlBase } from "../../constants/variaveis"
import Header from "../../components/Header"
import { ContainerLista, ContainerMatch, ContainerPagina, PerfilImg } from "./styles"

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
      <Header irParaHome={props.irParaHome}/>
      <ContainerLista>{listaDeMatches}</ContainerLista>
    </ContainerPagina>
  )
}

export default Matches