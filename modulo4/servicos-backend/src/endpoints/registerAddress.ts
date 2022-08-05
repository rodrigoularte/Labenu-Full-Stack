import { Request, Response } from "express"
import { insertAddress } from "../data/insertAddress"
import { getAdress } from "../services/getAdress"
import { FullAddress } from "../types"

export const registerAddress = async (req: Request, res: Response): Promise<void> => {

  try {
    const cep = req.body.cep

    const address = await getAdress(cep)

    
    if(!address) {
      throw new Error("Cep inválido.")
    }

    const fullAddress: FullAddress = {
      cep: address.cep,
      logradouro: address.logradouro,
      numero: req.body.numero,
      complemento: req.body.complemento,
      bairro: address.bairro,
      cidade: address.cidade,
      estado: address.estado
    }

    await insertAddress(fullAddress)

    res.status(201).send("Endereço cadastrado com sucesso.")
  } catch (error: any) {
    res.send(error.message || error.sqlMessage)
  }
}