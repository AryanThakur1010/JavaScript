//Declarations
const arr=[0,1,2,3,4,true,"a"]
const arr1=["aryan","armaan","naina"]
const arr2=new Array(1,2,3,4,5)
console.log(arr);
console.log(arr1);
console.log(arr2);
console.log(arr1[1]); //access element

//array methods
arr.push(6)
arr.pop()
arr.unshift(9) //insert at start of array
arr.shift(); //removes first element

console.log(arr.includes(4)); //true/false
console.log(arr.indexOf(2)); //-1 if not present

const newArr=arr.join(); //converted to string with comma sep

//slice, splice
console.log("A ",arr);
const sliceArr=arr.slice(1,3)
console.log(sliceArr);
console.log(arr);

const spliceArr=arr.splice(1,3)
console.log(spliceArr);
console.log(arr); //Splice changes the original array and removes the specified index range elements.
//Also end range is included



//****************arrays 2 ***************** */

//push can insert any datatype+->even array, object etc in an array.
const a=[1,2,3]
const b=[4,5,6]
const c=a.concat(b)  //CONCAT=merge two arrays into NEW array
console.log(c);

//SPREAD
const d=[...a,...b]  //Preferred. Can combine multiple arrays.
console.log(d);

//FLAT-----------flattens multi dimensional array
const arr01=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const flatArr=arr01.flat(Infinity) //Depth(use infinity if confused)
console.log(flatArr);

//isArray, from
console.log(Array.isArray("ARYAN")); //check if array
console.log(Array.from("Aryan")); //convert to array

//of
const s1=100;
const s2=200;
const s3=300;
const arr5=Array.of(s1,s2,s3)
console.log(arr5);















