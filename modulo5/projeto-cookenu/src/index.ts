import { app } from "./app"
import { getOwnProfile } from "./endpoints/getOwnProfile"
import { login } from "./endpoints/login"
import { signUp } from "./endpoints/signUp"

app.post("/signup", signUp)
app.post("/login", login)
app.get("/user/profile", getOwnProfile)