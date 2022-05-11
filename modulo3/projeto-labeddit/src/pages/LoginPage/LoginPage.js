import React from "react"
import { useNavigate } from "react-router-dom"

import logoLabeddit from "../../assets/logo-labeddit.png"
import { goToSignUpPage } from "../../routes/coordinator"

import { ContentContainer, CreateAccountButton, Line, Logo, LogoContainer } from "./styled"
import LoginForm from "./LoginForm"

const LoginPage = () => {

  const navigate = useNavigate()

  return (
    <ContentContainer>
      <LogoContainer>
        <Logo src={logoLabeddit} alt="logo-labeddit" />
        <h1>LabEddit</h1>
        <p>O projeto de rede social da Labenu</p>
      </LogoContainer>

      <LoginForm />

      <Line />

      <CreateAccountButton
        onClick={() => goToSignUpPage(navigate)}
      >
        Crie uma conta!
      </CreateAccountButton>
    </ContentContainer>
  )
}

export default LoginPage