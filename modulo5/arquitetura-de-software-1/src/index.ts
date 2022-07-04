import { app } from "./app"
import { signUp } from "./controller/signUp"
// import { signUp } from "./endpoints/signUp"


app.post("/signup", signUp)