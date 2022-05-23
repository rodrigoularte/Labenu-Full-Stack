import React from "react"
import { useNavigate } from "react-router-dom"

import logoLabeddit from "../../assets/logo-labeddit.png"
import { goToSignUpPage } from "../../routes/coordinator"

import { Logo, LogoContainer } from "./styled"
import { BodyContainer, ContentContainer, CreateAccountButton, Line } from "../../styles/styledDefault"
import LoginForm from "./LoginForm"
import { useUnprotectedPage } from "../../hooks/useUnprotectedPage"

const LoginPage = () => {

  useUnprotectedPage()
  const navigate = useNavigate()

  return (
    <BodyContainer>
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
    </BodyContainer>
  )
}

export default LoginPage