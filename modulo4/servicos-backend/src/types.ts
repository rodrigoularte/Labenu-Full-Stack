export type Address = {
  cep: string,
  logradouro: string,
  bairro: string,
  cidade: string,
  estado: string
}

export type FullAddress = {
  cep: string,
  logradouro: string,
  numero: number,
  complemento: string,
  bairro: string,
  cidade: string,
  estado: string
}