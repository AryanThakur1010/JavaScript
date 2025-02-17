const promise1 = new Promise(function(resolve,reject){  //CREATE promise
    //Do an async task
    //DB calls, cryptography, n/w call
    setTimeout(function(){
        console.log('Async task completed');
        resolve()
    },1000)
})

//CONSUME promise
promise1.then(function(){  //resolve connection=>.then  returns promise
    console.log("Promise consumed");
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    },1000)
}).then(function(){
    console.log("Async 2 resolved"); 
})

const promise3=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"aryan",email:"a.thakur1301@gmail.com"})
    },1000)
})

promise3.then(function(user){
    console.log(user);  
})

const promise4= new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true
        if(!error){
            resolve({username:"aryan",email:"a.thakur1301@gmail.com"})
        }
        else{
            reject('ERROR: Something went wrong')
        }
    },1000)
})

//.then chaining vs async/await
//Can use anyone

promise4.then((user)=>{   // promise chaining
    console.log(user);
    return user.username  
})
.then((username)=>{            //Value returned from above .then will come here 
    console.log(username);
})
.catch(function(err){
    console.log(err);
})
.finally(()=> console.log("Promise is resolved or rejected"))


const promise5= new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true;
        if(!error){
            resolve({username:"aryan",number:"9205296183"})
        }
        else{
            reject("ERROR: number went wrong")
        }
    },1000)
})

async function consumePromise5(){  //async makes a func return a promise(ewuivalent to resolving)
    try{
        const response=await promise5 //makes function pause execution and wait for resolved promise
        console.log(response);
    }
    catch(error){
        console.log(error);
    }
}    //try catch required to handle errors usually
consumePromise5()

async function getAllUsers(){
    try{
        const response=await fetch('https://randomuser.me/')
        const data=await response.json() //.json also takes time
        console.log(data);
    }
    catch(error){
        console.log("E:",error);
    }
}
getAllUsers()


fetch('https://randomuser.me/')  //returns a promise
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);  
})
.catch((error)=>console.log(error))

//A fetch() promise only rejects when the request fails, for example, because of a badly-formed request URL or a network error. A fetch() promise does not reject if the server responds with HTTP status codes that indicate errors (404, 504, etc.). Instead, a then() handler must check the Response.ok and/or Response.status properties.

