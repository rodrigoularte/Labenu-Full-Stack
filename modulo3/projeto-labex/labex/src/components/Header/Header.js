import React from "react"
import { useNavigate } from "react-router-dom"
import { goToAdminHomePage, goToHomePage } from "../../routes/coordinator"
import { AdminButton, Logo, MainContainer } from "./styled"

const Header = () => {

  const navigate = useNavigate()

  return(
    <MainContainer>
      <Logo onClick={() => goToHomePage(navigate)}>LabeX</Logo>
      <AdminButton onClick={() => goToAdminHomePage(navigate)}>Admin</AdminButton>
    </MainContainer>
  )
}

export default Header