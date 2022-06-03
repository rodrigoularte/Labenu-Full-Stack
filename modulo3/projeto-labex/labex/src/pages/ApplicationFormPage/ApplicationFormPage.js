import React, { useEffect, useState } from "react"
import axios from "axios"
import Header from "../../components/Header/Header"
import { urlBase } from "../../constants/constants"
import { useNavigate } from "react-router-dom"
import { FormContainer } from "../../styled/FormContainer"
import { ContentContainer, MainContainer } from "../../styled/PageStyled"
import useForm from "../../hooks/useForm"
import Country from "../../components/Country"
import { goToHomePage, goBack } from "../../routes/coordinator"
import { Button2, Button3 } from "../../styled/Button"

const ApplicationFormPage = () => {

  const navigate = useNavigate()

  const [trips, setTrips] = useState([])

  const { form, onChange } = useForm(
    {
      name: "",
      age: "",
      applicationText: "",
      profession: "",
      country: ""
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

    axios
      .post(`${urlBase}/trips/${form.SelectTrip}/apply`, form)
      .then((res) => {
        alert("Cadastro realizado com sucesso! Aguarde o nosso contato.")
        goToHomePage(navigate)
      })
      .catch((err) => { alert(`ERRO! ${err.response.data.message}`) })
  }

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
              onChange={onChange}
              placeholder="Nome"
              pattern="^.{3,}"
              title="O nome deve ter no mínimo 3 letras"
              required
            />
            <input
              name="age"
              value={form.age}
              type="number"
              onChange={onChange}
              placeholder="Idade"
              min={19}
              required
            />
            <input
              name="profession"
              value={form.profession}
              onChange={onChange}
              placeholder="Profissão"
              pattern="^.{10,}"
              title="O texto deve conter no mínimo 10 caracteres"
              required
            />
            <input
              name="applicationText"
              value={form.applicationText}
              onChange={onChange}
              placeholder="Texto de candidatura"
              pattern="^.{30,}"
              title="O texto deve conter no mínimo 30 caracteres"
              required
            />
            <Country onChange={onChange} />
            <Button2>Enviar</Button2>
          </FormContainer>
          <Button3 onClick={() => goBack(navigate)}>Voltar</Button3>
        </ContentContainer>
      </MainContainer>
    </div>
  )
}

export default ApplicationFormPage