import React from "react"
import {useNavigate} from "react-router-dom"
import Header from "../components/Header"
import {goToListTripsPage} from "../routes/coordinator"

function HomePage() {

  const navigate = useNavigate()

  return (
    <div>
      <Header />
      <div> <img></img> </div>
      <div>
        <h2>Encontre as melhores viagens espaciais!</h2>
        <button onClick={() => goToListTripsPage(navigate)}>Encontre o destino ideal</button>
      </div>
    </div>
  )
}

export default HomePage