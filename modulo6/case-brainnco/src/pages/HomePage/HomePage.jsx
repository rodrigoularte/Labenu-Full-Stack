import React, { useContext, useEffect } from "react"
import ContestInfo from "../../components/ContestInfo/ContestInfo"
import LotterySelect from "../../components/LotterySelect/LotterySelect"
import Numbers from "../../components/Numbers/Numbers"
import GlobalContext from "../../global/GlobalContext"
import { SideContainer, PageContainer, MainContainer, FooterMessage } from "./styled"

const HomePage = () => {

  const { states, setters } = useContext(GlobalContext)
  const { lotteryId, contests, contestData, apiDate } = states
  const { setLotteryId } = setters

  // console.log(lotteryId)

  let color
  switch (lotteryId) {
    case "0":
      color = "#6BEFA3"
      break
    case "1":
      color = "#8666EF"
      break
    case "2":
      color = "#DD7AC6"
      break
    case "3":
      color = "#FFAB64"
      break
    case "4":
      color = "#5AAD7D"
      break
    case "5":
      color = "#BFAF83"
      break
    default:
      color = "#717171"
      break;
  }

  const onChangeLottery = (event) => {
    setLotteryId(event.target.value)
  }

  return (
    <PageContainer>
      <SideContainer select={color}>
        <div>
          <LotterySelect onChangeLottery={onChangeLottery} />
        </div>

        {/* <div>
          <h1>MEGA-SENA</h1>
        </div> */}

        <ContestInfo date={apiDate} id={contestData.id} />
      </SideContainer>

      <MainContainer>
        <Numbers />

        <FooterMessage>
          Este sorteio é meramente ilustrativo e não possui nenhuma ligação com a CAIXA.
        </FooterMessage>
      </MainContainer>
    </PageContainer>
  )
}

export default HomePage