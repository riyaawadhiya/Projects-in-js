/*javascript execution context 

{} -> global execution context  
   -> function execution context
   -> eval execution context it use in mongo

thread -> Javascript is single thread everthing inside it is in process

It executed  in two phase  -> # Memory creation phase   , #execution phase
 
*/

let val1 =10;  
let val2 = 50; 
function addNum(num1 ,num2){   
    let total = num1+num2 
    return total
}

// let result = addNum(num1 ,num2);   
let result2 = addNum(10,2); 

/*
************CYCLE 1 -> Memory phase **************

 val1 =10;  // in memory phase is undefined
 val2 = 50; // in memory phase is undefined

********* In memory phase is function definiton ***********

function addNum(num1 ,num2){    
     total = num1+num2 
    return total
}
result = addNum(num1 ,num2); //in memory phase is undefined
result2 = addNum(10,2); //in memory phase is undefined

******************* CYCLE 2 -> Execution phase ***********
val1 <- 10
val2 <- 50 
result1 -> addNum is a function -> it creates new  execution context
                                 -> new variable environment + execution thread
                                 -> again it creates memorey phase and execution phase
                                  -> if it executed then it will be deleted 

 ****************************call stack *****************
-> global execution
-> suppose we have a method One() it push inside the stack then it execute it will be pop
-> according to lifo 
*/

function one(){
    console.log("one");
    two();
}
function two(){
    console.log("two");
    three();
}
function three(){
    console.log("three");
}

one();
two();
three();
