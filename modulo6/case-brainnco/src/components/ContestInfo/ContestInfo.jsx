import React from "react"
import { Info, InfoContainer, Title } from "./styled"

const ContestInfo = (props) => {

  const title = props.lotteryId !== "7" && props.date.length > 0 &&
    "CONCURSO"
  
  const info = props.lotteryId !== "7" && props.date.length > 0 &&
    `${props.id} - ${props.date.slice(8, 10)}/${props.date.slice(5, 7)}/${props.date.slice(0, 4)}`

  return (
    <InfoContainer>
      <Title> {title} </Title>
      <Info> {info} </Info>
    </InfoContainer>
  )
}

export default ContestInfo