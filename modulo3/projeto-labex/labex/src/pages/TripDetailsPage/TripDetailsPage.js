import axios from "axios"
import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Header from "../../components/Header/Header"
import { useProtectedPage } from "../../components/useProtectedPage"
import { urlBase } from "../../constants/constants"
import { ContentContainer, MainContainer } from "../../styled/PageStyled"
import { PendingCandidates } from "./styled"

const TripDetailsPage = () => {

  useProtectedPage()

  //estado
  const [trip, setTrip] = useState({})
  const [candidates, setCandidates] = useState([])
  const [approved, setApproved] = useState([])

  const pathParams = useParams()

  //API
  const getTripDetail = async () => {
    const token = localStorage.getItem("token")
    const headers = { headers: { auth: token } }

    try {
      const res = await axios.get(`${urlBase}/trip/${pathParams.id}`, headers)
        setTrip(res.data.trip)
        setCandidates(res.data.trip.candidates)
        setApproved(res.data.trip.approved)
    } catch(err) {
      console.log(err)
    }
  }

  useEffect(() => {getTripDetail()}, [])

  const decideCandidate = (tripId, candidateId, decide) => {

    const token = localStorage.getItem("token")
    const headers = { headers: { auth: token } }
    const body = { approve: decide }

    axios
      .put(`${urlBase}/trips/${tripId}/candidates/${candidateId}/decide`, body, headers)
      .then((res) => {
        if(body.approve === true) {
          alert("Inscrição aprovada com sucesso")
          getTripDetail()
        } else if (body.approve === false) {
          alert("Inscrição rejeitada com sucesso")
          getTripDetail()
        }
        
      })
      .catch((err) => {alert(`ERRO! ${err.response.data.message}`)})

  }

  //candidatos
  const candidatesList = candidates.map((candidate) => {
    return (
      <PendingCandidates key={candidate.id}>

        <div>
          <p>Nome: {candidate.name}</p>
          <p>Profissão: {candidate.profession}</p>
          <p>Idade: {candidate.age}</p>
          <p>País: {candidate.country}</p>
          <p>Texto de candidatura: {candidate.applicationText}</p>
        </div>

        <div>
          <button onClick={() => decideCandidate(trip.id, candidate.id, false)}>Reprovar</button>
          <button onClick={() => decideCandidate(trip.id, candidate.id, true)}>Aprovar</button>
        </div>

      </PendingCandidates>
    )
  })

  //aprovados
  const approvedCandidate = approved.map((candidate) => {
    return(
      <li>{candidate.name}</li>
    )
  })

  return (
    <div>
      <Header />
      <MainContainer>
        <ContentContainer>
          <h1>{trip.name}</h1>
          
          <div>
            <p>{trip.description}</p>
            <p>Planeta: {trip.planet}</p>
            <p>Duração: {trip.durationInDays} dias</p>
            <p>Partida: {trip.date}</p>
          </div>

          <div>
            <h2>Candidatos pendentes</h2>
            <div>
              {(candidates.length > 0) ? candidatesList : "Sem candidatos pendentes"}
            </div>
          </div>

          <div>
            <h2>Candidatos aprovados</h2>
            <ul>
              {(approved.length > 0) ? approvedCandidate : "Sem candidatos aprovados"}
            </ul>
          </div>
        </ContentContainer>
      </MainContainer>
    </div>
  )
}

export default TripDetailsPage