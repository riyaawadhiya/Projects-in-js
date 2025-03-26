
// immediately innvoked functions expressions (IIFE)

(function iife(){   //named iife
    console.log(`DB CONNECTED`);
} ) () ;

// iife();

// global scope ke pollutionn ko hatane ke liye iife ka use kiya

( (name) => {    //simple iife
    console.log(`DB CONNECTED2 ${name}`);
})("riaa") ;


