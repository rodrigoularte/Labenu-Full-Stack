import React, { useEffect, useState } from "react"
import Header from "../../components/Header"
import axios from "axios"
import { urlBase} from "../../constants/constants"
import { useProtectedPage } from "../../components/useProtectedPage"
import { CardTripName, MainContainer, PageContainer, TripListContainer } from "./styled"
import { useNavigate } from "react-router-dom"
import { goToCreateTripPage, goToTripDetailsPage } from "../../routes/coordinator"


function AdminHomePage() {

  useProtectedPage()

  const navigate = useNavigate()

  const [trips, setTrips] = useState([])

  const getTrips = () => {
    axios
    .get(`${urlBase}/trips`)
    .then((res) => {
      setTrips(res.data.trips)
    })
    .catch((err) => {console.log(err)})
  }

  useEffect(() => {getTrips()}, [])

  const tripName = trips.map((trip) => {

    return(
      <CardTripName
        key={trip.id}
        onClick={() => goToTripDetailsPage(navigate, trip.id)}
      >
        <p>{trip.name}</p>
        <button>deletar</button>
      </CardTripName>
    )
  })

  useEffect(() => {getTrips()}, [])

  return (
    <div>
      <Header />
      <MainContainer>
        <PageContainer>
          <h1>Painel Administrativo</h1>
          <button onClick={() => goToCreateTripPage(navigate)}>Criar viagem</button>
          <div>
            <p>Viagens disponíveis</p>
            <TripListContainer>
              {tripName}
            </TripListContainer>
          </div>
        </PageContainer>
      </MainContainer>
    </div>
  )
}

export default AdminHomePage