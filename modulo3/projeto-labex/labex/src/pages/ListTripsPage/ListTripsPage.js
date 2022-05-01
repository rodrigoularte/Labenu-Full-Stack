import React, { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router"
import Header from "../../components/Header/Header"
import { goToApplicationFormPage } from "../../routes/coordinator"
import { urlBase } from "../../constants/constants"
import TripCard from "../../components/TripCard/TripCard"
import { Loading, MainContainer } from "../../styled/PageStyled"
import { Button1 } from "../../styled/Button"
import { ContentContainer, List, Title } from "./styled"


function ListTripsPage() {

  const navigate = useNavigate()

  const [trips, setTrips] = useState([])

  const getTrips = () => {
    axios
      .get(`${urlBase}/trips`)
      .then((res) => {
        setTrips(res.data.trips)
      })
      .catch((err) => { console.log(err) })
  }

  useEffect(() => { getTrips() }, [])

  const tripList = (trips.length > 0) ?
    trips.map((trip) => {

      return (
        <TripCard key={trip.id}
          name={trip.name}
          description={trip.description}
          planet={trip.planet}
          durationInDays={trip.durationInDays}
          date={trip.date}
        />
      )
    }) : <Loading src="https://icon-library.com/images/loading-gif-icon/loading-gif-icon-9.jpg" />

  return (
    <div>
      <Header />
      <MainContainer>
        <ContentContainer>
          <Button1 onClick={() => goToApplicationFormPage(navigate)}>Quero me inscrever</Button1>
          <Title>
            <h2>As melhores viagens!</h2>
          </Title>
          <List>
            {tripList}
          </List>
        </ContentContainer>
      </MainContainer>
    </div>
  )
}

export default ListTripsPage