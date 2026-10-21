let livros = [
    "O Pequeno Príncipe",
    "Harry Potter",
    "Dom Casmurro",
    "A Culpa é das Estrelas",
    "O Hobbit"
];

let posicao = livros.indexOf("Dom Casmurro");

if (posicao === -1) {
    console.log("Livro não encontrado.");
} else {
    console.log("Livro encontrado na posição " + posicao + ".");
}