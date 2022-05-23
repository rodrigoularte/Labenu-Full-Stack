import { useEffect, useState } from "react"
import axios from "axios"


export const useRequestDelete = (url) => {
  // const [data, setData] = useState(undefined)

  useEffect(() => {
    const token = localStorage.getItem("token")
    const headers = { headers: { Authorization: token } }

    axios
      .delete(url, headers)
      .then(() => console.log("Voto retirado"))
      .catch((err) => console.log(err.response.data))
  }, [url])

  // return data
}

