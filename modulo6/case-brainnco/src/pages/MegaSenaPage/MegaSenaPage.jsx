import React, { useContext, useEffect } from "react"
import GlobalContext from "../../global/GlobalContext"
import { SideContainer, PageContainer, MainContainer, FooterMessage } from "./styled"

const MegaSenaPage = () => {

  const {requests} = useContext(GlobalContext)

  useEffect(() => {
    requests.getLotteries()
  }, [])

  return(
    <PageContainer>
      <SideContainer>
        <div>
          <select>
            <option value="megaSena">MEGA-SENA</option>
            <option value="quina">QUINA</option>
            <option value="lotoFacil">LOTOFÁCIL</option>
            <option value="lotoMania">MEGA-SENA</option>
            <option value="timeMania">TIMEMANIA</option>
            <option value="diaDeSorte">DIA DE SORTE</option>
          </select>
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

        <FooterMessage>
          Este sorteio é meramente ilustrativo e não possui nenhuma ligação com a CAIXA.
        </FooterMessage>
      </MainContainer>
    </PageContainer>
  )
}

export default MegaSenaPage