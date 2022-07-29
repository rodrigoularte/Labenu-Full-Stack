import styled from "styled-components"

export const NumbersContainer = styled.div `
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: center;

  width: 700px;
  height: 100%;

  gap: 32px;
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
  font-size: 27px;
  line-height: 33px;
`