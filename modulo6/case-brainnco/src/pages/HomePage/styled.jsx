import styled from "styled-components"

export const PageContainer = styled.div `
  display: flex;

  width: 100%;
  height: 100vh;
  /* min-height: 100vh; */


  @media screen and (min-device-width : 300px) and (max-device-width : 500px) {
    flex-direction: column;
  }
 
`

export const SideContainer = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  min-width: 40vw;
  height: 100%;

  padding: 64px;

  color: white;

  background: radial-gradient(50% 140% at right, #efefef 50%, ${(p) => p.select} 50.1%);

  @media screen and (min-device-width : 300px) and (max-device-width : 500px) {
    justify-content: space-around;
    align-items: center;

    width: 100%;
    height: 40vh;
    min-height: 40vh;

    padding: 12px 12px 40px 12px;

    background: radial-gradient(140% 30% at bottom, #efefef 50%, ${(p) => p.select} 50.1%);
  }
`

export const MainContainer = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  flex-grow: 1;

  /* /* width: 30vw; */
  height: 100%;

  padding: 64px 100px 64px 0;

  color: black;

  @media screen and (min-device-width : 300px) and (max-device-width : 500px) {
    padding: 0 24px 12px 24px;
  }

`

export const FooterMessage = styled.div `
  display: flex;
  align-items: flex-end;
  flex-grow: 1;

  text-align: center;

  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;

  color: black;

  @media screen and (min-device-width : 300px) and (max-device-width : 500px) {
    bottom: 4%;

    font-size: 12px;
    line-height: 16px;

  }
`