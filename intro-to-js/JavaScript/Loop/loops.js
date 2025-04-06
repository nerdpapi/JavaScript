let numbers = [10,20,30,40,50]
console.log(numbers.length)
//for(let index=0;index<numbers.length;index++){
//     console.log(`The number at index ${index} is ${numbers[index]}`)
// }
//for in loop
for(let index in numbers){
    let numb1 = numbers[index]
    console.log(`The number at index ${index} is ${numb1}`)
}
//for of loop
for(let numb of numbers){
    console.log(`The number is ${numb}`)

}
//sum of positive numbers
let MyNumbers = [10, -20, 30, -18, 12, 8]//defining an array
let sum = 0//initializing sum to 0
let index= 0//initializing index to 0
while (index<MyNumbers.length){//while loop to iterate through the array
    let numb1 = MyNumbers[index]//storing the value of the array at index in numb1
    if (numb1>0){//if the value is positive
        sum+=numb1//add the value to sum
    }
    index++//incrementing index
}
console.log(`The sum of positive numbers is ${sum}`)//printing the sum
    for(let ind in MyNumbers){
    console.log(ind)
}
console.log(MyNumbers.length)
//do while loop
let i=4
do{
    console.log(i)
    i++
}while(i<5)
//sum of numbers in an array
let MyNumbers2 = [10, -20, 30, -18, 12, 8]//defining an array
let sum2 = 0//initializing sum to 0
let index2 = 0//initializing index to 0
do{//do while loop to iterate through the array
    let numb3=MyNumbers2[index2]//storing the value of the array at index in numb3
    if(numb3>0){//if the value is positive
        sum2+=numb3//add the value to sum
    }
    index2++//incrementing index
}while(index2<MyNumbers2.length)//while loop to iterate through the array
console.log(`The sum of positive numbers is ${sum2}`)//printing the sum
//Do while loop
let UserActions= [//defining an array
    {
        action: "login",
        time: "10:00 AM"
    },
    {
        action: "logout",
        time: "10:00 AM"
    }
]
let indx = 0//initializing index to 0
do{//do while loop to iterate through the array
    // let action = UserActions[0].action
    // let time = UserActions[0].time
    // console.log(`The action is ${action} and the time is ${time}`)
    // UserActions.shift()
    // console.log(UserActions)
    // console.log(UserActions.length)
    myObj = UserActions[indx]//storing the value of the array at index in myObj
    if (myObj.action !== "logout"){//if the action is not logout
        console.log("The user is still logged in")//print the message
    }
    indx++//incrementing index
    }
    
while(indx<UserActions.length)//while loop to iterate through the array
console.log(typeof(UserActions))//printing the type of the array





