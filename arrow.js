/**************ARROW FUNCTIONS************/

const user ={
    username :"hitesh" ,
    price : 999 ,

    welcomeMessage : function(){     //this keyword is use to acces or refer current context
        // console.log(`${this.username} , welcome to website `)
        // console.log(this)
    }
}
// console.log(user.welcomeMessage());
// user.username ="riya"
// console.log(user.welcomeMessage());

// console.log(this) ///node me {empty} object and browser show windows object

function newCode(){
    let username ="hitesh"
    console.log(this.username)  //undefined
}

// newCode(); //this use in objets not in functions


const newFunction = function(){
    let username = "hitesh" 
    console.log(this.username)
}

newFunction(); //undefined

const newCoder =() =>{
    let username = "hitesh" 
    console.log(this.username)  //undefined
    console.log(this)  //{} 
}

newCoder();
//####################  explicit arrow function
const addTwo = (num1,num2) =>{
    return num1+num2
}

console.log(addTwo(3,4));

//####################  implicit return arrow function
const addNum=(num1 ,num2) => num1+num2 ;
console.log(addNum(5,8)); 

const addNums=(num1 ,num2) => (num1+num2) ;
console.log(addNums(15,83));  

//####################  function
// const add = (num1 ,num2) =>{
//     username:"pria" //undefined
// }

// console.log(add(3,2));  



