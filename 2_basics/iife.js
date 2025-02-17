//Immediately invoked function expressions

//for execution immediately after definition eg.(DB connection on startup)
// to remove global scope variable pollution
(function db(){
    console.log("Db connected");
})(); 

//Syntax: (whole func definition)()

(() => {   //arrow func iife
    console.log("Db connected")
}
)() //arg can be passes here in brackets