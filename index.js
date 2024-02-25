class classe{
    constructor (name, age, type){
        this.name = name
        this.age = age
        this.type = type
        this.ataque
    }

    atacar(){
        this.type.charAt(0).toUpperCase() + this.type.slice(1)
        if(this.type === "Mago"){
            this.ataque = "usou magia"
        } else if(this.type === "Guerreiro"){
            this.ataque = "usou espada"
        } else if(this.type === "Monge"){
            this.ataque = "usou artes marciais"
        } else if(this.type === "Ninja"){
            this.ataque = "usou shuriken"
        } else {
            console.log(`A classe ${this.type} não existe.`)
        }
        if(this.ataque !== undefined){
            console.log(`O ${this.type} atacou usando ${this.ataque}`)
        }
    }

}



let personagem1 = new classe("Apolo, The Cat", 28, "ninja")

personagem1.atacar()