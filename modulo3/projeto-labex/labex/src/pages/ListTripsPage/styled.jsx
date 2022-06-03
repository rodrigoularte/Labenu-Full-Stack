import styled from "styled-components"

//ListTripsPage

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 640px;
  padding: 30px 0;
  align-items: center;
  gap: 30px;

  @media screen and (min-device-width : 300px) and (max-device-width : 480px) {
    padding: 30px 10px;
  }
`
export const Title = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;

  @media screen and (min-device-width : 300px) and (max-device-width : 480px) {
    padding-left: 10px;
  }
`

export const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`