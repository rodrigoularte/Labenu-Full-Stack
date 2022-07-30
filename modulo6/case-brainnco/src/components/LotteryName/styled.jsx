import styled from "styled-components"

export const NameContainer = styled.div `
  display: flex;
  align-items: center;

  gap: 32px;

  @media screen and (min-device-width : 300px) and (max-device-width : 500px) {
    flex-direction: column;

    gap: 4px;
  }
`

export const Logo = styled.img `
  width: 50px;
`

export const Name = styled.h1 `
  font-weight: 800;
  font-size: 30px;
  line-height: 37px;

  text-transform: uppercase;
`