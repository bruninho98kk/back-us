class User {
    constructor(nome,sexo) {
        this.id = this.generateiId ();
        this.nome = nome;
        this.sexo = sexo;
       
    }


    generateiId() {
        return Math.floor(Math.random() * 1000000);
    }
}

export default User;


