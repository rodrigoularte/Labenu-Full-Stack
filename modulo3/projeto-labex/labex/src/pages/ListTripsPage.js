import React, { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router"
import Header from "../components/Header"
import {goToApplicationFormPage} from "../routes/coordinator"
import { urlBase } from "../constants/constants"
import TripCard from "../components/TripCard"


function ListTripsPage() {

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

  const tripList = trips.map((trip) => {

    return(
      <TripCard key={trip.id}
        name={trip.name}
        description={trip.description}
        planet={trip.planet}
        durationInDays={trip.durationInDays}
        date={trip.date}
      />
    )
  })

  return (
    <div>
      <Header />
      <button onClick={() => goToApplicationFormPage(navigate)}>Quero me inscrever</button>
      <h2>As melhores viagens!</h2>
      <div>
        {tripList}
      </div>
    </div>
  )
}

export default ListTripsPage