let tarefas = [
"Estudar HTML",
"Estudar CSS",
"Praticar JavaScript",
"Estudar Laravel",
"Revisar conteúdo"
];
console.log("Lista antes das alterações:");
console.log(tarefas);

// Removendo "Estudar Laravel"
tarefas.splice(3, 1);

// Substituindo "Estudar CSS" por "Estudar PHP"
tarefas.splice(1, 1, "Estudar PHP");

console.log("Lista depois das alterações:");
console.log(tarefas);