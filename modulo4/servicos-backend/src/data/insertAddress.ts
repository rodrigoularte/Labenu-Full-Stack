import { FullAddress } from "../types"
import connection from "./connection"

export const insertAddress = async (address: FullAddress) => {

  const { cep, logradouro, numero, complemento, bairro, cidade, estado } = address

  await connection("Endereco")
    .insert({
      cep,
      logradouro,
      numero,
      complemento,
      bairro,
      cidade,
      estado
    })
}