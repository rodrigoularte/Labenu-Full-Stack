import { app } from "./app"
import { createRecipe } from "./endpoints/createRecipe"
import { getOwnProfile } from "./endpoints/getOwnProfile"
import { getProfileById } from "./endpoints/getProfileById"
import { getRecipeById } from "./endpoints/getRecipeById"
import { login } from "./endpoints/login"
import { signUp } from "./endpoints/signUp"


app.post("/signup", signUp)
app.post("/login", login)
app.get("/user/profile", getOwnProfile)
app.get("/user/:id", getProfileById)

app.post("/recipe", createRecipe)
app.get("/recipe/:id", getRecipeById)