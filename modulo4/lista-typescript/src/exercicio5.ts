enum ROLE {
  USER = "user",
  ADMIN = "admin"
}

type Usuarios = {
  name: string,
  email: string,
  role: string
}

const listaDeUsuarios = [
	{name: "Rogério", email: "roger@email.com", role: ROLE.USER},
	{name: "Ademir", email: "ademir@email.com", role: ROLE.ADMIN},
	{name: "Aline", email: "aline@email.com", role: ROLE.USER},
	{name: "Jéssica", email: "jessica@email.com", role: ROLE.USER},  
	{name: "Adilson", email: "adilson@email.com", role: ROLE.USER},  
	{name: "Carina", email: "carina@email.com", role: ROLE.ADMIN}      
]

function retornaAdmin(infos: Usuarios[]): string[] {
  const listaDeAdmin: string[] = []

  infos.map((info: Usuarios) => {
    if(info.role === ROLE.ADMIN) {
      listaDeAdmin.push(info.email)
    }
  })

  return listaDeAdmin
}

console.log(retornaAdmin(listaDeUsuarios))