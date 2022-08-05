import React, { useEffect, useState } from "react"
import axios from "axios"
import GlobalContext from "./GlobalContext"

const GlobalState = (props) => {

  const [lotteries, setLotteries] = useState([])
  const [lotteryId, setLotteryId] = useState("")
  const [lotteryName, setLotteryName] = useState("")
  const [contests, setContests] = useState([])
  const [contestData, setContestData] = useState({})
  const [numbers, setNumbers] = useState([])
  const [apiDate, setApiDate] = useState("")

  // console.log(lotteries)
  // console.log(lotteryId)
  // console.log(contests)
  // console.log(contestData)
  // console.log(numbers)


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

    const contestId = contests?.find((lottery) => {
      return lottery.loteriaId === Number(lotteryId)
    })

    axios
     .get(`https://brainn-api-loterias.herokuapp.com/api/v1/concursos/${contestId?.concursoId}`)
     .then( res => {
      setContestData(res.data)
      setNumbers(res.data.numeros)
      setApiDate(res.data.data)
    })
     .catch( err => console.log(err.response))
  }

  useEffect(() => {
    getLotteries()
    getContests()
    getContestData()
  }, [lotteryId])

  const states = {lotteries, lotteryId, lotteryName, contests, contestData, numbers, apiDate}
  const setters = {setLotteries, setLotteryId, setLotteryName, setContests, setContestData, setNumbers}
  const requests = {getLotteries, getContests, getContestData}

  return(
    <GlobalContext.Provider value={{states, setters, requests}}>
      {props.children}
    </GlobalContext.Provider>
  )
}

export default GlobalState