// using object literal 
const student = { name: 'Sakib al Hasan', job: 'creater' }; //object create using literal

// using object Constructor
const person = new Object();
// console.log(person);

// 
const human2 = Object.create(null);
const human = Object.create(student);
// console.log(human.job);

// class 
class People {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const peop = new People('Manus', 12);
// console.log(peop);

// function 
function Manus(name) {
    this.name = name;
}
const man = new Manus('Kader');
// console.log(man);