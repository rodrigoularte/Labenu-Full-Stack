import axios from "axios"
import React, { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import Header from "../components/Header"
import { useProtectedPage } from "../components/useProtectedPage"
import { urlBase } from "../constants/constants"
import { goToAdminHomePage, goToLoginPage } from "../routes/coordinator"

function TripDetailsPage() {

  useProtectedPage()

  const pathParams = useParams()

  //estado
  const [trip, setTrip] = useState({})

  // const navigate = useNavigate()

  const getTripDetail = () => {
    const token = localStorage.getItem("token")

    const headers = { headers: { auth: token } }

    axios
      .get(`${urlBase}/trip/${pathParams.id}`, headers)
      .then((res) => {
        console.log(res.data.trip)
        setTrip(res.data.trip)
      })
      .catch((err) => { console.log(err) })
  }

  useEffect(() => { getTripDetail() }, [])

  //candidatos
  const listaDeCandidatos = trip.candidates.map((candidate) => {
    return (
      <div>
        <div>
          <p>Nome: {candidate.name}</p>
          <p>Profissão: {candidate.profession}</p>
          <p>Idade: {candidate.age}</p>
          <p>País: {candidate.country}</p>
          <p>Texto de candidatura: {candidate.applicationText}</p>
        </div>

        <div>
          <button>Reprovar</button>
          <button>Aprovar</button>
        </div>

      </div>
    )
  })

  return (
    <div>
      <Header />
      <h1>{trip.name}</h1>
      <p>{trip.description}</p>
      <p>Planeta: {trip.planet}</p>
      <p>Duração: {trip.durationInDays} dias</p>
      <p>Partida: {trip.date}</p>
      <p>Id: {pathParams.id}</p>

      <div>
        <h2>Candidatos pendentes</h2>
        <div>
          {listaDeCandidatos}
        </div>
      </div>

      <div>
        <h2>Candidatos aprovados</h2>
        <div>
          
        </div>
      </div>
    </div>
  )
}

export default TripDetailsPage