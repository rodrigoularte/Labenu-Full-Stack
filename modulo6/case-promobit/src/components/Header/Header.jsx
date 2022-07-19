import React from "react"
import { useNavigate } from "react-router-dom"
import { HeaderContainer } from "./styled"

const Header = () => {

  // const navigate = useNavigate()

  return(
    <HeaderContainer>
      <h2>TMDB</h2>
    </HeaderContainer>
  )
}

export default Header