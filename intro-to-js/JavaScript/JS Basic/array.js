const { update } = require("lodash")

let Products=["Apple","Banana","Orange","Mango","Grapes", "Dragonfruit"]// array of products
Products.push("Pineapple","Watermelon")// adding a new product to the array
let UpdatedCatalog = Products.push()// updating the array           
console.log(Products)
console.log(UpdatedCatalog)
console.log(typeof(Products))
Products.pop()
let DeletedProduct = Products.pop()
console.log(Products)
console.log(DeletedProduct)
Products.push(DeletedProduct)
console.log(Products)
// forEach Method
let UserEmail = ['aBc@gmail.com', 'XYZ@abc.com', 'KunalKmr71@gmail.com']
UserEmail.forEach(email=>{
    console.log(email.toLowerCase())

})
//Map Method
let updatedEmails = UserEmail.map(email=>{
    return email.toLowerCase()
})

console.log(updatedEmails)
let updatEmail = []
UserEmail.forEach((email)=>{
    updatEmail.push(email.toLowerCase())
})
console.log(updatEmail)
UserEmail.map((value,index,array)=>{
    UserEmail.push('kunalkmr71@gmail.com', 71)
    console.log(`the value of the element at index ${index} is: ${value}`)
    // console.log(`My array is ${array}`)
})
console.log(updatEmail)



