
{} //scope function / if else

let a = 300;
if(true) {
    // var num3 =53;  //it is global scope
    let a = 10 ; //block scope 
    // console.log(a)
}
// console.log(a);
// console.log(num2);
// console.log(num3);
//windows me or node terminals me global scope alg alg hote hai 
// nested scope

function one(){
    const username ="textbook"
    function two(){
          const website = "youtube"
          console.log(username);
          console.log(website);
    }
    two();
} 

one();

//  child access their parents 

if(true){
    const username = "tables"

    if(username ==="tables"){
        const website = "instagram"
        console.log(username + website);
    }
    // console.log(website);//error
}
// console.log(username); //error


//*************INSTERSTING CONCEPT***********/

console.log(addOne(5));

function addOne(num){
    return num+1
}

// console.log(addTwo(5)); //it shows error  becuse acess before declarations
 
 const addTwo = function(num){
     return num+2
    } 


