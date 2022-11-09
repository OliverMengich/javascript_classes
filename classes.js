/* Classes arent hoisted
Classes changes get passed down. Inheritance
Can be degined by class decoration and Class expression
1. Class expression
var Car = class{
    constructor(doors,engine,color){
        this.doors = doors
        this.engine = engine
        this.color = color
    }
}
2. Class decoration
class Car{
    constructor(doors,engine,color){
        this.doors = doors
        this.engine = engine
        this.color = color
    }
    carStats(){
        return `car of ${this.engine} engine has ${this.doors} and with ${this.color} color`
    }
}
*/
console.log(Hi());
class Car{
    constructor(doors,engine,color) {
        this.doors = doors,
        this.engine = engine,
        this.color = color
    }
    carStats() {
        return `this car has ${this.doors} doors,a  ${this.engine} engine with a beautiful ${this.color} color`;
    }
}
const cx5 = new Car(4, 'V8', 'RED');
console.log(cx5);
console.log(cx5.carStats());
function Hi() {
    return `you can call me anywhere`
}
/*
  Functions are hoisted, classes arent. you first have to declare your class before you actually use it.
  functions extensions can be overwritted. classes cannot be overwritten but can be extended
*/
/*------------------------Strict mode in classes-----------------
strict mode adds some errors as throw errors that were silent before. makes us more aware of
certain types of errors we didn't have before and also helps with performance e.g speed

----------------------Static methods---------------------
methods that aren't accessible through an instance of a class but only available through the class itself.
usually created for utility functions that don't relate to the instance of a class
*/
class Person{
    constructor(legs,arms,name) {
        this.legs = legs,
        this.arms = arms,
        this.name = name
    }
    stats() {
        return `${this.name} is a persn with ${this.arms} arms and ${this.legs} legs`;
    }
    static totalInfo(p1, p2) {
        const legs1 = p1.legs;
        const legs2 = p2.legs;
        return `total legs for the two people are ${legs1 + legs2}`;
    }
}
//to access the static method, pass in the class itself
const p1 = new Person(2, 2, 'Leon');
const p2 = new Person(2, 2, 'Brad');
// console.log(Person.totalInfo(p1, p2));
// console.log(p1);

/*
//---------------------------------- Prototypes methods explained--------------------------
methods you can use in the prototype of a class
*/