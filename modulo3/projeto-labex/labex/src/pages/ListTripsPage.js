import React from "react"
import { useNavigate } from "react-router"
import Header from "../components/Header"
import {goToApplicationFormPage} from "../routes/coordinator"

function ListTripsPage() {

  const navigate = useNavigate()

  return (
    <div>
      <Header />
      <button onClick={() => goToApplicationFormPage(navigate)}>Quero me inscrever</button>
      <h2>As melhores viagens!</h2>
    </div>
  )
}

export default ListTripsPage