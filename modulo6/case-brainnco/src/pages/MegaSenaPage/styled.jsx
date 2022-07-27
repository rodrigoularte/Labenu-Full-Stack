import styled from "styled-components"

export const PageContainer = styled.div `
  display: flex;

  width: 100%;
  height: 100vh;
 
`

export const SideContainer = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 30vw;
  height: 100%;

  padding: 64px;

  background-color: #6BEFA3;
  color: white;

`

export const MainContainer = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  flex-grow: 1;

  /* width: 30vw;
  height: 100%; */

  padding: 64px;

  color: black;

`

export const FooterMessage = styled.div `
  position: absolute;
  bottom: 8%;

  text-align: center;

  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;

  color: black;
`