import React from "react"
import { useNavigate } from "react-router-dom"

import useForm from "../../hooks/useForm"

import { GradientButton1, InputField } from "../../styles/styledDefault"
import { signUp } from "../../services/users"
import { BlueText, BlackText, Label, TextContainer } from "./styled"

const SignUpForm = () => {

  const navigate = useNavigate()

  const { form, onChange } = useForm({ username: "", email: "", password: "" })

  const onSubmitSignUp = (event) => {
    event.preventDefault()
    console.log(form)

    signUp(form, navigate)
  }

  return (
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
      <TextContainer>
        <BlackText>Ao continuar, você concorda com o nosso <BlueText>Contrato de usuário</BlueText> e nossa <BlueText>Política de Privacidade</BlueText></BlackText>
        <div>
          <input type="checkbox" name="Teste" />
          <Label> Eu concordo em receber e-mails sobre coisas legais no Labeddit</Label>
        </div>
      </TextContainer>

      <GradientButton1>Cadastrar</GradientButton1>
    </form>
  )
}

export default SignUpForm