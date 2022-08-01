import React, { useContext } from "react"
import GlobalContext from "../../global/GlobalContext"
import { NumberCircle, NumbersContainer } from "./styled"

const Numbers = () => {

  const { states } = useContext(GlobalContext)
  const { numbers, lotteryId } = states

  return (
    <NumbersContainer>
      {lotteryId !== "7" &&
        numbers.map(number => <NumberCircle key={number}>{number}</NumberCircle>)}
    </NumbersContainer>
  )
}

export default Numbers