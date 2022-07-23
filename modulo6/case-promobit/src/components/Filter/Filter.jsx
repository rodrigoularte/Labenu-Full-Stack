import React from "react"
import { ButtonsContainer, FilterContainer } from "./styled"
import { FilterButton } from "../../styled/Buttons"

const Filter = (props) => {

  const genreButtons = props.allGenres.map((genre) => {

    if (genre.select === false) {
      return (
        <FilterButton key={genre.id} select={genre.select} onClick={() => props.onClickFilter(genre.id)}>
          {genre.name}
        </FilterButton>
      )
    } else {
      return <FilterButton key={genre.id} select={genre.select} onClick={() => props.onClickFilter(genre.id)}>
        {genre.name}
      </FilterButton>
    }
  })

  return (
    <FilterContainer>
      <h1>Milhões de filmes, séries e pessoas para descobrir. Explore já.</h1>
      <p>FILTRE POR:</p>
      <ButtonsContainer>
        {genreButtons}
      </ButtonsContainer>
    </FilterContainer>
  )
}

export default Filter