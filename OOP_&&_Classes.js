class Person {};

const me = new Person();

const bob = new Person ();

console.log(me); 

console.log(bob); 

console.log(typeof(me)); 

console.log(typeof(bob)); 

class Person {
    greeting(){
        console.log('Hi!');
    }
}; 

const me = new Person(); 

me.greeting()

class Person {
    greeting(character){
        console.log(`How's it going ${character} ?`)
    }
}; 

const me = new Person(); 

me.greeting('Jack'); 


class Person {
    greeting(character){
        console.log(`Hello ${character} how's everything been going with you ?`);
    }
    jump(){
        console.log('weeeee!');
    }
};

const me = new Person(); 

me.greeting('Bradly')
me.jump(); 

class Person {
    greet(otherPerson){
        console.log('hi ' + otherPerson + '!'); }
        
        jump(){
            console.log('weeee!'); }
};

const me = new Person(); console.log(me);


console.log(Person); 

class Person {

    constructor(){
        this.legs = 2; 
        this.arms = 2; 
        this.eyes = 'Brown'; 
        this.hair = 'Black'; 
    }
    greeting(character){
        console.log(`Hello ${character} how is it going toda ?`)
    }
    jump(){
        console.log('weeee!')
    }
    
}; 

const me = new Person();

console.log(me);