import React, { useEffect, useState } from "react"
import axios from "axios"
import Header from "../../components/Header/Header"
import { urlBase } from "../../constants/constants"
import { useProtectedPage } from "../../components/useProtectedPage"
import { CardTripName, DeleteButton, LogoutButton, Title, TripListContainer } from "./styled"
import { useNavigate } from "react-router-dom"
import { goToCreateTripPage, goToLoginPage, goToTripDetailsPage } from "../../routes/coordinator"
import { ContentContainer, Loading, MainContainer } from "../../styled/PageStyled"
import { Button4 } from "../../styled/Button"
import { VscTrash } from "react-icons/vsc"


function AdminHomePage() {

  useProtectedPage()

  const navigate = useNavigate()

  //estados
  const [trips, setTrips] = useState([])

  const getTrips = () => {
    axios
      .get(`${urlBase}/trips`)
      .then((res) => {
        setTrips(res.data.trips)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  useEffect(() => { getTrips() }, [])

  const deleteTrip = (id) => {
    const token = localStorage.getItem("token")
    const headers = { headers: { auth: token } }

    if (window.confirm("Tem certeza de que deseja deletar esta viagem?")) {
      axios
        .delete(`${urlBase}/trips/${id}`, headers)
        .then((res) => {
          alert("Viagem deletada com sucesso.")
          getTrips()
        })
        .catch((err) => { alert(`ERRO! ${err.response.data.message}`) })
    } else {
      alert("Operação cancelada.")
    }
  }

  const tripName = ((trips.length > 0) ?
    trips.map((trip) => {

      return (
        <CardTripName key={trip.id}>
          <h3 onClick={() => goToTripDetailsPage(navigate, trip.id)}>{trip.name}</h3>
          <DeleteButton onClick={() => deleteTrip(trip.id)}><VscTrash /></DeleteButton>
        </CardTripName>
      )
    }) : <Loading src="https://icon-library.com/images/loading-gif-icon/loading-gif-icon-9.jpg" />
  )
  useEffect(() => { getTrips() }, [])

  const clearToken = () => {
    window.localStorage.clear("token")
    goToLoginPage(navigate)
  }

  return (
    <div>
      <Header />
      <MainContainer>
        <ContentContainer>
          <LogoutButton>
            <button onClick={clearToken}>Logout</button>
          </LogoutButton>
          <Title>Painel Administrativo</Title>
          <Button4 onClick={() => goToCreateTripPage(navigate)}>Criar viagem</Button4>
          <TripListContainer>
            <p>Viagens disponíveis</p>
            {tripName}
          </TripListContainer>
        </ContentContainer>
      </MainContainer>
    </div>
  )
}

export default AdminHomePage