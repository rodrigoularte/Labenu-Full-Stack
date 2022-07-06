import UserBusiness from "./business/UserBusiness"
import { app } from "./controller/app"
import UserController from "./controller/UserController"
import UserDB from "./data/UserDB"
import { Authenticator } from "./services/Authenticator"
import { GenerateId } from "./services/GenerateId"
import HashManager from "./services/HashManager"

const userController = new UserController(
  new UserBusiness(
    new UserDB(),
    new GenerateId(),
    new HashManager(),
    new Authenticator()
  )
)

app.post("/signup", userController.signUp)