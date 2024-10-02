class Heroi{
    constructor(nome, idade, tipo){
        this.d = {"mago": "magia", "guerreiro": "espada", "monge": "artes marciais", "ninja": "shuriken"}

        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }

    atacar() {
        console.log("O " + this.tipo + " atacou usando " + this.d[this.tipo])
    }
}

let instanciaHeroi = new Heroi("Jones", 31, "guerreiro");
instanciaHeroi.atacar();

let instanciaSegundoHeroi = new Heroi("Marcos", 25, "ninja");
instanciaSegundoHeroi.atacar();