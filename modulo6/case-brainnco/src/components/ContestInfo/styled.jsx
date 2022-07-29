import styled from "styled-components"

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;

  gap: 16px;

  @media screen and (min-device-width : 300px) and (max-device-width : 500px) {
    align-items: center;

    gap: 4px;

    margin-bottom: 12px;
  }
`

export const Title = styled.h3`
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.15em;
`

export const Info = styled.span`
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 0.1em;

  @media screen and (min-device-width : 300px) and (max-device-width : 500px) {
    font-size: 14px;
  }
`