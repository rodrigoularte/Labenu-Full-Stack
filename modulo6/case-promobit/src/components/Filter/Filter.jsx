import React from "react"
import { Button } from "@mui/material"
import { FilterContainer } from "./styled"
import { FilterButton } from "../../styled/Buttons"

const Filter = () => {

  return (
    <FilterContainer>
      <h1>Milhões de filmes, séries e pessoas para descobrir. Explore já.</h1>
      <p>FILTRE POR:</p>
      <div>
        <FilterButton>Ação</FilterButton>
      </div>
    </FilterContainer>
  )
}

export default Filter