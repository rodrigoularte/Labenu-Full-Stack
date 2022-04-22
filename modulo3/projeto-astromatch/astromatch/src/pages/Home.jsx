import React, { useEffect, useState } from "react"
import axios from "axios"
import { urlBase } from "../constants/variaveis"
import Escolhas from "../components/Escolhas"

function Home() {

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
    <div>
      <img src={perfil.photo} alt={perfil.name} />
      <h2>{perfil.name}, {perfil.age}</h2>
      <p>{perfil.bio}</p>

      <Escolhas mostraPerfil={mostraPerfil} id={perfil.id}/>

    </div>
  )
}

  export default Home