class Person {}; 

const me = new Person(); 

const bob = new Person(); 

console.log(bob); 

console.log(typeof(me)); 
console.log(typeof(bob)); 

class Person {
    greet(){
        console.log("Hi how is it going y'all ? ")
    }
}; 

const me = new Person(); 

me.greet()

class Person {
    greet(otherperson){
        console.log('Hello ' + otherperson + ' how has your day been  ? ')
    }
    jump(){
        console.log('weeeeeeee!'); 
    }
};

const me = new Person

me.greet('Anthony')

me.jump()

class Person { 
    greet(otherperson){
        console.log('hi ' + otherperson + ' !' )
    }
    jump(){
        console.log('weeeeeee!')
    }
}; 

const me = new Person(); 

console.log(me); 

class Person {
    constructor(){

        this.legs = 2;
        this.arms = 2;
        this.eyes = 'blue'; 
        this.hair = 'blonde'; 
    }
    greet(otherperson){
        console.log('hi ' + otherperson + '!')
    }
    jump(){
        console.log('weeeeeeeee!')
    }
}; 

const me = new Person(); 

console.log(me); 

class Person {
    constructor(name, age, eyes, hair){
        this.lesgs = 2; 
        this.arms = 2; 
        this.name = name; 
        this.age = age; 
        this. eyes = eyes; 
        this.hair = hair;
    }
    greeti(otherperson){
        console.log('hi' + otherperson + " !")
    }
    jump(){
        console.log('weeeeee!')
    }
}; 

const me = new Person ('Anthony',26,'Brown','Black'); 

console.log(me); 

me.hair = 'red'; 

console.log(me); 

class Person {
    constructor(name, age, eyes, hair){
        this.lesgs = 2; 
        this.arms = 2; 
        this.name = name; 
        this.age = age; 
        this. eyes = eyes; 
        this.hair = hair;
}
setHair(haircolor){
    this.hair = haircolor; 
}
greet(otherperson){
    console.log('hi ' + otherperson + ' !'); 
}
jump(){
    console.log('weeeeeee!'); 

}

};

const me = new Person('Anthony', 26, 'Brown', "Black")

console.log(me); 

me.setHair('Green')

console.log(me); 

class Account {
    constructor(Savings, Checkings, Funds =100, ){
        this.Savings = Savings; 
        this.Checkings = Checkings; 
        this.Funds = Funds; 
    }
    dateOpen(){

        let d; 

        d = new Date(); 

        console.log(d.toString()); 

    }
    withdraw(amount){

        if(amount <=this.Funds){
            amount-= this.Funds
        }
        console.log(`Withdrawn: ${amount} Current balance: ${this.Funds}`); 
    
    }
}

    console.log(Account.withdraw(10))






d = new Date(); 

console.log(d.toString()); 


class Person {
    constructor (name,age, eyes, hair){
        this.legs = 2;
        this.arms = 2; 
        this.name = name; 
        this.age = age; 
        this.eyes = eyes; 
        this.hair = hair; 
    }
    setHairColor(haircolor){
        this.hair = haircolor; 
    }
    greet(otherperson){
        console.log('hi ' + otherperson + ' !');
    }
    jump(){
        console.log('weee!');
    }
}

class SuperHero extends Person {

    fly(){
        console.log('Up Up and Away !')
    }
}; 

const superman = new SuperHero('Clark',23,'Blue', 'Black'); 

superman.fly(); 


class Person {
    constructor (name,age, eyes, hair){
        this.legs = 2;
        this.arms = 2; 
        this.name = name; 
        this.age = age; 
        this.eyes = eyes; 
        this.hair = hair; 
    }
    setHairColor(haircolor){
        this.hair = haircolor; 
    }
    greet(otherperson){
        console.log('hi ' + otherperson + ' !');
    }
    jump(){
        console.log('weee!');
    }
}
class SuperHero extends Person {
    fly(){
        console.log('Up Up and Away !')
    }
    greet(otherperson){
        console.log('Greetings ' + otherperson + ' !')
    }
};

const superman = new SuperHero('Clark',23,'Blue', 'Black'); 

superman.greet('Bob'); 

class Person {
    constructor (name,age, eyes, hair){
        this.legs = 2;
        this.arms = 2; 
        this.name = name; 
        this.age = age; 
        this.eyes = eyes; 
        this.hair = hair; 
    }
    setHairColor(haircolor){
        this.hair = haircolor; 
    }
    greet(otherperson){
        console.log('hi ' + otherperson + ' !');
    }
    jump(){
        console.log('weee!');
    }
}

class SuperHero extends Person {
    constructor(name,age,eyes,hair){
        super(name,age,eyes,hair);
        this.superPowers = ['flight', 'superhuman strength', 'x-ray vision', 'heat vision', 'cold breath', 'super-speed', 'enhanced hearing', 'nigh-invulnerability']
    }
    fly(){
        console.log('Up Up And Away ')
    }
    greeting(otherperson){
        console.log('Hi ' + otherperson + ' !')
    }
    jump(){
        super.jump();
        this.fly();
    }
}

const superman = new SuperHero ('Clark',23,'Blue', 'Black');

console.log(superman); 

console.log(superman.superPowers)

class Person { 
    static eyeColors(){
        return ['blue','green','brown']
    }
    constructor (name,age, eyes, hair){
        this.legs = 2;
        this.arms = 2; 
        this.name = name; 
        this.age = age; 
        this.eyes = eyes; 
        this.hair = hair; 
    }
    setHairColor(haircolor){
        this.hair = haircolor; 
    }
    greet(otherperson){
        console.log('hi ' + otherperson + ' !');
    }
    jump(){
    
        console.log('weee!');
}
};

class SuperHero extends Person {
    fly(){
        console.log('Up Up and Away !')
    }
    greet(otherperson){
        console.log('Greetings ' + otherperson + ' !')
    }
};

const superman = new SuperHero('Clark Kent', 30, Person.eyeColors()[0], 'black');

console.log(superman); 

// Create a Factory 

class Car { 
    constructor(serialNumber){
        this.serialNumber = serialNumber; 
    }
    drive(){
        console.log('Vroom');
    }
}

const factory = { 
    cars: [],
    generateCar(){
        const newCar = new Car(this.cars.length);
        this.cars.push(newCar); 
        return newCar; 
    }, 
    findCarIndex(index){
        return this.cars[index];
    }
}

factory.generateCar();
factory.generateCar(); 
console.log(factory);
console.log(factory.findCarIndex(1));

class Car {
    constructor (maker,serialNumber){
        this.maker= maker ; 
        this.serialNumber = serialNumber;
    }
    drive(){
        console.log('Vroom')
    }
}

class Factory {
    constructor (company) {
        this.company = company; 
        this.cars = [];
    }
    generateCar() {
        const newCar = new Car(this.company, this.cars.length)
        this.cars.push(newCar); 
        return newCar
    }
    findCarIndex(index){
        return this.cars[index]; 
    }
}

const toyota = new Factory("Toyota"); const bmw = new Factory("BMW"); toyota.generateCar(); bmw.generateCar(); console.log(bmw.findCarIndex(0)); console.log(toyota.findCarIndex(0));
