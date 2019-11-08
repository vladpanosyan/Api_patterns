

// Count all eggs of birds using unified interface "getEggsCount" by es6 inheritence

class Bird  {
    constructor(name, egg, price, count) {
        this.name = name;
        this.egg = egg
        this.eggPrice = price
        this.birdsCount = count

    }

    getEggsCount() {
        return this.egg * this.birdsCount;
    }
}

class Bird1 extends Bird {
    fly = true //expemntal syntax without using constuctor and super
}

class Bird2 extends Bird1 {
    //SOME LOGIC
}

class Bird3 extends Bird1 {
//SOME LOGIC
}

class Bird4 extends Bird1 {
//SOME LOGIC
}

class Bird5 extends Bird3 {
//SOME LOGIC
}
class Bird6 extends Bird3 {
//SOME LOGIC
}

let hen1  = new Bird1('hen1')

let hen2 = new Bird1('hen2', 2, 100, 50)
let hen3 = new Bird1('hen3', 1, 150, 20)
let hen4 = new Bird1('hen4', 3, 25, 10)

let hen5 = new Bird3('hen35', 2, 150, 20)
let hen6 = new Bird3('hen36', 1, 40, 30)

function compositeBirds(allBirds) {
    return allBirds
            .map(bird => bird.getEggsCount())
            .reduce((sum, count) => sum + count)
}
const zatik = compositeBirds([hen2, hen3, hen4, hen5, hen6])
console.log(zatik)

