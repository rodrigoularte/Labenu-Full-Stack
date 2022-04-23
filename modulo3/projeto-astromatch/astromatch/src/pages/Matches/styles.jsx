import styled from "styled-components"

// styled Matchesg

export const ContainerPagina = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 90vh;
  margin-top: 5vh;
  border: 1px solid black;
  background-color: #C5D9D9;
  border-radius: 10px;
`

export const ContainerLista = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  /* height: 90vh; */
  padding: 15px;
`

export const ContainerMatch = styled.div`
  display: flex;
  align-items: center;
  background-color: #cd4651;
  color: #C5D9D9;
  padding: 10px;
  margin-bottom: 15px;
  gap: 15px;
  border-radius: 10px;
  transition-duration: 0.4s;

  :hover {
    background-color: #BF1717;
  }
`


export const PerfilImg = styled.img`
  height: 50px;
  width: 50px;
  /* margin-right: 10px; */
  border-radius: 50%;
`
