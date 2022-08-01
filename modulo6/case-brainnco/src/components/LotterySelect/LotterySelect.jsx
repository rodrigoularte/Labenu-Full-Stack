import React, { useContext } from "react"
import GlobalContext from "../../global/GlobalContext"
import { Select } from "./styled"


const LotterySelect = (props) => {
  
  const {states} = useContext(GlobalContext)
  const {lotteries} = states

  const lotteryOption = lotteries.map((lottery) => {
    return <option key={lottery.id} value={lottery.id} id={lottery.nome}> {lottery.nome} </option>
  })

  return(
    <div>
      <Select name="SelectLottery" id="SelectLottery" onChange={props.onChangeLottery}>
        <option value="7">Escolha a loteria</option>
        {lotteryOption}
      </Select>
    </div>
  )
}

export default LotterySelect