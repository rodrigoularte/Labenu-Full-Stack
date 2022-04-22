import axios from "axios"
import React from "react"
import { urlBase } from "../constants/variaveis"


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
    <div>
      <button onClick={props.mostraPerfil}>Descartar</button>
      <button onClick={() => matchPerfil(props.id, props.mostraPerfil)}>Like</button>
    </div>
  )
}

export default Escolhas