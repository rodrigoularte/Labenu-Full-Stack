import * as jwt from "jsonwebtoken"
import { AuthenticationData } from "../types"

const expiresIn = "50min"

export const generateToken = (input: AuthenticationData): string => {

  const token = jwt.sign(
    input,
    String(process.env.JWT_KEY),
    { expiresIn }
  )

  return token
}