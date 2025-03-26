//functions  

function myName(){
    console.log("r");
    console.log("i");
    console.log("y");
    console.log("a");
}

// myName // this is only reference 
// myName();

function addTwoNo(num1 ,num2){
    // console.log(num1 +num2);
}
addTwoNo(3,"4"); //34
addTwoNo(3,"a"); //3a
addTwoNo(3,4); //7
addTwoNo(null); //Nan

// const result = addTwoNo(3,5);
// console.log(result);  //undefined

function addTwoNo(num1 ,num2){
    let result = num1+num2 ;
    // console.log("riaaa");
    return result;
    // console.log("riaaa") //it can  not be print after return
}

function logIn(username){
    return `${username} just logged in `
}
// console.log(logIn("riya"));

function logIn(username="sam"){
if(!username){
  console.log("please enter valid username");
  return
}
    return `${username} just logged in `;
}
console.log(logIn());

//functions and objects

function calculator(...num1){     //... is rest operator  it wrap up items in array
    return num1;
}
// console.log(calculator(200,400,500,600)); //[200, 400, 500, 600]


const user = {
   item: "books",
   price : 55
}
const users = {
   item: "Pen box",
   price : 20
}
function handeleObject(anyObject){
    console.log(`Item is ${anyObject.item} and price is ${anyObject.price}`);

}

handeleObject(user); //Item is books and price is 55
handeleObject(users); //Item is Pen box and price is 20

// const myNewArray =[100,377,588,444];

function returnSecondValue(getArray){
    return getArray[2]
}

// console.log(returnSecondValue(myNewArray));
// console.log(returnSecondValue([200000,30000,40000]));



