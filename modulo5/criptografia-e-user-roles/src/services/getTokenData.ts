import * as jwt from "jsonwebtoken"
import { AuthenticationData } from "../types"

export const getTokenData = (token: string): AuthenticationData | null => {
  try {
    const {id} = jwt.verify(token, String(process.env.JWT_KEY)) as AuthenticationData

    return {id}

  } catch (error) {
    {return null}
  }
}