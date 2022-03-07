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



