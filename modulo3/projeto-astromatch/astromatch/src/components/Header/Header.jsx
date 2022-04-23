import React from "react"
import {ContainerHeader, Matches, Titulo1, Titulo2, Voltar} from "./styled"
import {BsArrow90DegLeft} from "react-icons/bs"
import {RiUserHeartFill} from "react-icons/ri"


function Header(props) {

  return (
    <ContainerHeader>
      <Voltar onClick={props.irParaHome}><BsArrow90DegLeft/></Voltar>
      <h1>
        <Titulo1>astro</Titulo1><Titulo2>match</Titulo2>
      </h1>
      <Matches onClick={props.irParaMatches}><RiUserHeartFill/></Matches>
    </ContainerHeader>
  )
}

export default Header