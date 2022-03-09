// object literals


let val;


let person ={
    firstName : 'John',
    lastName : 'Dohen',
    age : 7,
    hobbies : ['futbool', 'game']
    
    getBirthYear : function () {
        return 2022- 7;
    }
    
};

val = person;
val = person.firstName;
val = person.lastName;
val = person['firstName'];
val = person.age;
val = person.hobbies[1];
val = person.hobbies.length;
val = person.getBirthYear();


console.log(val);
console.log(typeof person);