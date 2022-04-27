import React from "react"
import { useNavigate } from "react-router-dom"
import { goToAdminHomePage, goToHomePage } from "../routes/coordinator"
import styled from "styled-components"

const MainContainer = styled.div`
  display: flex;
  border: 1px solid black;
  width: 100%;
  height: 60px;
  align-items: center;
  justify-content: space-around;
`

const Header = () => {

  const navigate = useNavigate()

  return(
    <MainContainer>
      <div onClick={() => goToHomePage(navigate)}>LabeX</div>
      <button onClick={() => goToAdminHomePage(navigate)}>Admin</button>
    </MainContainer>
  )
}

export default Header