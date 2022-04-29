import React from "react"

const Planet = (props) => {

  const planets = ['Mercúrio', 'Vênus', 'Terra', 'Marte', 'Júpiter', 'Saturno', 'Urano', 'Netuno', 'Plutão']
  
  const planetsList = planets.map ((planet) => {
    return <option id={planet} value={planet}
    >
      {planet}
    </option>
  })

  return(
    <select name="planet" id="planet" onChange={props.onChange}>
      <option value="" id="Planeta">Planeta</option>
      {planetsList}
    </select>
  )
}

export default Planet