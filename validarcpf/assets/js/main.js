let cpf = '431.905.040-16'
let cpfLimpo = cpf.replace(/\D+/g, '');
cpfArray = Array.from(cpfLimpo);

cpfPrimeiroDigito = cpfArray.map(function (valor, indice) {
    return valor * ((indice - 10) * -1);
});

cpfSegundoDigito = cpfArray.map(function (valor, indice) {
    return valor * ((indice - 11) * -1);
});

let somaUm = cpfPrimeiroDigito.reduce(function (acumulador, valor, indice) {
    if (indice <= 8) acumulador += valor;
    return acumulador
}, 0);

let somaDois = cpfSegundoDigito.reduce(function (acumulador, valor, indice) {
    if (indice <= 9) acumulador += valor;
    return acumulador
}, 0);

let primeiroDigito = 11 - (somaUm % 11);
let segundoDigito = 11 - (somaDois % 11);

console.log(primeiroDigito);
console.log(segundoDigito);
