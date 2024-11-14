class User {
    constructor(name, email, passaword) {
        this.id = this.generateiId ();
        this.name = name;
        this.email = email;
        this.passaword = passaword;
    }


    generateiId() {
        return Math.floor(Math.random() * 999) + 1;
    }
}

export default User;


