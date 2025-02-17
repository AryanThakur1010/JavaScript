const user={
    username:"aryan",
    price:100,
    message: function(){
        console.log(`${this.username}, welcome to website`); 
    }
}
user.message();
user.username="sam"
user.message();

//current context->empty object(IN NODEjs)
console.log(this);
//IN Browser-> Window Object(Global Object)

//ARROW FUNCTION
const add= (num1,num2) => {   // ()=>{}
    return num1+num2
}
console.log(add(3,4));

const add1= (num1,num2) => num1+num2 //IMPLICIT RETURN(only 1 statement)
//                      or (num1+num2)
//brackets required to return object ({username:"aryan"})

