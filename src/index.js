function verifica() {
    let select = document.getElementById("select");
    let valorSelecionado = select.value;
    let res = document.getElementById("resultado");

    if (valorSelecionado === "normal") {
        res.innerHTML = "Hello World!!";
    } else if (valorSelecionado === "maiusculo") {
        res.innerHTML = "HELLO WORLD!!";
    } else if (valorSelecionado === "minusculo") {
        res.innerHTML = "Hello World!!";
    } else if (valorSelecionado === "verde") {
        res.style.color = "green";
        res.innerHTML = "Hello World!!";
    } else if (valorSelecionado === "vermelho") {
        res.style.color = "red";
        res.innerHTML = "Hello World!!";
    } else if (valorSelecionado === "roxo") {
        res.style.color = "purple";
        res.innerHTML = "Hello World!!";
    } else if (valorSelecionado === "invertido") {
        res.innerHTML = "Hello World!!".split('').reverse().join('');
    } else if (valorSelecionado === "traduzido") {
        res.innerHTML = "Olá Mundo!!";
    } else if (valorSelecionado === "japones") {
        res.innerHTML = "これは日本語のテキストです。";
    } else if (valorSelecionado === "alerta") {
        alert("Hello World!!");
       
    } else if (valorSelecionado === "emoji") {
        res.innerHTML = "😀 😃 😄 😁";
    } else {
        res.innerHTML = "Selecione uma opção.";
    }
}
