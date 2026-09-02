const Pessoa = require("./Pessoa");

const BONUS = 0.10;

class Funcionario extends Pessoa {
    #salario;

    constructor(nome, email, salario) {
        super(nome,email);
        this.#salario = salario;
    }
    get salario() {
        return this.#salario;
    }

    calcularBonus() {
        return this.#salario * this.calcularBonus;
    }

    apresentar() {
        super.apresentar();
        console.log("Tipo: Funcionario");
        console.log("Bonus: R$" + this.calcularBonus().topFixed(2))
    }
}

module.exports = Funcionario;