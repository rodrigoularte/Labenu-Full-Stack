import React, { useContext } from "react"
import GlobalContext from "../../global/GlobalContext"
import { NumberCircle, NumbersContainer } from "./styled"

const Numbers = () => {

  const { states } = useContext(GlobalContext)
  const { numbers } = states  

  console.log(numbers)

  return (
    <NumbersContainer>
      {numbers ?
        numbers.map(number => <NumberCircle>{number}</NumberCircle>) :
        <p>carregando</p>}
    </NumbersContainer>
  )
}

export default Numbers