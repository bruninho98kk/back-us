import User from "./User.js";

class UsersRepository {
    constructor() {
        this.users = [];
    }


    getAllUsers() {
        return this.users;
    }
    addUser (name, email, passaword) {
        const newUser = new User(name, email, passaword)

        this.users.push(newUser);

        return newUser;
    }

    getUserById(id) {
        const user = this.users.find(u => u.id == id)

        return user;
    }




updateUser(id, nome, email, passaword) {
    const user = this.getUserById(id);
        
    if (!user) {
        return null;
    }
 
    user.name = nome;
    user.email = email;
    user.passaword = passaword;

    return user;
    }

    deleteUser(id) {
        const user = this.getUserById(id);

        if (!user) {
            return null;
        }

        this.user = this.users.filter(u => u.id != id);

        return user;
    }
   }

   

export default UsersRepository; 