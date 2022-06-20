//Exercício 2
export type Task = {
  userId: number,
  id: number,
  title: string,
  completed: boolean
}

//Exercício 3
export const toDoList: Task[] = [
  {
    userId: 1,
    id: 10,
    title: "Estudar",
    completed: true
  },
  {
    userId: 1,
    id: 11,
    title: "Cozinhar",
    completed: false
  },
  {
    userId: 2,
    id: 20,
    title: "Martelar parede",
    completed: false
  },
  {
    userId: 2,
    id: 21,
    title: "Jogar bola",
    completed: true
  },
  {
    userId: 3,
    id: 30,
    title: "Limpar casa",
    completed: false
  }
]