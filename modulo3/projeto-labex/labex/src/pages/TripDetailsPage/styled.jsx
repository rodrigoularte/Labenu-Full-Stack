import styled from "styled-components"

//TripDetailsPage

export const Title = styled.h1`
  color: #1A75AE;
  text-align: center;
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
