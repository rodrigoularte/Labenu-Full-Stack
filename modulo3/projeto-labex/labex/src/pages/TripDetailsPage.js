import axios from "axios"
import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Header from "../components/Header"
import { useProtectedPage } from "../components/useProtectedPage"
import { urlBase } from "../constants/constants"

const TripDetailsPage = () => {

  useProtectedPage()

  //estado
  const [trip, setTrip] = useState({})
  const [candidates, setCandidates] = useState([])

  const pathParams = useParams()

  console.log(trip)

  //API
  const getTripDetail = async () => {
    const token = localStorage.getItem("token")
    const headers = { headers: { auth: token } }

    try {
      const res = await axios.get(`${urlBase}/trip/${pathParams.id}`, headers)
        setTrip(res.data.trip)
        setCandidates(res.data.trip.candidates)
    } catch(err) {
      console.log(err)
    }
  }

  useEffect(() => {getTripDetail()}, [])

  //candidatos
  const listaDeCandidatos = candidates.map((candidate) => {
    return (
      <div key={candidate.id}>

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

      <div>
        <h2>Candidatos pendentes</h2>
        <div>
          {/* {(trip.candidates.length > 0) ? listaDeCandidatos : "Sem candidatos pendentes"} */}
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