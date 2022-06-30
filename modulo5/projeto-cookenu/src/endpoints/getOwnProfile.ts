import { Request, Response } from "express"

export const login = async (req: Request, res: Response): Promise<void> => {
  let errorCode: number = 400

  try {
    
    const token = req.headers.authorization as string

    

  } catch (error: any) {
    
  }
}