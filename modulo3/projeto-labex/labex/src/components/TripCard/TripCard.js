import React from "react"
import { CardContainer, CardContent, Data, Description, PlanetImg, Title } from "./styled"
import marsImg from "../../images/mars-img.png"
import plutoImg from "../../images/pluto.png"
import mercuryImg from "../../images/mercury.png"
import venusImg from "../../images/venus.png"
import jupiterImg from "../../images/jupiter.png"
import saturnImg from "../../images/saturn.png"
import uranusImg from "../../images/uranus.png"
import neptuneImg from "../../images/neptune.png"
import earthImg from "../../images/earth.png"


function TripCard(props) {

  const planetPhoto = (planet) => {

    switch (planet) {
      case "Mercúrio":
        return <PlanetImg src={mercuryImg} />
      case "Vênus":
        return <PlanetImg src={venusImg} />
      case "Terra":
        return <PlanetImg src={earthImg} />
      case "Marte":
        return <PlanetImg src={marsImg} />
      case "Júpiter":
        return <PlanetImg src={jupiterImg} />
      case "Saturno":
        return <PlanetImg src={saturnImg} />
      case "Urano":
        return <PlanetImg src={uranusImg} />
      case "Netuno":
        return <PlanetImg src={neptuneImg} />
      case "Plutão":
        return <PlanetImg src={plutoImg} />
    }
  }

  return(
    <CardContainer>
        {planetPhoto(props.planet)}
        <CardContent>
          <Title>{props.name}</Title>
          <Description>{props.description}</Description>
          <Data>
            <p>Planeta: {props.planet}</p>
            <p>Duração: {props.durationInDays} dias</p>
            <p>Partida: {props.date}</p>
          </Data>
        </CardContent>
    </CardContainer>
  )
}

export default TripCard