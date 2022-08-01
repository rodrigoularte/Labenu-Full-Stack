import styled from "styled-components"

export const Select = styled.select`
  display: flex;

  height: 36px;
  width: 200px;

  padding: 0 8px;

  background-color: white;

  border: none;
  border-radius: 10px;

  font-weight: 500;
  font-size: 16px;
  line-height: 18px;
  text-transform: uppercase;

  :hover{
    cursor: pointer;
  }

  @media screen and (min-device-width : 300px) and (max-device-width : 500px) {

    height: 28px;
    width: 180px;
    
    font-size: 12px;

  }
`