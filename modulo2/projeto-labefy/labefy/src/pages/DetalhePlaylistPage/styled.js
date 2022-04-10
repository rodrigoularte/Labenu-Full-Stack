import styled from "styled-components"

export const ContainerPrincipal = styled.div`
  max-width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #262626;
  color: white;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  padding: 50px;
  gap: 6vh;
  align-items: center;

  @media screen and (min-device-width : 300px) and (max-device-width : 480px) {
    padding: 10px;
  }
`

export const AdicioneOff = styled.div`
  display: flex;
  background-color: #2d2d2d;
  border-radius: 10px;
  width: 270px;
  padding: 20px;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2vh;

  :hover {
    cursor: pointer;
    background-color: #424242;
  }
`

export const ContainerMusicas = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 700px;
  gap: 20px;

  @media screen and (min-device-width : 300px) and (max-device-width : 480px) {
    width: 100%;
  }
`

export const Musica = styled.div`
  display: flex;
  width: 100%;
  border-radius: 10px;
  background-color: #2d2d2d;
  padding: 20px;
  justify-content: space-between;
  gap: 10px;
  transition-duration: 0.4s;
  align-items: center;

  :hover {
    background-color: #424242;
  }

  @media screen and (min-device-width : 300px) and (max-device-width : 480px) {
    padding: 10px;
    flex-direction: column;

    audio {
      width: 100%;
      height: 40px;
    }
  }
`

export const Descricao = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 200px;
  align-items: flex-end;

  @media screen and (min-device-width : 300px) and (max-device-width : 480px) {
    width: 100%;
    align-items: flex-start;
  }
`
export const BotaoVoltar = styled.button`
    width: 90px;
    background-color: #ff7038;
    transition-duration: 0.4s;
    padding: 10px 20px;
    color: white;
    font-weight: bolder;
    border-radius: 10px;
    border: none;

  :hover {
    background-color: #fc4902;
    cursor: pointer;
  }
`