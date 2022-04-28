import styled from "styled-components"

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`

export const PageContainer = styled.div`
display: flex;
flex-direction: column;
width: 640px;
`

export const TripListContainer = styled.div`
display: flex;
flex-direction: column;
width: 100%;
gap: 20px;
`

export const CardTripName = styled.div`
  display: flex;
  border: 1px solid black;
  height: 70px;
  align-items: center;
  justify-content: space-between;

  :hover {
    cursor: pointer;
  }
`