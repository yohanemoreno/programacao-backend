const VALOR_MINIMO_FRETE_GRATIS = 100;

class Carrinho {
  #livros;

  constructor() {
    this.#livros = [];
  }
  adicionarLivro(livro) {
    this.#livros.push(livro);
  }

  listar() {
    console.log("--- Itens do carrinho ---");
    this.#livros.forEach((livro) => {
      console.log(livro.titulo + " - R$ " + livro.preco);
    });
  }

  calcularTotal() {
    let total = 0;
    this.#livros.forEach((livro) => {
      total = total + livro.preco;
    });
    return total;
  }

  mostrarStatusFrete(total) {
    if (total > VALOR_MINIMO_FRETE_GRATIS) {
      console.log("Voce ganhou frete gratis!");
    } else {
      const faltam = VALOR_MINIMO_FRETE_GRATIS - total;
      console.log("Faltam R$ " + faltam.toFixed(2) + " para frete gratis.");
    }
  }

  resumo() {
    this.listar();
    const total = this.calcularTotal();
    console.log("Total: R$ " + total.toFixed(2));
    this.mostrarStatusFrete(total);
  }
}

module.exports = Carrinho;
