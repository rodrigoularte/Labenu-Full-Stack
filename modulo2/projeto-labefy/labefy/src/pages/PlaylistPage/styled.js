import styled from "styled-components"

export const ContainerPrincipal = styled.div`
  max-width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #262626;
  color: white;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  padding: 50px;
  gap: 6vh;
  align-items: center;
  
  @media screen and (min-device-width : 300px) and (max-device-width : 480px) {
  padding: 10px;

  h1 {
    width: 100%;
  }
  }
`

export const ContainerPlaylists = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 700px;

  h2 {
    margin-bottom: 20px;
    width: 100%;
  }

`

export const Playlists = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
  flex-wrap: wrap;
`

export const Botoes = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;

  button {
    width: 90px;
    background-color: #ff7038;
    transition-duration: 0.4s;
    padding: 5px 20px;
    color: white;
    font-weight: bolder;
    border-radius: 10px;
    border: none;

    @media screen and (min-device-width : 300px) and (max-device-width : 480px) {
      width: 60%;
      padding: 0;
    }
  }

  button:hover {
    background-color: #fc4902;
    cursor: pointer;
  }

  img {
    display: flex;
    height: 30px;
    width: 30px;
    padding: 3px;
    border-radius: 10px;
    background-color: #ff3d3d;
  }
  img:hover {
    background-color: #ff0000;
    cursor: pointer;
  }
`

export const CardPlaylist = styled.div`
  display: flex;
  flex-direction: column;
  width: 167px;
  border-radius: 10px;
  background-color: #2d2d2d;
  padding: 20px;
  justify-content: space-between;
  gap: 10px;
  transition-duration: 0.4s;
  
  :hover {
    background-color: #424242;
  }
  
  h3 {
    height: 80px;
  }

  @media screen and (min-device-width : 300px) and (max-device-width : 480px) {
    width: 47%;
    padding: 15px;

    h3 { font-size: 100%; height: 65px;}
  }
  `