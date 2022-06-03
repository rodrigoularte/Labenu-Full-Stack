import styled from "styled-components"

//Home

export const HomeContent = styled.div`
  display: flex;
  height: 90vh;

  @media screen and (min-device-width : 300px) and (max-device-width : 480px) {
    flex-direction: column;
  }
`

export const HomeImg = styled.img`
  max-height: 90vh;
  max-width: 830px;
  height: auto;
  width: auto;
`

export const Content1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px;
  gap: 50px;

  h1 {
    font-size: 2.5em;
    text-align: center;

  }
  
  @media screen and (min-device-width : 300px) and (max-device-width : 480px) {
    padding: 25px;
    flex-grow: 1;
    h1 {font-size: 2em;}
  }
`


