import React from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

import useForm from "../../hooks/useForm"
import { BASE_URL } from "../../constants/urls"

import { ContentContainer, GradientButton1, InputField } from "../../styles/styledDefault"
import { goToLoginPage } from "../../routes/coordinator"

const SignUpPage = () => {

  const navigate = useNavigate()

  const {form, onChange} = useForm({username:"", email: "", password: ""})

  const onSubmitSignUp = (event) => {
    event.preventDefault()
    console.log(form)

    axios
      .post(`${BASE_URL}/users/signup`, form)
      .then((res) => {
        alert("Cadastro realizado com sucesso!")
        goToLoginPage(navigate)
      })
      .catch((err) => { alert(`ERRO! ${err.response.data}`) })
  }

  return(
    <ContentContainer>
      <h1>Olá, boas vindas ao LabEddit ;)</h1>

      <form onSubmit={onSubmitSignUp}>
        <InputField
          name="username"
          value={form.username}
          onChange={onChange}
          type="text"
          placeholder="Nome de usuário"
          required
        />
        <InputField
          name="email"
          value={form.email}
          onChange={onChange}
          type="email"
          placeholder="E-mail"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          title="exemplo@exemplo.com"
          required
        />
        <InputField
          name="password"
          value={form.password}
          onChange={onChange}
          type="password"
          placeholder="Senha"
          required
        />
        <div>
          <p>Ao continuar, você concorda com o nosso Contrato de usuário e nossa Política de Privacidade</p>
          <div>
            <input type="checkbox" name="Teste"/>
            <label> Eu concordo em receber e-mails sobre coisas legais no Labeddit</label>
          </div>
        </div>

        <GradientButton1>Cadastrar</GradientButton1>
      </form>

    </ContentContainer>
  )
}

export default SignUpPage