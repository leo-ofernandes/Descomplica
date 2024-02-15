var valores = [8, 1, 7, 2, 9];

console.log(valores[3]);
///////////////////////////////////
// REVERSE
console.log("Array invertido: " + valores.reverse());

for (var pos = 0; pos < valores.length; pos++) {
  console.log(`Posição: ${pos} --> ` + "Valor: " + valores[pos]);
}

var carros = [];
carros[0] = "Volvo";
carros[1] = "Jeep";

var motos = new Array("BMW", "Yamaha", "Honda");

// Calcular a média de todos os números de um array
var soma = 0;
for (var pos = 0; pos < valores.length; pos++) {
  soma += valores[pos];
}

var media = soma / valores.length;
console.log(`A média de todos os números do array 'valores' é: ${media}`);

///////////////////////////////
// JOIN
var arr1 = [1, 2, 3, 4, 5, 6];

console.log(arr1.join("|")); // 1|2|3|4|5|6

/////////////////////////////////
// SHIFT
var retirado = arr1.shift();

console.log(retirado);

console.log(arr1);

console.log("Posição do número 3: " + arr1.indexOf(3));

////////////////////////////////////
// PUSH
arr1.push(7);

console.log(arr1);

//////////////////////////////////
// POP
arr1.pop();

console.log(arr1);

var arr2 = [1, 2, 3, 4, 5, 6, 7];

////////////////////////////////
// SPLICE
arr2.splice(2, 2);

console.log(arr2);

var nomes = ["Maria", "João", "Lucas", "Pedro"];

var novos = nomes.splice(1, 2, "Luiz", "Ronaldo"); // splice ALTERA o array original
console.log(nomes);
console.log(novos);

/////////////////////////////
// UNSHIFT
var pais = ["Brasil", "Argentina", "Colombia"];

pais.unshift("Uruguai");

console.log(pais);

//////////////////////////
// SLICE
var pessoa = ["Eduardo", "Joana", "Wallace", "Rosana"];
var gerente = ["Davi", "Manuela"];
var pessoas1 = pessoa.slice(1, 3); // slice NÃO ALTERA o array original
console.log(pessoa);
console.log(pessoas1);

/////////////////////////////////////
// CONCAT
var empresa = pessoa.concat(gerente);
console.log(empresa);
