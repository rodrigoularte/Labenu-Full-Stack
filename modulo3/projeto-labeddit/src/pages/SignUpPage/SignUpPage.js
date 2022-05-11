import React from "react"

import { useUnprotectedPage } from "../../hooks/useUnprotectedPage"
import { ContentContainer } from "../../styles/styledDefault"
import SignUpForm from "./SignUpForm"

const SignUpPage = () => {

  useUnprotectedPage()
  
  return(
    <ContentContainer>
      <h1>Olá, boas vindas ao LabEddit ;)</h1>

      <SignUpForm/>

    </ContentContainer>
  )
}

export default SignUpPage