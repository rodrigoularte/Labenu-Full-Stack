import React from "react"
import { useNavigate } from "react-router-dom"
import Header from "../../components/Header/Header"
import { goToListTripsPage } from "../../routes/coordinator"
import { Content1, HomeContent, HomeImg } from "./styled"
import homeImg from "../../images/home-img.png"
import { Button1 } from "../../styled/Button"

function HomePage() {

  const navigate = useNavigate()

  return (
    <div>
      <Header />
      <HomeContent>
        <HomeImg src={homeImg}></HomeImg>
        <Content1>
          <h1>Aqui, oferecemos as melhores viagens espaciais</h1>
          <Button1 onClick={() => goToListTripsPage(navigate)}>Encontre o destino ideal</Button1>
        </Content1>
      </HomeContent>
    </div>
  )
}

export default HomePage