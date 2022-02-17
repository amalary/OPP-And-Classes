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

me.greeting('Jack')


