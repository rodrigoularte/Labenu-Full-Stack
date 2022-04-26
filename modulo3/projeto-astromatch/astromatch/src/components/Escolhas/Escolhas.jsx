import axios from "axios"
import React from "react"
import { urlBase } from "../../constants/variaveis"
import {BsFillHeartFill} from "react-icons/bs"
import {ImCross} from "react-icons/im"
import {ContainerBotoes, BotaoMatch, BotaoRejeitar} from "./styled"


function Escolhas(props) {
  
  const matchPerfil = (id, mostraPerfil) => {
    const body = {id: id, choice: true}
    axios
    .post(`${urlBase}/choose-person`, body)
    .then(mostraPerfil)
    .catch(err => {console.log(err)})
  }

  return(
    <ContainerBotoes>
      <BotaoRejeitar onClick={props.mostraPerfil}><ImCross/></BotaoRejeitar>
      <BotaoMatch onClick={() => matchPerfil(props.id, props.mostraPerfil)}><BsFillHeartFill/></BotaoMatch>
    </ContainerBotoes>
  )
}

export default Escolhas