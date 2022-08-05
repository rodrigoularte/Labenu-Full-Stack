import { Request, Response } from "express"
import axios from "axios"

export const getAddressInfo = async (req: Request, res: Response): Promise<void> => {

  try {
    const cep = req.params.cep

    const result = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)

    const address = {
      logradouro: result.data.logradouro,
      bairro: result.data.bairro,
      cidade: result.data.localidade,
      estado: result.data.uf
    }

    res.send(address)

  } catch (error: any) {
    res.send(error.message || error.sqlMessage)
  }
}