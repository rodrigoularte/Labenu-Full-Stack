import React, { useEffect, useState } from "react"
import axios from "axios"
import { urlBase } from "../constants/variaveis"

function Matches() {

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
        <img src="" alt="" />
        <p>{match.name}</p>
      </div>
    )
  })

  return(
    <div>
      Matches
      {listaDeMatches}
    </div>
  )
}

export default Matches