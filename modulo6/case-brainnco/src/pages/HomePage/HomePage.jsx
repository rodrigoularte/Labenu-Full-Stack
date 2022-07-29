import React, { useContext, useEffect } from "react"
import LotterySelect from "../../components/LotterySelect/LotterySelect"
import Numbers from "../../components/Numbers/Numbers"
import GlobalContext from "../../global/GlobalContext"
import { SideContainer, PageContainer, MainContainer, FooterMessage } from "./styled"

const HomePage = () => {

  const {states, setters} = useContext(GlobalContext)
  const {lotteries, contests, contestData} = states
  const {setLotteryId} = setters

  // const nome = contests.length > 0 ?
  // lotteries.find((lottery) => {
  //   return lottery.
  // })

  const onChangeLottery = (event) => {  
    setLotteryId(event.target.value)
  }

  return(
    <PageContainer>
      <SideContainer>
        <div>
          <LotterySelect onChangeLottery={onChangeLottery}/>
        </div>

        <div>
          <h1>MEGA-SENA</h1>
        </div>

        <div>
          <p>CONCURSO</p>
          <p></p>
        </div>
      </SideContainer>

      <MainContainer>
        <Numbers/>

        <FooterMessage>
          Este sorteio é meramente ilustrativo e não possui nenhuma ligação com a CAIXA.
        </FooterMessage>
      </MainContainer>
    </PageContainer>
  )
}

export default HomePage