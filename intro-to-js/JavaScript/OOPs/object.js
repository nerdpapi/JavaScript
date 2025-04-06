const { type } = require("os")

let user = {
    firstName : "Kunal",
    lastName : "Kumar",
    age : 27,
    email : "kunalkmr71@gmail.com",
   //creating a method which will define the behavior of an object
    callAttendance : ()=>console.log('i am present'),
    callName : (message)=>console.log(`Then name is ${message}`),
    sendEmail : function(message){console.log(`Send an email to ${this.email} : ${message}`)}  
}
console.log(user)
console.log(typeof user)
console.log(user.email)
// Keys Values method returns the Key and Value for the Key Value pair respectively
console.log(Object.keys(user))
console.log(Object.values(user))
console.log(Object.values(user).map((value)=> String(value).toUpperCase()))
// enteries method returns an array of key/value pair
console.log(Object.entries(user)[0])
//updating an existing key
user.email = "kkumar@mitaoe.ac.in"
console.log(user)
//create a new Key/Value pair
user.isGraduated = true
console.log(user)
//anothe way to create an object
let product = new Object()
console.log(product)
product.name = 'monitor'
product.price = 15000
console.log(product)
//call method on user object
user.callAttendance()
// console.log(user)
user.callName('Kunal Kumar')
//JSON- JavaScript Object Notation, useful  data format for data interchange
// frontend can send a JASON data to a backend web server
//JASON can be an array or an object
//JSON.stringify converts JAvaScript object into a JSON String.
let JsonString = JSON.stringify(user)
console.log(JsonString)
console.log(typeof JsonString)
//JSON.parse() converts JSON String back to JavaScript objects.
let parsedData = JSON.parse(JsonString)
console.log(parsedData)
console.log(typeof parsedData)
user.sendEmail('You have an email notification')
//defining behavior using Function
function userDetails(){
let user = {
    firstName : "Kunal",
    lastName : "Kumar",
    age : 27,
    email : "kunalkmr71@gmail.com",
   //creating a method which will define the behavior of an object
    callAttendance : ()=>console.log('i am present'),
    callName : (message)=>console.log(`The name is ${message}`),
    sendEmail : function(message){console.log(`Send an email to ${this.email} : ${message}`)}  
}
return user
}
userDetails().callName('Kunal Kumar')