import axios from "axios"
import React, { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import Header from "../../components/Header/Header"
import { useProtectedPage } from "../../components/useProtectedPage"
import { urlBase } from "../../constants/constants"
import { goBack } from "../../routes/coordinator"
import { Button3 } from "../../styled/Button"
import { ContentContainer, MainContainer } from "../../styled/PageStyled"
import { ApproveButton, ApprovedCandidates, ButtonContainer, Candidates, Description, PendingCandidates, RejectButton, Title, TripInfo } from "./styled"

const TripDetailsPage = () => {
  const navigate = useNavigate()
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
          <p><strong>Nome:</strong> {candidate.name}</p>
          <p><strong>Profissão:</strong> {candidate.profession}</p>
          <p><strong>Idade:</strong> {candidate.age}</p>
          <p><strong>País:</strong> {candidate.country}</p>
          <p><strong>Texto de candidatura:</strong> {candidate.applicationText}</p>
        </div>

        <ButtonContainer>
          <RejectButton onClick={() => decideCandidate(trip.id, candidate.id, false)}>Reprovar</RejectButton>
          <ApproveButton onClick={() => decideCandidate(trip.id, candidate.id, true)}>Aprovar</ApproveButton>
        </ButtonContainer>

      </PendingCandidates>
    )
  })

  //aprovados
  const approvedCandidate = approved.map((candidate) => {
    return(
      <li>{candidate.name}</li>
    )
  })

  //data
  // const date = `${trip.date.slice(8, 10)}/${trip.date.slice(5, 7)}/${trip.date.slice(0, 4)}`
  // const date = `${trip.date.slice(8, 10)}`
  // console.log(date)

  return (
    <div>
      <Header />
      <MainContainer>
        <ContentContainer>
          <TripInfo>
            <Title>{trip.name}</Title>
            
            <Description>{trip.description}</Description>
            <div>
              <p><strong>Planeta:</strong> {trip.planet}</p>
              <p><strong>Duração:</strong> {trip.durationInDays} dias</p>
              {/* <p><strong>Partida:</strong> {date}</p> */}
              <p><strong>Partida:</strong> {trip.date}</p>
            </div>
          </TripInfo>

          <Button3 onClick={() => goBack(navigate)}>Voltar</Button3>

          <Candidates>
            <h2>Candidatos pendentes</h2>
            {(candidates.length > 0) ?
            candidatesList :
            <PendingCandidates>
              Sem candidatos pendentes
            </PendingCandidates>}
          </Candidates>

          <Candidates>
            <h2>Candidatos aprovados</h2>
            <ApprovedCandidates>
              {(approved.length > 0) ? approvedCandidate : "Sem candidatos aprovados"}
            </ApprovedCandidates>
          </Candidates>
        </ContentContainer>
      </MainContainer>
    </div>
  )
}

export default TripDetailsPage