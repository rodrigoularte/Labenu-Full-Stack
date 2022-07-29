import React, { useContext, useEffect } from "react"
import ContestInfo from "../../components/ContestInfo/ContestInfo"
import LotterySelect from "../../components/LotterySelect/LotterySelect"
import Numbers from "../../components/Numbers/Numbers"
import GlobalContext from "../../global/GlobalContext"
import { SideContainer, PageContainer, MainContainer, FooterMessage } from "./styled"

const HomePage = () => {

  const { states, setters } = useContext(GlobalContext)
  const { lotteries, contests, contestData, apiDate } = states
  const { setLotteryId } = setters

  // const nome = contests.length > 0 ?
  // lotteries.find((lottery) => {
  //   return lottery.
  // })

  // const name = contests?.find((lottery) => {
  //   return lottery.loteriaId === Number(lotteryId)
  // })

  // const contestInfo = apiDate.length > 0 &&
  // `${contestData.id} - ${apiDate.slice(8,10)}/${apiDate.slice(5,7)}/${apiDate.slice(0,4)}`
  // console.log(contestInfo)

  // const contestInfo = (date, id) => {
  //   if (date.length > 0) {
  //     return (
  //       <div>
  //         <p>Concurso</p>
  //         <span>
  //           {`${id} - ${date.slice(8, 10)}/${date.slice(5, 7)}/${date.slice(0, 4)}`}
  //         </span>
  //       </div>
  //     )
  //   }
  // }

  const onChangeLottery = (event) => {
    setLotteryId(event.target.value)
  }

  return (
    <PageContainer>
      <SideContainer>
        <div>
          <LotterySelect onChangeLottery={onChangeLottery} />
        </div>

        {/* <div>
          <h1>MEGA-SENA</h1>
        </div> */}

        <ContestInfo date={apiDate} id={contestData.id} />

        {/* {contestInfo(apiDate, contestData.id)} */}
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