import styled from "styled-components"

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
`

// export const ContentContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   width: 640px;
//   padding-top: 30px;
//   align-items: center;
// `

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 640px;
  padding: 30px 0;
  align-items: center;
  gap: 30px;

  @media screen and (min-device-width : 300px) and (max-device-width : 480px) {
    padding: 30px 10px;
  }
`