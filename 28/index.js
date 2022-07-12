const numero = Number(prompt ('digite um valor'));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');
const texto2 = document.getElementById('texto2');
const texto3 = document.getElementById('texto3');
const texto4 = document.getElementById('texto4');
const texto5 = document.getElementById('texto5');
const texto6 = document.getElementById('texto6');


numeroTitulo.innerHTML = numero;

texto.innerHTML = `<p>a raiz de seu numero é: ${numero ** 0.5}.</p>`;
 

if (Number.isInteger(numero) == true) {
    texto2.innerHTML = `<p> ${numero} é inteiro. </p>`
}else {
    texto2.innerHTML = `<p> ${numero} n é inteiro. </p>`
};

if (Number.isNaN(numero) == false) {
    texto3.innerHTML = `<p> ${numero} é um numero. </p>`
}else {
    texto3.innerHTML = `<p> ${numero} n é um numero. </p>`
};

texto4.innerHTML = `<p>o seu numero arredondado para baixo é: ${Math.floor(numero)}.</p>`;

texto5.innerHTML = `<p>o seu numero arredondado para cima é: ${Math.ceil(numero)}.</p>`;

texto6.innerHTML = `<p>o seu numero com 2 casa decimais é: ${numero.toFixed(2)}.</p>`;