//singleton -> when decalers with literals singleton not mmake
//object.create  -> this is a method which can be use by constructor
//object literals 
const sym = Symbol("myKey1") ;
const jsUser = {

    name : "riya" ,
    age : 18 ,
    location : "jabalpur" ,
    [sym] : "myKey1",
    email : "naipata33@gmail.com ",

};

// console.log(jsUser[sym]);

jsUser.email= "chaahotohkardo@gmail.com";

// console.log(jsUser);

// Object.freeze(jsUser);

jsUser.age = 40 ;
// console.log(jsUser);


jsUser.greeting = function (){
    console.log("hello jsUser");
}
// console.log(jsUser.greeting()); //error because it freeze 
jsUser.greetingTwo = function (){
    console.log(`hello jsUser , ${this.name}`);  // string interpolation

}

// console.log(jsUser.greeting); //undefines  only reference
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo()); //undefined also shows in browser because it auto run






