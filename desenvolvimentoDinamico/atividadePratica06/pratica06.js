var valor = "cafe";

switch (valor) {
  case "cafe":
    console.log(`Bebida escolhida: ${valor} --> Valor a ser pago: R$ 2,50`);
    break;

  case "leite":
    console.log(`Bebida escolhida: ${valor} --> Valor a ser pago: R$ 3,00`);
    break;

  case "cha":
    console.log(`Bebida escolhida: ${valor} --> Valor a ser pago: R$ 3,50`);
    break;

  default:
    console.log("A escolha deve ser feita entre: café, leite ou chá.");
}
