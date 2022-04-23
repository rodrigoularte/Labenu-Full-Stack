import React, { useEffect, useState } from "react"
import axios from "axios"
import { urlBase } from "../../constants/variaveis"
import Escolhas from "../../components/Escolhas/Escolhas"
import Header from "../../components/Header/Header"
import { ContainerDescricao, ContainerHome, ContainerFoto, FotoBlur, Foto, Perfil } from "./styled"

function Home(props) {

  const [perfil, setPerfil] = useState({})

  const mostraPerfil = () => {
    axios
      .get(`${urlBase}/person`)
      .then((res) => {
        setPerfil(res.data.profile)
      })
      .catch(err => { console.log(err) })
  }

  useEffect(() => { mostraPerfil() }, [])

  return (
    <ContainerHome>
      <Header irParaMatches={props.irParaMatches}/>

      <Perfil>

        <ContainerFoto>
          <FotoBlur src={perfil.photo} alt={perfil.name} />
          <Foto src={perfil.photo} alt={perfil.name} />

          <ContainerDescricao>
            <h2>{perfil.name}, {perfil.age}</h2>
            <p>{perfil.bio}</p>
          </ContainerDescricao>
        </ContainerFoto>

        <Escolhas mostraPerfil={mostraPerfil} id={perfil.id}/>
      </Perfil>

    </ContainerHome>
  )
}

  export default Home