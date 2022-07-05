import * as bcrypt from "bcryptjs"

class HashManager {

  public hash = async (s: string): Promise<string> => {

    const rounds = Number(process.env.BCRYPT_COST)
    const salt = await bcrypt.genSalt(rounds)
    const result = await bcrypt.hash(s, salt)

    return result
  }

  public compare = async (s: string, hash: string): Promise<boolean> => {

    const result = bcrypt.compare(s, hash)
    
    return result
  }
}

export default HashManager