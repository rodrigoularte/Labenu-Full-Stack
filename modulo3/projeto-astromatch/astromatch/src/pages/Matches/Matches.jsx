import React, { useEffect, useState } from "react"
import axios from "axios"
import { urlBase } from "../../constants/variaveis"
import Header from "../../components/Header"
import { PerfilImg } from "./styles"

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
      <div>
        <PerfilImg src={match.photo} alt="" />
        <p>{match.name}</p>
      </div>
    )
  })

  return(
    <div>
      <Header irParaHome={props.irParaHome}/>
      Matches
      {listaDeMatches}
    </div>
  )
}

export default Matches