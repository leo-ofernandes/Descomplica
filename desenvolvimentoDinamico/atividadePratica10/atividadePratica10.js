// Criando classe Funcionarios
class Funcionarios {
  constructor(nome, idade, cargo) {
    this.nome = nome;
    this.idade = idade;
    this.cargo = cargo;
  }

  seApresentar() {
    console.log(
      `Olá, meu nome é ${this.nome}, tenho ${this.idade} anos de idade e sou ${this.cargo}.`
    );
  }

  trabalhar() {
    console.log(`${this.nome} está trabalhando.`);
  }
}

// Criando classe Gerente
class Gerente extends Funcionarios {
  constructor(nome, idade, cargo, departamento) {
    super(nome, idade, cargo);
    this.departamento = departamento;
  }

  gerenciar() {
    console.log(
      `${this.nome} é gerente do departamento de ${this.departamento}.`
    );
  }
}

// Criando classe Desenvolvedor
class Desenvolvedor extends Funcionarios {
  constructor(nome, idade, cargo, linguagem) {
    super(nome, idade, cargo);
    this.linguagem = linguagem;
  }

  programar() {
    console.log(`${this.nome} está programando em ${this.linguagem}.`);
  }
}

// Criando instância de um gerente
const gerente1 = new Gerente("João Silva", 40, "Gerente de Projetos", "TI");
gerente1.seApresentar();
gerente1.trabalhar();
gerente1.gerenciar();

// Criando instância de um desenvolvedor
const dev1 = new Desenvolvedor(
  "Maria Souza",
  26,
  "Desenvolvedora",
  "JavaScript"
);
dev1.seApresentar();
dev1.trabalhar();
dev1.programar();
