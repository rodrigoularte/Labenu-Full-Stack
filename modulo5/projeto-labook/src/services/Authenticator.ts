import * as jwt from "jsonwebtoken"
import { AuthenticationData } from "../types"

export class Authenticator {

  public generate(input: AuthenticationData): string {
     
    const token = jwt.sign(
      input,
      String(process.env.JWT_KEY),
      { expiresIn: process.env.ACCESS_TOKEN_EXPIRES_IN }
    )

    return token
  }

  public getTokenData(token: string): AuthenticationData {

    const data = jwt.verify(token, String(process.env.JWT_KEY))

    return data as AuthenticationData
  }
}