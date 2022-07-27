import {BrowserRouter, Routes, Route} from "react-router-dom"
import MegaSenaPage from "../pages/MegaSenaPage/MegaSenaPage"

const Router = () => {

  return(
    <BrowserRouter>
      <Routes>
        <Route index element={<MegaSenaPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default Router