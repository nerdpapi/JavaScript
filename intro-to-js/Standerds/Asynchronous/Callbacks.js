//crerating an array of objects or object literals.
let users =[{
    id : 1,
    name : 'Kunal Kumar',
    email : 'kunalkmr71@gmail.com',
},
{
    id : 2,
    name : 'Anchal Kumari',
    email : 'anchal666999@gmail.com',
},
{
    id : 3,
    name : 'kajol kumari',
    email : 'kajolkumari01@gmail.com',
}]
//function to get users- simulate some API Call
function getUsers(){
    //simulate the API call
    setTimeout(()=>{
        let output = ''
        //iterate over each user
        users.forEach((user)=>{
            output += `<li>${user.email}</li>`
        })
        document.body.innerHTML = output
    },2000)
}
function createUser(user,callback){
    setTimeout(()=>{
        users.push(user)
        callback()
    },3000)
    
}
createUser({
    id : 4,
    name : 'Anshu Kumari',
    email : 'anshukumari123@gmail.com',
},getUsers)
getUsers()

