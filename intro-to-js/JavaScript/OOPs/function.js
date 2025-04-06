//function represents the operations where it takes some input, does some operations, returns some output.

// const { lowerCase } = require("lodash")

// write a function to calculate the cube of three
function calcPower(num,power){
    return num**power
}
let cubeOfThree = calcPower(3,3)
let squareRoot = calcPower(7,0.5)
console.log(cubeOfThree)
console.log(Math.round(squareRoot))
//write a function to generate a random password of a defined length
function generateRandomPassword(length,includelowerCase,includeUppercase,includeNumbers,includeSymbols){
    
    //defining all my characters
    let lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz'
    let upperCaseChars = lowerCaseChars.toUpperCase()
    let numberChars = '1234567890'
    let symbolChars = '!@#$%^&*()_+-={}[];|'

    let allowedChars = ""
    let password = ""

//Update allowedChars
allowedChars += includelowerCase ? lowerCaseChars : ""
allowedChars += includeUppercase ? upperCaseChars : ""
allowedChars += includeNumbers ? numberChars : ""
allowedChars += includeSymbols ? symbolChars : ""

//basic checks
if (length <= 0){
    console.log('need to provide length greater than 0')
}
if(allowedChars===""){
    console.log('include some string characters')
}
//write the main logic
//iterate as many times as the length of allowed password
for(i=0; i<length; i++){
    //generate random index
    let randomIndex = Math.floor(Math.random()*allowedChars.length)
    password += allowedChars[randomIndex]
}
return password
}

let allowedLength = 10
let includelowerCase = true
let includeUppercase = true
let includeNumbers = true
let includeSymbols = true
let password = generateRandomPassword(allowedLength,includelowerCase,includeUppercase,includeNumbers,includeSymbols)
console.log(`Generated password is ${password}`)
//write a function to create IPv4
function generateRandomIPv4() {
    // Generate four random numbers between 0 and 255
    let octet1 = Math.floor(Math.random() * 256);
    let octet2 = Math.floor(Math.random() * 256);
    let octet3 = Math.floor(Math.random() * 256);
    let octet4 = Math.floor(Math.random() * 256);
  
    // Concatenate the octets with dots to form an IPv4 address
    let ipv4 = `${octet1}.${octet2}.${octet3}.${octet4}`;
    
    return ipv4;
  }
  let ipv4= generateRandomIPv4()
  console.log(ipv4)
  
  //calculate the factorial of a number using functions
  function factorial(number){
    if(number===1){
        return 1
    }
    return number*factorial(number-1)
  } 
  console.log(factorial(5))

  //calculate fibonacci sequence
  //fn= fn-1 + fn-2
  function fibonacci(position){
    if(position===1){
        return 0
    }
    if(position===2){
        return 1
    } 
    return fibonacci(position-1)+fibonacci(position-2)
  }
  console.log(fibonacci(10))
