/*Array is a object 
it is a datatype which can have collection 
of multiple items in single variables
it is resizeable we can add or remove
it have mix up of datatypes
It can not have associative arrays 
array elements can not be acces arbitary  strings
*/

const myArray = [0,1,2,3,4,5];

// console.log(myArray[8]); // it have zero base indexing 

// Shallow copies ->  properties which can share the same reference point
// Deep copies ->  properties do not shares the same reference

const fruits = ["grapes" , " apples" , "mango" , "papaya"];
// console.log(fruits[0]);

// console.log(myArray.length);


//Array Methods 
// myArray.push(10);
// console.log(myArray);

// myArray.pop();
// console.log(myArray);

// myArray.unshift(10); //starting of array it can have heavy load in computer
// console.log(myArray); 

// myArray.shift();//remove element from starting
// console.log(myArray);

// console.log(myArray.includes(11)); //true it gives boolean 

// console.log(myArray.indexOf(233)); //2 
// console.log(myArray.indexOf(23)); //-1 it don't know

// const newArr = myArray.join(); //it bind data and convert into string

// console.log(newArr);
// console.log(typeof newArr); //string 


//slice 

console.log("A" , myArray);

const m1 = myArray.slice(3,6); // index start i= 3, i< 6 is print
console.log(m1);//slice (start , end)
console.log("B" , myArray); // no changes in array

// splice 

const m2 = myArray.splice(6,0); //splice(start, deleteCount)
console.log(m2);  
console.log("C" , myArray); 

//slice 
const fruit = ["Banana", "Orange", "Lemon", "Apple", "Mango"]; 
console.log(fruit.toLocaleString());

const citrus = fruit.slice(1, 3);  //Orange,Lemon
console.log(citrus.toLocaleString());

const arr = ['alex', 'justin', 'max', 'harper', 'mason'];
console.log(arr.toLocaleString());
 arr.splice(1, 1); // arr is now ['alex','harper','mason']
 console.log(arr.toLocaleString());


 const heroes =['spiederman' , 'ironman' , 'thor'];
 const cartoons = ['doremon ' , 'pokemon' , 'sinchan'];


// heroes.push(cartoons);
// const allheroes = heroes.concat(cartoons)
const newHeroes = [...heroes , ...cartoons]; //spered method
console.log(newHeroes); 


const newOne = [1,2,3,[4,5,6,] ,7,[6,7,8 ,[6,7]]];

const useAble = newOne.flat(Infinity);
console.log(useAble);// [1, 2, 3, 4, 5, 6, 7, 6, 7, 8, 6, 7]

console.log(Array.isArray("Riya"));
console.log(Array.from("Riya")); //it conver it in array form 
console.log(Array.from({name:"Riya"})); //returns null because it cannot identify   

let score1 = 100;
let score2 = 400;
let score3 = 500;

console.log(Array.of(score1,score2,score3)); // [100, 400, 500]




