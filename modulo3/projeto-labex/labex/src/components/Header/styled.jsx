import styled from "styled-components"

//Header

export const MainContainer = styled.div`
  display: flex;
  width: 100%;
  height: 10vh;
  align-items: center;
  justify-content: space-between;
  background-color: #52A5D9;
  padding: 0 100px;
  box-shadow: 0px -7px 14px 3px;

  @media screen and (min-device-width : 300px) and (max-device-width : 480px) {
    padding: 20px;
  }
`
export const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bolder;
  font-size: 2em;
  height: 100%;
  width: 100px;

  :hover {
    cursor: pointer;
    background-color: #5faedf;
  }
`

export const AdminButton = styled.button`
  display: flex;
  background-color: #52A5D9;
  color: white;
  padding: 8px 30px;
  border-radius: 25px;
  border: none;
  transition-duration: 0.4s;
  font-size: 1em;
  gap: 5px;

  :hover {
    cursor: pointer;
    background-color: #1A75AE;
  }
`
