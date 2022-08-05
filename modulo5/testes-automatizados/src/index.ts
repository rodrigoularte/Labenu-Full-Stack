import { User } from "./types"

export function performPurchase(user: User, value: number): User | undefined {

  if(user.balance >= value) {
    const newBalance = user.balance - value
    const newUser = {...user, balance: newBalance}

    return newUser
  } else {
    return undefined
  }
}



console.log(performPurchase({name: "Gabriel", balance: 2000}, 200))