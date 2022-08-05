import React, { useContext } from "react"
import GlobalContext from "../../global/GlobalContext"
import { Logo, Name, NameContainer } from "./styled"
import logo from "../../images/loteria-logo.png"

const LotteryName = () => {

  const { states, setters } = useContext(GlobalContext)
  const { lotteries, lotteryId, lotteryName, apiDate } = states
  const { setLotteryName } = setters

  const name = apiDate.length > 0 && lotteries?.find((lottery) => {
    return lottery.id === Number(lotteryId)
  })

  if(lotteryId !== "7") {
    setLotteryName(name.nome)
  }

  return(
    <NameContainer>
      { lotteryId !== "7" && <Logo src={logo} alt="Logo" /> }
      <Name>{ lotteryId !== "7" && lotteryName }</Name>
    </NameContainer>
  )
}

export default LotteryName