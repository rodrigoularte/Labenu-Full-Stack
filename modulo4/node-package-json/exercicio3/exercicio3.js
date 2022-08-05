const tarefas = ["Lavar louça"]

const novaTarefa = tarefas.push(process.argv[2])

console.log("Tarefa adicionada com sucesso!")
console.log("tarefas:", tarefas)