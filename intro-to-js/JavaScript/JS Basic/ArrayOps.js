const { Console } = require("console")

// Create an array of defined size:
let myArray = Array(5)
console.log(myArray)
console.log(myArray.length)
myArray[0]= 'Kunal'
console.log(myArray)
console.log(typeof(2 - String(2)))
// Filter
let myNumber= [10,20,25,50,90,100,110,150]
let val = myNumber.filter((number)=> number%25 == 0
)
console.log(val)
// filter on an array of objects
let ProductCatalog= [
    {Name: 'Umbrella', Quantitiy : 39, Price: 300},
    {Name: 'Monitor', Quantitiy : 10, Price: 30000},
    {Name: 'Fridge', Quantitiy : 25, Price: 60000}
]
let surplusProduct = ProductCatalog.filter((Product)=> Product.Quantitiy> 15
)
console.log(surplusProduct)
// Reduce
let inventoryPrice = ProductCatalog.reduce((accumlator,Product,index,array)=>
accumlator + Product.Price*Product.Quantitiy,0)
console.log(inventoryPrice)
// Get cumulated products of yourNumbers
let yourNumber =[1,2,3,3,5,6]
let cumulatedProduct = yourNumber.reduce((pro,value)=> pro**2)
console.log(cumulatedProduct)
// concadinating a string
let Names = ['Kunal','Anchal','Kajol','Anshu']
let CombinedNames =Names.reduce((acc,name)=> acc+`  `+name)
console.log(CombinedNames)
console.log(typeof(CombinedNames))
// Slice Method
let sliceNumber= yourNumber.slice(2,4)
console.log(yourNumber)
console.log(sliceNumber)
console.log(yourNumber)
// Negative index works with slice, it gives me the last value of the index
let NegativesliceNumber= yourNumber.slice(-2)
console.log(yourNumber)
console.log(NegativesliceNumber)
// Splice Method:Removes the vlue for the give index and count of elements to be deleted
let sliceNumber1= yourNumber.splice(2,3)
console.log(sliceNumber1)
console.log(yourNumber)
// we an also be removing and adding elements at the given index
let myNumb= [1,2,3,4,5,6]
let sliceNumbe= myNumb.splice(3,2,100,200)
console.log(sliceNumbe)
console.log(myNumb)
// Fill method fills the value in the array.Changes/Mutates the resulting array
let myArrays=Array(10).fill(0)
console.log(myArrays)
//fill array with defined index
let myArr=Array(10).fill(10,0,6)
console.log(myArr)

let myAr=Array(10).fill(0).map((array,index)=>array+index)
console.log(myAr)
let Arr=Array(100).fill(0).map((array,index)=>array+1)
let ind=Array(100).fill(0).map((array,index)=>index+1)
console.log(Arr)
console.log(ind)
// Shift Method
// from Method
let myString = ("abcdefgh")
console.log(Array.from(myString))
let ourArray = new Array(10) //constructor method
console.log(ourArray)
let ourObj = new Object()
console.log(ourObj)
console.log(new Set()) 
// flat method is useful when you have nested dictionaries and flatens the array to various depth
let arrayOfArrays = [['kunal',71],[125,[13,15]],[1,4]]//single bracket represents depth 1 and double array represents depth 2
console.log(arrayOfArrays.flat(1))//the number represents the depth it flatens the array.
//flatMap is a combination of map and flat. Flatens the array to depth 1
console.log(arrayOfArrays.flatMap((element)=> element[0]))
console.log(Names.indexOf('Kajol'))
