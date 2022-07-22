import styled from "styled-components"

export const MovieDetailContainer = styled.div `
  display: flex;
  flex-direction: column;
  gap: 20px;

  min-height: 600px;
  width: 100%;
  padding: 50px 10vw 50px 540px;

  background-color: #2D0C5E;
  color: white;
`

export const MoviePoster = styled.img `
  position: absolute;
  top: 100px;
  left: 112px;

  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 8px;
`

export const CastContainer = styled.div `
  display: flex;
  flex-direction: column;
  gap: 20px;

  margin-top: 60px;
  padding-left: 112px;
`

export const CastMenu = styled.nav `
  display: flex;
  width: 95%;
  gap: 20px;
  padding-bottom: 20px;
  overflow-x: auto;

  ::-webkit-scrollbar{
    height: 12px;
    background: #DDDDDD;
    border-radius: 100px;
  }

  ::-webkit-scrollbar-thumb{
    background: #ADADAD;
    border-radius: 100px;
  }
`

export const TrailerContainer = styled.div `
  display: flex;
  flex-direction: column;
  gap: 20px;

  margin-top: 60px;
  padding-left: 112px;
`

export const RecommendationsContainer = styled.div `
  display: flex;
  flex-direction: column;
  gap: 20px;

  margin-top: 60px;
  padding-left: 112px;
`

export const Recommendations = styled.div `
  display: flex;
  flex-wrap: wrap;
  gap: 60px;
`