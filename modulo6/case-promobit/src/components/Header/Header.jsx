import React from "react"
import { useNavigate } from "react-router-dom"
import { goToHomePage } from "../../routes/coordinator"
import { HeaderContainer } from "./styled"

const Header = () => {

  const navigate = useNavigate()

  return(
    <HeaderContainer>
      <h2 onClick={() => goToHomePage(navigate)}>T M D B</h2>
    </HeaderContainer>
  )
}

export default Header