//String method
//1. charAt method returns the character at a particular index
let myString = "website Developement"
console.log(myString.charAt(10))
//2.include
console.log(myString.includes("web"))//returns boolean value
//3. IndexOf
console.log(myString.indexOf("website"))
console.log(myString.lastIndexOf('e'))
console.log(myString.indexOf(" "))
//4. Match method to match some data via REGular EXpression
let emailRegex = /[a-zA-Z0-9#._]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}/g;
let emailData = "I have a list of emails of participants for our seminar- kunalkmr71@gmail.com, kunakkumar@Almabetter.com, Careers@3MCorporate.in"
let myEmails = emailData.match(emailRegex)
console.log(myEmails)
console.log(Array.from(myEmails).map((array)=>array[0]))
//match for phone numbers
let phoneRegex = /\b[0-9]{10}\b/g;//b indicate a word boundary.
let phoneString = "the numbers are : 123456789011, 7004966310, 9334717940,0987654321,014785296312"
let phoneNumbers = phoneString.matchAll(phoneRegex)
// console.log(phoneNumbers)
console.log(Array.from(phoneNumbers).map((array)=>array[0]))