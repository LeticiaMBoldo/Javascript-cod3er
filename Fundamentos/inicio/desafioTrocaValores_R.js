let a = 7;
let b = 94;

console.log("variavel A: " + a);
console.log("variavel B: " + b);

console.log("Realizando a troca de valores");

let temp = a;
a = b;
b = temp;

console.log("variavel A: " + a);
console.log("variavel B: " + b);

console.log("Voltando os valores trocados anteriormente");

[a, b] = [b, a];

console.log("variavel A: " + a);
console.log("variavel B: " + b);
