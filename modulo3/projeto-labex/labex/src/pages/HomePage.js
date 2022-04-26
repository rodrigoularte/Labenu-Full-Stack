import React from "react"
import {useNavigate} from "react-router-dom"

function HomePage() {
  const navigate = useNavigate()

  return (
    <div>
      <div> <img></img> </div>
      <div>
        <h2>Encontre as melhores viagens espaciais!</h2>
        <button>Encontre o destino ideal</button>
      </div>
    </div>
  )
}

export default HomePage