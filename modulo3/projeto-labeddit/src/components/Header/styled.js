import styled from "styled-components"

//Styled LoginPage

export const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
  background-color: #EDEDED;
  justify-content: center;
  align-items: center;
`

export const Logo = styled.img`
  width: 28px;
`

export const LoginLink = styled.p`
  position: absolute;
  right: 30px;

  font-size: 18px;
  font-weight: 600;
  font-family: 'Noto Sans';
  color: #4088CB;

  :hover {
    cursor: pointer;
  }
`
