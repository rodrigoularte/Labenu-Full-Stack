import styled from "styled-components"

// styled Matches

export const ContainerPagina = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 90vh;
  margin-top: 5vh;
  border: 1px solid black;
  background-color: white;
  border-radius: 10px;
`

export const ContainerLista = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  /* height: 90vh; */
  padding: 15px;
`

export const ContainerMatch = styled.div`
  display: flex;
  align-items: center;
  background-color: #cd4651;
  color: white;
  padding: 10px;
  margin-bottom: 15px;
  gap: 15px;
  border-radius: 10px;
  transition-duration: 0.4s;

  :hover {
    background-color: #BF1717;
    color: white;
  }
`

export const PerfilImg = styled.img`
  height: 50px;
  width: 50px;
  /* margin-right: 10px; */
  border-radius: 50%;
`

export const ContainerBotao = styled.div`
  display: flex;
  justify-content: center;
`


export const BotaoRemover = styled.button`
  display: flex;
  align-items: center;
  gap: 5px;
  height: 30px;
  padding: 5px;
  border-radius: 10px;
  background-color: white;
  border: 2px solid #BF1717;
  box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.2), 0 3px 3px 0 rgba(0, 0, 0, 0.19);


  color: #BF1717;
  font-weight: bold;

  :hover {
    
  }
`