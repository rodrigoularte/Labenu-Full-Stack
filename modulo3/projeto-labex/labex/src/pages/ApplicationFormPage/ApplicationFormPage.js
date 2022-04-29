import React, { useEffect, useState } from "react"
import axios from "axios"
import Header from "../../components/Header"
import { urlBase } from "../../constants/constants"
import { FormContainer } from "../../styled/FormContainer"
import { ContentContainer, MainContainer } from "../../styled/PageStyled"
import useForm from "../../hooks/useForm"

const ApplicationFormPage = () => {

  const [trips, setTrips] = useState([])
  // const [id, setId] = useState("")

  const { form, onChange } = useForm(
    {
      name: "",
      age: "",
      applicationText: "",
      profession: "",
      country: "Brasil",
      trip: ""
    }
  )

  
  const getTrips = () => {
    axios
      .get(`${urlBase}/trips`)
      .then((res) => {
        setTrips(res.data.trips)
      })
      .catch((err) => { console.log(err) })
  }

  useEffect(() => { getTrips() }, [])




  const onSubmitApplication = (event) => {
    //bloqueia o comportamento padrão do form
    event.preventDefault()

    console.log(form)
  
    // axios
    // .post(`${urlBase}/login`, form)
    // .then((res) => {
    //   localStorage.setItem("token", res.data.token)
    //   goToAdminHomePage(navigate)
    // })
    // .catch((err) => {alert(`ERRO! ${err.response.data.message}`)})
  }



  // const onChangeId = (event) => {
  //   setId(event.target.value)
  // }

  // console.log(id)



  const tripList = trips.map((trip) => {

    return (
      <option
        id={trip.id}
        name="trip"
        value={trip.id}
      >
        {`${trip.name} - ${trip.planet}`}
      </option>
    )
  })

  return (
    <div>
      <Header />
      <MainContainer>
        <ContentContainer>
          <FormContainer onSubmit={onSubmitApplication}>
            <h2>Inscreva-se para uma viagem</h2>

            <select name="SelectTrip" id="SelectTrip" onChange={onChange}>
              <option value="Escolha uma viagem">Escolha uma viagem</option>
              {tripList}
            </select>
            <input
              name="name"
              value={form.name}
              type="text"
              onChange={onChange}
              placeholder="Nome"
              required

            />
            <input
              name="age"
              value={form.age}
              type="number"
              onChange={onChange}
              placeholder="Idade"
            />
            <input
              name="applicationText"
              value={form.applicationText}
              type="text"
              onChange={onChange}
              placeholder="Texto de candidatura"
            />
            <input
              name="profession"
              value={form.profession}
              type="text"
              onChange={onChange}
              placeholder="Profissão"
            />
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