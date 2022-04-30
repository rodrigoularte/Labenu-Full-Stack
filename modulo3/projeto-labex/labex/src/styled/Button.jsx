import styled from "styled-components"

export const Button1 = styled.button`
  padding: 10px 40px;
  border: 2px solid #1A75AE;
  border-radius: 25px;
  background-color: white;
  color: #1A75AE;
  font-weight: bold;
  font-size: 1.3em;
  transition-duration: 0.4s;

  :hover {
    cursor: pointer;
    background-color: #1A75AE;
    color: white;
  }

  @media screen and (min-device-width : 300px) and (max-device-width : 480px) {
    font-size: 1em;
  }
`

export const Button2 = styled.button`
  padding: 10px 40px;
  border: none;
  border-radius: 25px;
  background-color: #003d63;
  color: white;
  font-weight: bold;
  font-size: 1.1em;
  transition-duration: 0.4s;

  :hover {
    cursor: pointer;
    background-color: #003d63;
    color: white;
  }

  @media screen and (min-device-width : 300px) and (max-device-width : 480px) {
    font-size: 1em;
  }
`

export const Button3 = styled.button`
  padding: 5px 20px;
  border: 2px solid #1A75AE;
  border-radius: 25px;
  background-color: white;
  color: #1A75AE;
  font-weight: bold;
  transition-duration: 0.4s;

  :hover {
    cursor: pointer;
    background-color: #f1f1f1;
  }

  @media screen and (min-device-width : 300px) and (max-device-width : 480px) {
    /* font-size: 1em; */
  }
`

export const Button4 = styled.button`
  padding: 10px 40px;
  border: 2px solid #1A75AE;
  border-radius: 25px;
  background-color: white;
  color: #1A75AE;
  font-weight: bold;
  font-size: 1.1em;
  transition-duration: 0.4s;

  :hover {
    cursor: pointer;
    background-color: #1A75AE;
    color: white;
  }

  @media screen and (min-device-width : 300px) and (max-device-width : 480px) {
    font-size: 1em;
  }
`