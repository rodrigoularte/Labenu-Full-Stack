import React from "react"

import { useUnprotectedPage } from "../../hooks/useUnprotectedPage"
import { ContentContainer } from "../../styles/styledDefault"
import SignUpForm from "./SignUpForm"
import { WelcomeTitle } from "./styled"

const SignUpPage = () => {

  useUnprotectedPage()
  
  return(
    <ContentContainer>
      <WelcomeTitle>Olá, boas vindas ao LabEddit ;)</WelcomeTitle>

      <SignUpForm/>

    </ContentContainer>
  )
}

export default SignUpPage