import React, { useState } from "react"
import axios from "axios"
import GlobalContext from "./GlobalContext"

const GlobalState = (props) => {

  const [lotteries, setLotteries] = useState([])

  const getLotteries = () => {
    axios
     .get("https://brainn-api-loterias.herokuapp.com/api/v1/loterias")
     .then( res => console.log(res.data))
     .catch( err => console.log(err.response))
  }

  const states = {lotteries}
  const setters = {setLotteries}
  const requests = {getLotteries}

  return(
    <GlobalContext.Provider value={{states, setters, requests}}>
      {props.children}
    </GlobalContext.Provider>
  )
}

export default GlobalState