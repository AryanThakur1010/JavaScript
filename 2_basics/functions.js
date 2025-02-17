// Definition
function helloWorld(){
    console.log("Hi Aryan");
}

// Call/Execute
helloWorld() 

function addNumber(number1,number2){  //parameters
    console.log(number1+number2);
}

const result= addNumber(3,4) //arguments
//this will return undefined in return.SINCE NO RETURNTYPE

function addNumber(number1,number2){  //parameters
    let result=number1+number2
    return result
}
const ans=addNumber(3,5)
console.log("Answer:"+ans)

function loginUserMessage(username){ //username="sam".Cannot be undefined ever
    if(username===undefined){ //or !username
        console.log("Please enter a username");
        return
    }
    return username+" just logged in"
}
console.log(loginUserMessage("aryan"))


//REST operator
function calculateCartPrice(...num1){ //rest operator(when parameters unknoown)
    return num1
}
console.log(calculateCartPrice(100,200,300,400));
//Prints array of all prices

function calculateCartPrice1(val1,val2,...num1){ 
    return num1
}  //val1->100 val2->200
console.log(calculateCartPrice(100,200,300,400));
//Prints array [300,400]

const user={
    username:"aryan",
    price:99
}
function handleObject(anyObject){
    console.log(`username:${anyObject.username} price:${anyObject.price}`); 
}
handleObject(user) //direct object can be passed here also
