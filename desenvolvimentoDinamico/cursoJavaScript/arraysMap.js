var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
///////////////////////////
// MAP
var nums = numeros.map(function (valor) {
  return valor * 2;
});
console.log(nums); // [ 2,  4,  6,  8, 10, 12, 14, 16, 18, 20 ]

var funcionarios = [
  { nome: "Luiz", idade: 62 },
  { nome: "Davi", idade: 22 },
  { nome: "Arthur", idade: 18 },
  { nome: "Lucas", idade: 40 },
];

var nomes = funcionarios.map((pessoa) => pessoa.nome);
console.log(nomes); // [ 'Luiz', 'Davi', 'Arthur', 'Lucas' ]

var total = 0;
for (var i = 0; i < numeros.length; i++) {
  total += numeros[i];
}
console.log(total); // 55

//////////////////////////////
// REDUCE
var tot = numeros.reduce(function (total, numero) {
  return total + numero;
});

console.log(tot); // 55
