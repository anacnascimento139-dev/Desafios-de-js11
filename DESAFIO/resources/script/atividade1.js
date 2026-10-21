let senhaCorreta = "1234";
let tentativas = 3;
let senha = prompt("Digite sua senha");

while (senha !== senhaCorreta && tentativas > 1) {

    tentativas = tentativas - 1;

    alert(tentativas + " tentativas restantes");

    senha = prompt("Digite sua senha");
}

if (senha === senhaCorreta) {
    alert("Acesso liberado!");
} else {
    alert("Acesso bloqueado! Você atingiu o limite de 3 tentativas.");
}

console.log(senhaCorreta);