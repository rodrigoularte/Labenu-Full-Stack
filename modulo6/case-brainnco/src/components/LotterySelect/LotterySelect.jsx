import React, { useContext } from "react"
import GlobalContext from "../../global/GlobalContext"

const LotterySelect = (props) => {
  
  const {states, setters} = useContext(GlobalContext)

  const lotteries = states.lotteries

  // console.log(lotteries)

  const lotteryOption = lotteries.map((lottery) => {
    return <option key={lottery.id} value={lottery.id}>{lottery.nome}</option>
  })

  return(
    <div>
      <select name="SelectLottery" id="SelectLottery" onChange={props.onChangeLottery}>
        <option>Escolha a loteria</option>
        {lotteryOption}
      </select>
    </div>
  )

}

export default LotterySelect