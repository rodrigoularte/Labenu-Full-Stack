import React, { useEffect, useState } from "react"
import axios from "axios"
import { urlBase } from "../../constants/variaveis"
import Escolhas from "../../components/Escolhas/Escolhas"
import Header from "../../components/Header/Header"
import { ContainerDescricao, ContainerHome, ContainerFoto, FotoBlur, Foto, Perfil, Descricao, NomeIdade } from "./styled"

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

      <Header irParaMatches={props.irParaMatches} telaAtual={props.telaAtual}/>

      <Perfil>

        <ContainerFoto>
          <FotoBlur src={perfil.photo} alt={perfil.name} />
          <Foto src={perfil.photo} alt={perfil.name} />

          <ContainerDescricao>
            <NomeIdade>
              <h2>{perfil.name},</h2>
              <h3>{perfil.age}</h3>
            </NomeIdade>
            <Descricao>{perfil.bio}</Descricao>
          </ContainerDescricao>
        </ContainerFoto>

        <Escolhas mostraPerfil={mostraPerfil} id={perfil.id}/>
      </Perfil>

    </ContainerHome>
  )
}

  export default Home