import { app } from "./app"
import { createUser } from "./endpoints/createUser"

import { Request, Response } from "express"
import { generateId } from "./services/generateId";
import { generateToken } from "./services/generateToken";
import { insertUser } from "./data/UserDB";
import { getUserByEmail } from "./endpoints/getUserByEmail";
import { getUserById } from "./endpoints/getUserById";


app.post("/user/signup", createUser)

app.post("/user/login", getUserByEmail)

app.get("/user/profile", getUserById)