for(let b=0;b<10;b++){
    const element=b;
    console.log(b);
}
// while (condition) {
    
// }

//FOR OF
const arr=[1,2,3,4,5]
for (const num of arr) {  //array,string,object(map) etc
    console.log(num);    
}

//MAP
//key:value pairs. Remembers Insesrtion order.
//Unique keys
const map = new Map()
map.set("IN","India")
map.set("USA","United States")
map.set("FR","France")
console.log(map);

for(const [key,value] of map){
    console.log(key,value);
}

const myObj={
    name:"aryan",
    id:100,
    bg:"O-"
}
//myObj cannot be iterated like above for of
//USE for in *******(objects)

for(const key in myObj){
    console.log(key);        //keys
    console.log(myObj[key]); //values
}

//ARRAY-for of / for each *** loops
const arr1=[1,2,3,4,5]         //SYNTAX- no func name
arr1.forEach(function (item){
    console.log(item);
} )

arr1.forEach((item)=>{  //using arrow func
    console.log(item);
})

function printMe(item){
    console.log(item);
}
arr1.forEach(printMe) //using Callback func(func passed into another func as arg)

arr1.forEach((item,index,arr)=>{
    console.log(item,index,arr); //3 param
})

const users=[    //ARRAY OF OBJECTS - forEach
    {
        name:"aryan",
        id:1
    },
    {
        name:"arya",
        id:2
    },
    {
        name:"ary",
        id:3
    }
]
users.forEach((item)=>{   //each item is object 
    console.log(item.name);
    console.log(item.id);
})

//forEach doesnt return any value. So any operation or anyhting cant be done 


