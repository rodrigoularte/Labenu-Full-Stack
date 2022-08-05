import styled from "styled-components"

export const NumbersContainer = styled.div `
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: center;

  width: 100%;
  height: 95%;

  gap: 32px;

  @media screen and (min-device-width : 300px) and (max-device-width : 500px) {
    width: 100%;

    gap: 16px;
  }
`

export const NumberCircle = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100px;
  height: 100px;

  border-radius: 50%;
  background-color: white;

  font-weight: 700;
  font-size: 28px;
  line-height: 33px;

  @media screen and (min-device-width : 300px) and (max-device-width : 500px) {
    width: 50px;
    height: 50px;

    font-size: 16px;
  }
`