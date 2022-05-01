import styled from "styled-components"

//TripCard

export const CardContainer = styled.div `
  display: flex;
  border: 1px solid #1A75AE;
  border-radius: 5px;
  width: 640px;
  height: 240px;
  box-shadow: 3px 3px 10px -4px;

  :hover{
    border: 2px solid #1A75AE;
  }

  @media screen and (min-device-width : 300px) and (max-device-width : 480px) {
    flex-direction: column;
    max-width: 90vw;
    height: auto;
  }
`

export const PlanetImg = styled.img`
  max-width: 364px;
  max-height: 240px;
  width: auto;
  height: 100%;
  border-radius: 5px 0 0 5px;

  @media screen and (min-device-width : 300px) and (max-device-width : 480px) {
    flex-direction: column;
    max-width: 90vw;
    height: auto;
    border-radius: 5px 5px 0 0;
  }
`

export const CardContent = styled.div `
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 10px;
`

export const Title = styled.h3 `
  color: #1A75AE;
`

export const Description = styled.p`
  color: #378abd;
`

export const Data = styled.p`
  height: 60px;
  strong {
    color: #52A5D9;
  }
`
