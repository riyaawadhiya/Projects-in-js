//Obejects how to decaler by constructor

//this is singleton object 
// const user = new Object();
// console.log(user); 
//this is not singleton
const userInsta = {} 

userInsta.id = "123abc";
userInsta.name = "pagallog" ;
userInsta.isLoggedIn = false ;

// console.log(userInsta);

const newUser = {
 email : "pagallog@gmal.com" ,
   fullname :{
      userfullname : {
       firstname : "pagal" ,
       lastname : "log"
 } 
}
}

console.log(newUser.fullname.userfullname.firstname);

const obj1 = {1 :"a ", 2:"b"};
const obj2 = {3:"r ", 4:"d"};

// const obj3 = {obj1 ,obj2};

// const obj4 = Object.assign({},obj1 ,obj2);
const obj5 = {...obj1 , ...obj2};
console.log(obj5);

// database

const users =[

    {
        id:3 ,
        name:"riii"
    } , 
    {
        id:1 ,
        name : "pagal" 
    }
]

console.log(users[0].name);
console.log(userInsta);
console.log(Object.keys(userInsta));
console.log(Object.values(userInsta)); //form of array 
console.log(Object.entries(userInsta));
console.log(userInsta.hasOwnProperty("isLoggedIn"));



