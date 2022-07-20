import styled from "styled-components"

export const MovieDetailContainer = styled.div `
  display: flex;
  flex-direction: column;
  gap: 20px;

  min-height: 450px;
  width: 100%;
  padding: 50px 10vw 50px 500px;

  background-color: #2D0C5E;
  color: white;
`

export const MoviePoster = styled.img `
  position: absolute;
  top: 100px;
  left: 112px;
`

export const CastContainer = styled.div `
  display: flex;
  flex-direction: column;
  gap: 20px;

  margin-top: 60px;
  padding-left: 112px;
`

export const TrailerContainer = styled.div `
  display: flex;
  flex-direction: column;
  gap: 20px;

  margin-top: 60px;
  padding-left: 112px;
`

export const RecomendationsContainer = styled.div `
  display: flex;
  flex-direction: column;
  gap: 20px;

  margin-top: 60px;
  padding-left: 112px;
`