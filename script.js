function inserirNome(){
    let nomeUsuario = prompt ("Qual o seu nome?");
    let elemento = document.querySelector("#nome-usuario");
    elemento.textContent = nomeUsuario;
}
inserirNome();
let linguagens = ["javascript", "phyton", "C"];

const item = document.querySelector("#lista");
item.textContent = linguagens[0];