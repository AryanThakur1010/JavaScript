const accountID=10014339
let email="a.thakur1301@gmail.com"
var pass="123"
city="Ghaziabad" //Possible but dont use
let state; //Undefined if not initialized

// accountID=2 NOT ALLOWED TO CHANGE const
console.log(accountID) 
email="abc.com"
pass="12345"
city="Bangalore"
console.table([accountID,email,pass,city,state])

//var is not used because of scope problems now
//let and const used 