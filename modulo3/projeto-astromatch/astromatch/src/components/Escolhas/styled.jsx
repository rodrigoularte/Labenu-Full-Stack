import styled from "styled-components"

// styled Escolhas

export const ContainerBotoes = styled.div`
  display: flex;
  height: 100px;
  align-items: center;
  justify-content: space-around;
`

export const BotaoMatch = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 70px;
  width: 70px;
  border-radius: 50%;
  border: 5px solid #517373;
  transition-duration: 0.4s;

  color: #3ead5c;
  font-size: 30px;

  :hover {
    background-color: #3ead5c;
    transform: scale(1.2);
    cursor: pointer;
    border: none;

    color: white;
  }
`

export const BotaoRejeitar = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 70px;
  width: 70px;
  border-radius: 50%;
  border: 5px solid #517373;
  transition-duration: 0.4s;

  color: #BF1717;
  font-size: 30px;

  :hover {
    background-color: #BF1717;
    transform: scale(1.2);
    cursor: pointer;
    border: none;


    color: white;
  }
`