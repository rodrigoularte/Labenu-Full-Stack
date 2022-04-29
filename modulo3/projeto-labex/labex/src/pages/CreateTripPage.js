import React from "react"
import Header from "../components/Header"
import Planet from "../components/Planet"
import { useProtectedPage } from "../components/useProtectedPage"
import useForm from "../hooks/useForm"
import { FormContainer } from "../styled/FormContainer"
import { ContentContainer, MainContainer } from "../styled/PageStyled"

const CreateTripPage = () => {

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

  return (
    <div>
      <Header />
      <MainContainer>
        <ContentContainer>
          <FormContainer>
            <input
              name="name"
              value={form.name}
              onChange={onChange}
              placeholder="Nome da viagem"
              pattern="^.{3,}"
              title="O nome deve ter no mínimo 3 letras"
              required
            />
            <Planet onChange={onChange}/>
            <input
              name="description"
              value={form.description}
              onChange={onChange}
              placeholder="Descrição"
              pattern="^.{3,}"
              title="O nome deve ter no mínimo 3 letras"
              required
            />
            <input
              type="date"
            />
            <input
              name="durationInDays"
              value={form.durationInDays}
              onChange={onChange}
              placeholder="Duração em dias"
              type="number"
              pattern="^.{3,}"
              title="O nome deve ter no mínimo 3 letras"
              required
            />
          </FormContainer>
        </ContentContainer>
      </MainContainer>
    </div>
  )
}

export default CreateTripPage