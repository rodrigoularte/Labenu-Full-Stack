import { app } from "./app"
import { getAllUsers } from "./endpoints/getAllUsers"
import { getUserByName } from "./endpoints/getUserByName"
import { getUserByType } from "./endpoints/getUserByType"
import { getAllUsersOrdered } from "./endpoints/getAllUsersOrdered"
import { sortUsersByPage } from "./endpoints/sortUsersByPage"
import { getUsersAndSort } from "./endpoints/getUsersAndSort"

app.get("/users", getAllUsers)

app.get("/users/name", getUserByName)

app.get("/users/order", getAllUsersOrdered)

app.get("/users/pg", sortUsersByPage)

app.get("/users/all", getUsersAndSort)

app.get("/users/:type", getUserByType)

