import styled from "styled-components"

// styled Home

export const ContainerHome = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 90vh;
  margin-top: 5vh;
  border: 3px solid #2d3a3a;
  background-color: white;
  border-radius: 10px;

  @media screen and (min-device-width : 300px) and (max-device-width : 480px) {
    width: 90vw;
  }
`

export const Perfil = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 20px 20px 0;
`

export const ContainerFoto = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: #2d3a3a;
  flex-grow: 1;
  max-width: 100%;
  height: 400px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 10px;
`

export const FotoBlur = styled.img`
  position: absolute;
  width: 100%;
  height: 95%;
  filter: blur(10px);
  border-radius: 10px;
`

export const Foto = styled.img`
  position: absolute;
  max-width: 100%;
  height: 100%;
  border-radius: 10px;
  transform: scaleY(1);
`

export const ContainerDescricao = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 10px;
  gap: 10px;
  position: absolute;
  bottom: 0;
  width: 100%;
  max-height: 130px;
  color: white;
  text-shadow: 1px 1px 2px black;
  background-image: linear-gradient(to bottom, rgba(255,0,0,0), rgba(0,0,0,1));
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
`
export const NomeIdade = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 5px;

  h2{
    font-size: 1.5em;
  }
`
export const Descricao = styled.p`
  max-height: 70px;
`