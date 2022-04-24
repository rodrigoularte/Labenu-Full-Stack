import styled from "styled-components"

// styled Header

export const ContainerHeader = styled.div`
  display: flex;
  height: 50px;
  position: relative;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid black;
  padding: 0 10px;
`

export const Logo = styled.h1`
  position: absolute;
  left: 110px;
`

export const Titulo1 = styled.span`
  color: #2d3a3a;
`

export const Titulo2 = styled.span`
  color: #BF1717;
`

export const Voltar = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 20px;
  background-color: white;
  border: none;
  height: 30px;
  width: 30px;
  border-radius: 50%;
  transition-duration: 0.4s;

  color: #2d3a3a;
  font-size: 20px;
  font-weight: bold;

  :hover {
    background-color: #cccccc;
    transform: scale(1.2);
    cursor: pointer;
  }
`

export const Matches = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 20px;
  background-color: white;
  border: none;
  height: 30px;
  width: 30px;
  border-radius: 50%;
  transition-duration: 0.4s;

  color: #BF1717;
  font-size: 25px;
  font-weight: bold;

  :hover {
    background-color: #cccccc;
    transform: scale(1.2);
    cursor: pointer;
  }
`