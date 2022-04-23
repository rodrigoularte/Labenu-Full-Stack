import React, { useEffect, useState } from "react"
import axios from "axios"
import { urlBase } from "../../constants/variaveis"
import Header from "../../components/Header/Header"
import { ContainerLista, ContainerMatch, ContainerPagina, PerfilImg } from "./styles"

function Matches(props) {

  const [matches, setMatches] = useState([])
  const [remove, setRemove] = useState(false)

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

  // const mudaRemove = () => {
  //   if (matches.length === 0) {
  //     setRemove(!remove)
  //   } else {
  //     return(
  //       <div><button onClick={removeMatches}>Remover todos os matches</button></div>
  //     )
  //   }
  // }

  return(
    <ContainerPagina>
      <Header irParaHome={props.irParaHome}/>
      <ContainerLista>{listaDeMatches}</ContainerLista>

      {/* {remove ? (<div><button onClick={removeMatches}>Remover todos os matches</button></div>) :
      (<p>Nenhum Match</p>)
      } */}


    </ContainerPagina>
  )
}

export default Matches