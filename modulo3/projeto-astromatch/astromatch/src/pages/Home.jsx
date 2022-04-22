import React, { useEffect, useState } from "react"
import axios from "axios"
import { urlBase } from "../constants/variaveis"

function Home() {

  const [perfil, setPerfil] = useState({})

  const mostraPerfil = () => {
    axios
    .get(`${urlBase}/person`)
    .then((res) => {
      setPerfil(res.data.profile)
    })
    .catch(err => {console.log(err)})
  }

  useEffect(() => {mostraPerfil()}, [])

  console.log(perfil)

  return(
    <div>
      <img src={perfil.photo} alt={perfil.name} />
      <h2>{perfil.name}, {perfil.age}</h2>
      <p>{perfil.bio}</p>
      
      <button onClick={mostraPerfil}>Descartar</button>
      <button>Like</button>
    </div>
  )
}

export default Home