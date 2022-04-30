import React from "react"
import axios from "axios"
import Header from "../components/Header/Header"
import { urlBase } from "../constants/constants"
import { useNavigate } from "react-router-dom"
import Planet from "../components/Planet"
import { useProtectedPage } from "../components/useProtectedPage"
import useForm from "../hooks/useForm"
import { FormContainer } from "../styled/FormContainer"
import { ContentContainer, MainContainer } from "../styled/PageStyled"
import { goToAdminHomePage } from "../routes/coordinator"

const CreateTripPage = () => {

  const navigate = useNavigate()
  useProtectedPage()

  const { form, onChange } = useForm(
    {
      name: "",
      planet: "",
      date: "",
      description: "",
      durationInDays: ""
    }
  )

  const onSubmitApplication = (event) => {
    const token = localStorage.getItem("token")
    const headers = { headers: { auth: token } }

    //bloqueia o comportamento padrão do form
    event.preventDefault()
  
    axios
    .post(`${urlBase}/trips`, form, headers)
    .then((res) => {
      alert("Viagem adicionada com sucesso.")
      goToAdminHomePage(navigate)
    })
    .catch((err) => {alert(`ERRO! ${err.response.data.message}`)})
  }

  return (
    <div>
      <Header />
      <MainContainer>
        <ContentContainer>
          <FormContainer onSubmit={onSubmitApplication}>
            <input
              name="name"
              value={form.name}
              onChange={onChange}
              placeholder="Nome da viagem"
              pattern="^.{5,}"
              title="O nome deve ter no mínimo 3 letras"
              required
            />
            <Planet onChange={onChange} required/>
            <input
              name="description"
              value={form.description}
              onChange={onChange}
              placeholder="Descrição"
              pattern="^.{30,}"
              title="A descrição deve ter no mínimo 30 letras"
              required
            />
            <input
              name="date"
              type="date"
              onChange={onChange}
              placeholder="Data"
              required
            />
            <input
              name="durationInDays"
              value={form.durationInDays}
              onChange={onChange}
              placeholder="Duração em dias"
              type="number"
              min={50}
              required
            />
            <button>Criar</button>
          </FormContainer>
        </ContentContainer>
      </MainContainer>
    </div>
  )
}

export default CreateTripPage