import PostBusiness from "./business/PostBusiness"
import UserBusiness from "./business/UserBusiness"
import { app } from "./controller/app"
import PostController from "./controller/PostController"
import UserController from "./controller/UserController"
import PostDB from "./data/PostDB"
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

const postController = new PostController(
  new PostBusiness(
    new PostDB(),
    new GenerateId(),
    new HashManager(),
    new Authenticator()
  )
)

//endpoints de usuário
app.post("/signup", userController.signUp)
app.post("/login", userController.login)

//endpoints de post
app.post("/posts", postController.createPost)
app.get("/posts/:id", postController.getPostById)