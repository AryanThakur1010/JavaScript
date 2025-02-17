const user={      //object literal (basic unit)
    username:"aryan",
    loginCount:8,
    signedIn:true,

    getUserDetails:function(){
        console.log("Hi aryan");
        console.log(`Username:${this.username}`); //this
        console.log(this);
        
    }
}
console.log(user.username);
user.getUserDetails()


//if we want more users, tedious to create objects again and again
//OBJECT CONSTRUCTOR FUNCTION

function User(username,loginCount,isLoggedIn){
    this.username=username
    this.loginCount=loginCount
    this.isLoggedIn=isLoggedIn
    this.greeting=function(){
        console.log("Hi");
    }
}

const user1=new User("abc",8,true) //if new not used user2 will override user 1 values
console.log(user1);

function SetUsername(username){
    this.username=username
    console.log("called");
}
function createUSer(username,email,password){
    SetUsername.call(this,username)  
    this.email=email
    this.password=password
}

