import express, { Request, Response } from "express"
import cors from "cors"
import connection from "./connection"

const app = express()

app.use(express.json())
app.use(cors())

app.listen(3003, () => {
  console.log("O servidor está rodando em http://localhost:3003")
})


app.get("/actor", async (req: Request, res: Response) => {
  try {
    const result = await connection.raw(`
      SELECT * FROM Actor
    `)
    res.send(result)
  } catch (error: any) {
    res.status(500).send("Um erro inesperado ocorreu.")
    // res.send("Um erro inesperado ocorreu.")
  }
})


// Função que busca ator pelo id
const getActorById = async (id: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT * FROM Actor WHERE id = '${id}'
  `)

  return result[0][0]
}


// MODO 1: Assim a chamada funciona fora dos endpoints com .then()/.catch
// getActorById("001")
// 	.then(result => {	console.log(result)	})
// 	.catch(err => {	console.log(err) });

// MODO 2: Assim a chamada funciona fora dos endpoints com await
// (async () => {
//   console.log(await getActorById("001") )
// })()


// MODO 3: Ou então podemos chamá-la dentro de um endpoint
// app.get("/users/:id", async (req: Request, res: Response) => {
//   try {
//     const id = req.params.id

//     console.log(await getActorById(id))

//     res.end()
//   } catch (error: any) {
// 		console.log(error.message)
//     res.status(500).send("Unexpected error")
//   }
// })


//Função que busca ator pelo nome
const getActorByName = async (name: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT * FROM Actor WHERE name = "${name}"
  `)

  return result[0][0]
}

//Chamando a função com o nome a ser buscado no banco como parâmetro
// getActorByName("Tony Ramos")
// .then(result => { console.log(result) })
// .catch(err => { console.log(err) })


// Função que recebe um gender e retorna a quantidade de itens na tabela Actor com esse gender.
const countActorsByGender = async (gender: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT COUNT(*) as count
    FROM Actor
    WHERE gender = "${gender}";
  `)

  return result[0][0].count
}

// countActorsByGender("female")
// .then(result => { console.log(result) })
// .catch(err => { console.log(err) })

//-------------------------------------------------------------------------

//Função que receba um salário e um id e realiza a atualização do salário do ator em questão
const changeActorSalary = async (salary: number, id: string): Promise<any> => {
  await connection("Actor")
    .update({ salary: salary })
    .where("id", id)
}

// changeActorSalary(550000, "001")

//-------------------------------------------------------------------------

//Função que receba um id e delete um ator da tabela
const deleteActorById = async (id: string): Promise<any> => {
  await connection("Actor")
    .delete()
    .where("id", id)
}

// deleteActorById("007")

//-------------------------------------------------------------------------

//Função que receba um gender e devolva a média dos salários de atrizes ou atores desse gender

const returnAverageSalary = async (gender: string): Promise<any> => {
  const result = await connection("Actor")
    .avg("salary as averageSalary")
    .where("gender", gender)

  return result[0].averageSalary
}

// returnAverageSalary("female")
// .then(result => { console.log(result) })
// .catch(err => { console.log(err) })

//-------------------------------------------------------------------------

// Pega ator pelo id
app.get("/users/:id", async (req: Request, res: Response) => {
  try {
    const id: string = req.params.id

    const actor = await getActorById(id)

    res.status(200).send(actor)
  } catch (error: any) {
    res.status(400).send({ message: error.message })
  }
})

//-------------------------------------------------------------------------

// Pega ator pelo gênero
// app.get("/actor", async (req: Request, res: Response) => {
//   try {
//     const gender = req.query.gender

//     const result = await countActorsByGender(gender as string)

//     res.status(200).send({ quantity: result })

//   } catch (error: any) {
//     res.status(400).send({ message: error.message })
//   }
// })

//-------------------------------------------------------------------------

// endpoint para criar ator
const createActor = async (
  id: string,
  name: string,
  salary: number,
  dateOfBirth: Date,
  gender: string
): Promise<void> => {
  await connection
    .insert({
      id: id,
      name: name,
      salary: salary,
      birth_date: dateOfBirth,
      gender: gender,
    })
    .into("Actor")
}

app.post("/actor", async (req: Request, res: Response) => {
  try {
    await createActor(
      req.body.id,
      req.body.name,
      req.body.salary,
      new Date(req.body.dateOfBirth),
      req.body.salary
    )

    res.status(200).send("Deu certo")
  } catch (err: any) {
    res.status(400).send({ message: err.message, })
  }
})

//-------------------------------------------------------------------------

// Endpoint para atualizar salário com id

app.put("/actor", async (req: Request, res: Response) => {
  try {
    await changeActorSalary(req.body.salary, req.body.id)
    res.status(200).send("Deu certo")

  } catch (error: any) {
    res.status(400).send({ message: error.message })
  }
})

//-------------------------------------------------------------------------

// Endpoint para deletar ator da tabela

app.delete("/actor/:id"), async (req: Request, res: Response) => {
  try {
    await deleteActorById(req.params.id)
    res.status(200).send("Deu certo")

  } catch (error: any) {
    res.status(400).send({ message: error.message })
  }
}
