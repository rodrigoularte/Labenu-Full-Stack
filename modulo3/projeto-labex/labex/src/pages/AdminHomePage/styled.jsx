import styled from "styled-components"

//AdminHomePage

export const Title = styled.h1`
  color: #1A75AE;
  text-align: center;
`

export const TripListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 20px;

  p {
    font-size: 1.5em;
  }
`

export const CardTripName = styled.div`
  display: flex;
  border: 1px solid #1A75AE;
  border-radius: 5px;
  height: 70px;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  box-shadow: 3px 3px 10px -4px;

  h3 {
    display: flex;
    color: #1A75AE;
    flex-grow: 1;
    height: 100%;
    justify-content: flex-start;
    align-items: center;
  }

  :hover {
    cursor: pointer;
    border: 2px solid #1A75AE;
  }
`

export const DeleteButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ad0000;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  font-size: 25px;

  :hover {
    cursor: pointer;
    background-color:#ad000047;
  }
`
