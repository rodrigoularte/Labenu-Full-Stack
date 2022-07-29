import React, { useEffect, useState } from "react"
import axios from "axios"
import GlobalContext from "./GlobalContext"

const GlobalState = (props) => {

  const [lotteries, setLotteries] = useState([])
  const [lotteryId, setLotteryId] = useState(0)
  const [contests, setContests] = useState([])
  // const [contestId, setContestId] = useState("2359")
  const [contestData, setContestData] = useState({})
  const [numbers, setNumbers] = useState([])

  // console.log(lotteries)
  // console.log(lotteryId)
  // console.log(contestData)
  console.log(numbers)


  const getLotteries = () => {
    axios
     .get("https://brainn-api-loterias.herokuapp.com/api/v1/loterias")
     .then( res => setLotteries(res.data))
     .catch( err => console.log(err.response))
  }

  const getContests = () => {
    axios
     .get("https://brainn-api-loterias.herokuapp.com/api/v1/loterias-concursos")
     .then( res => setContests(res.data))
     .catch( err => console.log(err.response))
  }


  const getContestData = () => {

    console.log(contests, lotteryId)

    const contestId = contests?.find((lottery) => {
      return lottery.loteriaId === Number(lotteryId)
    })

    axios
     .get(`https://brainn-api-loterias.herokuapp.com/api/v1/concursos/${contestId?.concursoId}`)
     .then( res => {
      setContestData(res.data)
      setNumbers(res.data.numeros)
    })
     .catch( err => console.log(err.response))
  }

  useEffect(() => {
    getLotteries()
    getContests()
    getContestData()
  }, [lotteryId])

  const states = {lotteries, lotteryId, contests, contestData, numbers}
  const setters = {setLotteries, setLotteryId, setContests, setContestData, setNumbers}
  const requests = {getLotteries, getContests, getContestData}

  return(
    <GlobalContext.Provider value={{states, setters, requests}}>
      {props.children}
    </GlobalContext.Provider>
  )
}

export default GlobalState