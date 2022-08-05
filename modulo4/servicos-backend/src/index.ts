import { app } from "./app"
import axios from "axios"
import { getAddressInfo } from "./endpoints/getAddressInfo"
import { registerAddress } from "./endpoints/registerAddress"

app.get("/address/:cep", getAddressInfo)

app.post("/address", registerAddress)