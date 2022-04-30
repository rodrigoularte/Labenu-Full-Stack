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
  padding: 0 20px;

  h3 {
    display: flex;
    flex-grow: 1;
    height: 100%;
    justify-content: flex-start;
    align-items: center;
  }

  :hover {
    cursor: pointer;
  }
`