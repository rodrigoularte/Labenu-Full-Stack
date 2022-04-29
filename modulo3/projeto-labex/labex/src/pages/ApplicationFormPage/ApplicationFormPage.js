import React, { useEffect, useState } from "react"
import axios from "axios"
import Header from "../../components/Header"
import { urlBase } from "../../constants/constants"
import { FormContainer } from "../../styled/FormContainer"
import { ContentContainer, MainContainer } from "../../styled/PageStyled"

const ApplicationFormPage = () => {

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

  const tripList = trips.map((trip) => {

    return (
      <option value={trip.id}>{`${trip.name} - ${trip.planet}`
        }</option>
    )
  })

  return (
    <div>
      <Header />
      <MainContainer>
        <ContentContainer>
          <FormContainer  >
            <h2>Inscreva-se para uma viagem</h2>

            <select name="SelectTrip" id="" >
              <option value="Escolha uma viagem">Escolha uma viagem</option>
              {tripList}
            </select>
            <input placeholder="Nome" />
            <input placeholder="Idade" />
            <input placeholder="Texto de candidatura" />
            <input placeholder="Profissão" />
            <select name="Country" id="" >
              <option value="País">País</option>
            </select>
            <button>Enviar</button>
          </FormContainer>
        </ContentContainer>
      </MainContainer>
    </div>
  )
}

export default ApplicationFormPage