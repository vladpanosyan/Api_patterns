const userData = []
const data = {
    message: 'That id is already exist'
}
class User {
    constructor(name, age, id) {
        this.id = id
        this.name = name;
        this.age = age
    }
    checkExist() {
       console.log(data.message)
    }
}

class Proxy {
    
    constructor(userClone) {
        this.userClone = userClone;
    }
    response() {
        data.password = ~(Math.random() * (123456 - 999999) + 123456)
        console.log(data.password)
    }

    checkExist() {
        const name = this.userClone.name
        const age = this.userClone.age;
        const id = this.userClone.id;
        if(this.finder(userData, id)) {
            this.userClone.checkExist()
        } else {
            userData.push({id, name, age})
            this.response()
        }
    }

    finder(array, id) {
        return array.some(item => item.id === id)
    }

}

let user = new User("John", 50, 1)
let user1 = new User("Sam", 80, 1)

let proxy = new Proxy(user)
let proxy1 = new Proxy(user1)
proxy.checkExist()
proxy1.checkExist()
