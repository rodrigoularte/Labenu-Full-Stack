import React from "react"
import { useNavigate } from "react-router-dom"

import { HeaderContainer, Logo, LoginLink } from "./styled"
import logoLabeddit from "../../assets/logo-labeddit.png"
import {goToLoginPage} from "../../routes/coordinator"

const Header = () => {

  const navigate = useNavigate()

  return(
    <HeaderContainer>
      <Logo src={logoLabeddit} alt="logo-labeddit" />
      <LoginLink onClick={() => goToLoginPage(navigate)}>Entrar</LoginLink>
    </HeaderContainer>
  )
}

export default Header