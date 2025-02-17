//Define 3 ways-- literal, new, constructor

//object literals
const mySym= Symbol("key1")
const jsUser={          //Key:value pairs.  Unique key(overwritten if defined again). Values can be same.
    name: "Aryan",      //Value can be any dt(array,object,function)
    age: 21,
    [mySym]:"mykey1",  //syntax for symbol as a key
    location: "Bangalore",
    email: "a.thakur1301@gmail.com",
    isLoggedIn: true,
    lastLoginDays:["Monday","Friday"]
};

console.log(jsUser.name);  //Access using dot
console.log(jsUser["age"]); //Acces using ["key"]
console.log(jsUser[mySym]);

jsUser.greeting=function(){
    console.log("Hello jsUSer");
    
}
jsUser.greeting1=function(){
    console.log(`Hello jsUSER ${this.name}`);
    
}
jsUser.location="Delhi"; //Change property value
Object.freeze(jsUser); //No change possible now




const car={}    //Empty object created. Then properties added.
car.model="Honda"
car.age=10
console.log(car);

jsUser.greeting();
jsUser.greeting1();

//*********************** */

const tinderUser=new Object();  //NEW keyword

tinderUser.id="123abc";
tinderUser.name="sam";
tinderUser.isLoggedIn=false;

console.log(Object.keys(tinderUser)); //**All keys in array
console.log(Object.values(tinderUser));
console.log(tinderUser.hasOwnProperty(isLoggedIn)); //If property exists.T/F




const regularUser={ //Object in object example
    email:"a.thak@gmail.com",
    fullname:{
        firstname:"aryan",
        lastname:"thakur"
    }
}
console.log(regularUser.fullname);
console.log(regularUser.fullname.lastname);

//Assign=> to merge two or more objects NOT USED MUCH
const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
const obj3={5:"a",6:"b"}
const obj4=Object.assign({},obj1,obj2,obj3);
console.log(obj4);

//USE SPREAD
const obj5={...obj1,...obj2,...obj3}
console.log(obj5);

//VALUES FROM DATABASE(Real projects)
//ARRAY OF OBJECTS
const users=[
    {
        id:1,
        name:"aryan"   
    },
    {
        id:2,
        name:"aryan"   
    },
    {
        id:3,
        name:"aryan"   
    }
]
users[1].name; //access


/***********DESTRUCTURING OBJECTS****** */
const course={
    name:"js",
    price:"999",
    teacher:"hitesh"
}
console.log(course.teacher); //tedious

const {teacher: t}=course;
console.log(t);


//JSON (data format) for API [key and value both in quotes except numbers,boolean]
// {
//     "name":"aryan",
//     "course":"js",
//     "price":"free"
// }







