//FILTER****************
const nums=[1,2,3,4,5,6,7,8,9,10]
const numbers=nums.filter((item)=>{
    return item>4})
console.log(numbers);     //aarray returned with >4 elements

//Same thing using forEach
const arr=[]  //empty array
nums.forEach((item)=>{
    if(item>4){
        arr.push(item)
    }
})
console.log(arr);

//ARRAY OF OBJECTS**** FILTER (BOOKS)***IMPORTANT
const books=[
    {
        title:"B1",
        genre:"fiction",
        publish:"1981"
    },
    {
        title:"B2",
        genre:"fiction",
        publish:"1982"
    },
    {
        title:"B3",
        genre:"fiction",
        publish:"1983"
    },
    {
        title:"B4",
        genre:"fiction",
        publish:"1971"
    },
    {
        title:"B5",
        genre:"history",
        publish:"1978"
    },
    {
        title:"B6",
        genre:"fiction",
        publish:"1991"
    },
    {
        title:"B7",
        genre:"history",
        publish:"1986"
    }
]

let userBooks=books.filter((bk)=>{  //FILTERED BOOKS on basis of genre
    return bk.genre==="history"
})

userBooks=books.filter((bk)=>{ //on basis of publish
    return bk.publish>=1980
})
console.log(userBooks);

//&& || use here

//*****map function **** */  returns everything after some operation
let myNums=[1,2,3,4,5,6,7,8,9,10]
const newNums=myNums.map((num)=>{
    return num+10
})
console.log(newNums);

//using forEach
myNums.forEach((num,index,arr)=>{
    arr[index]=num+10
})
console.log(myNums);

//Chaining
const newNums1=myNums
                .map((num)=>num*10)
                .map((num)=>num+1)
                .filter((num)=> num>=125)
console.log(newNums1);




//**********reduce function********** */
//has accumulator and currentValue and initial value
const myNums1=[1,2,3,4,5]
//sum of array
const sum=myNums1.reduce(function(acc,currval){
    console.log(`acc:${acc} and currval:${currval}`);
    return acc+currval
},0)  //0 initial value
console.log(sum);

const total=myNums.reduce((acc,currval)=>acc+currval,0) //arrow func

//array of objects

const shoppingCart=[
    {
        item:"a",
        price:10
    },
    {
        item:"b",
        price:20
    },
    {
        item:"c",
        price:30
    }
]

const totalBill=shoppingCart.reduce((acc,item)=>acc+item.price,0)
console.log(totalBill);


