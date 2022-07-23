import styled from "styled-components"

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  height: 56px;

  padding: 16px 5vw;

  background-color: #5C16C5;
  color: white;

  :hover{
    cursor: pointer;
  }

  @media screen and (min-device-width : 300px) and (max-device-width : 500px) {
    justify-content: center;
  }
`