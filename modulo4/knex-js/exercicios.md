### Exercício 1

a)
- A resposta é um array com o resultado da query que enviamos e um array com algumas informações

b)
```
const getActorByName = async (name: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT * FROM Actor WHERE name = "${name}"
  `)

  return result[0][0]
}
```

c)
```
const countActorsByGender = async (gender: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT COUNT(*) as count
    FROM Actor
    WHERE gender = "${gender}";
  `)

  return result[0][0]
}
```

---------------------------------------------------------------------------------

### Exercício 2

a)
```
const changeActorSalary = async (salary: number, id: string): Promise<any> => {
  await connection("Actor")
  .update({salary: salary})
  .where("id", id)
}
```

b)
```
const deleteActorById = async (id: string): Promise<any> => {
  await connection("Actor")
  .delete()
  .where("id", id)
}
```

c)
```
const returnAverageSalary = async (gender: string): Promise<any> => {
  const result = await connection("Actor")
  .avg("salary as averageSalary")
  .where("gender", gender)

  return result[0].averageSalary
}
```

---------------------------------------------------------------------------------

### Exercício 3

a)
```
app.get("/users/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id

   const actor = await getActorById(id)

    res.status(200).send(actor)
  } catch (error: any) {
    res.status(400).send({message: error.message})
  }
})
```

b)
```
app.get("/actor", async (req: Request, res: Response) => {
  try {
    const gender = req.query.gender

    const result = await countActorsByGender(gender as string)

    res.status(200).send({ quantity: result })

  } catch (error: any) {
    res.status(400).send({ message: error.message })
  }
})
```

---------------------------------------------------------------------------------

### Exercício 4

a)
```
app.put("/actor", async (req: Request, res: Response) => {
  try {
    await changeActorSalary(req.body.salary, req.body.id)
    res.status(200).send("Deu certo")

  } catch (error: any) {
    res.status(400).send({ message: error.message })
  }
})
```

b)
```
app.delete("/actor/:id"), async (req: Request, res: Response) => {
  try {
    await deleteActorById(req.params.id)
    res.status(200).send("Deu certo")

  } catch (error: any) {
    res.status(400).send({ message: error.message })
  }
}
```