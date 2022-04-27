import React from "react"
import { useProtectedPage } from "../components/useProtectedPage"

function CreateTripPage() {

  useProtectedPage()
  
  return (
    <div>
      CreateTripPage
    </div>
  )
}

export default CreateTripPage