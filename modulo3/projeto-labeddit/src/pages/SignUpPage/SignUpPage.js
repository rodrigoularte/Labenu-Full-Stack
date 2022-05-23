import React from "react"

import { useUnprotectedPage } from "../../hooks/useUnprotectedPage"
import { BodyContainer, ContentContainer } from "../../styles/styledDefault"
import SignUpForm from "./SignUpForm"
import { WelcomeTitle } from "./styled"

const SignUpPage = () => {

  useUnprotectedPage()

  return (
    <BodyContainer>
      <ContentContainer>
        <WelcomeTitle>Olá, boas vindas ao LabEddit ;)</WelcomeTitle>

        <SignUpForm />

      </ContentContainer>
    </BodyContainer>
  )
}

export default SignUpPage