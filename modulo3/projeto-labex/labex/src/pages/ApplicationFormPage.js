import React from "react"
import Header from "../components/Header"

function ApplicationFormPage() {

  return (
    <div>
        <Header />
        <form>
          <h3>Inscreva-se para uma viagem</h3>

          <select name="SelectTrip" id="" >
            <option value="Escolha uma viagem">Escolha uma viagem</option>
          </select>
          <input placeholder="Escolha uma viagem" />
          <input placeholder="Nome" />
          <input placeholder="Idade" />
          <input placeholder="Texto de candidatura" />
          <input placeholder="Profissão" />
          <select name="Country" id="" >
            <option value="País">País</option>
          </select>
        </form>
    </div>
  )
}

export default ApplicationFormPage