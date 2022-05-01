import styled from "styled-components"

//TripDetailsPage

export const TripInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  text-align: center;

  div{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`


export const Title = styled.h1`
  color: #1A75AE;
  text-align: center;
`

export const Description = styled.p`
  color: #1A75AE;
  font-size: 20px;
`

export const PendingCandidates = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #1A75AE;
  border-radius: 5px;
  height: auto;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  gap: 20px;
  box-shadow: 3px 3px 10px -4px;

  :hover {
    cursor: pointer;
    border: 2px solid #1A75AE;
  }
`

export const ApprovedCandidates = styled.ul`
  display: flex;
  flex-direction: column;
  border: 1px solid #1A75AE;
  border-radius: 5px;
  height: auto;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  box-shadow: 3px 3px 10px -4px;

  :hover {
    cursor: pointer;
    border: 2px solid #1A75AE;
  }
`

export const Candidates = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;

  h2 {
    color: #1A75AE;
  }
`
export const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
`

export const ApproveButton = styled.button`
  padding: 5px 20px;
  width: 100px;
  border: 2px solid #1A75AE;
  border-radius: 25px;
  background-color: #1A75AE;
  color: white;
  font-weight: bold;
  transition-duration: 0.4s;

  :hover {
    cursor: pointer;
    background-color: #0c4f79;
    border: 2px solid #0c4f79;
  }
`

export const RejectButton = styled.button`
  padding: 5px 20px;
  width: 100px;
  border: 2px solid #ad0000;
  border-radius: 25px;
  background-color: white;
  color: #ad0000;
  font-weight: bold;
  transition-duration: 0.4s;

  :hover {
    cursor: pointer;
    background-color: #ad0000;
    color: white;
  }
`