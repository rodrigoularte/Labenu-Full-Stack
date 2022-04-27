import React from "react"
import styled from "styled-components"

const CardContainer = styled.div `
  display: flex;
  border: 1px solid black;
  width: 640px;
  height: 240px;
`

function TripCard(props) {

  const planetPhoto = (planet) => {
    if (planet === "Marte") {
      return( <img src="https://s1.static.brasilescola.uol.com.br/be/2021/11/planeta-marte.jpg" />)
    }

  }

  return(
    <CardContainer>
        {planetPhoto(props.planet)}
        <div>
          <h3>{props.name}</h3>
          <p>{props.description}</p>
          <p>Planeta: {props.planet}</p>
          <p>Duração: {props.durationInDays} dias</p>
          <p>Partida: {props.date}</p>
        </div>
      </CardContainer>
  )
}

export default TripCard