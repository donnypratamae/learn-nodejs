// console.log('Hello World');

function printAge(age) {
    return `How old you? ${age}`;
}

// console.log(printAge('19 y.o'));

const PI = 3.14;

const student = {
    nama: 'Adel',
    age: 19,
    printStudent() {
        return `Hello, my name is ${this.nama} and me ${this.age} years old.`;
    },
};

class People {
    constructor() {
        console.log('The Object Poeple has been created');
    }
}

// use module.exports to export all code to index (its mean require)
// module.exports.printAge = printAge; // add an methode but still take function what we're going for 
// module.exports.PI = PI; // add an property
// module.exports.student = student;
// module.exports.People = People;

// simple trick to call module in one time
// module.exports = {
//     // write the object here (below)
//     printAge: printAge,
//     PI: PI,
//     student: student,
//     People: People,
// }

// if there is same name (property & value)
module.exports = {
    printAge,
    PI,
    student,
    People
};