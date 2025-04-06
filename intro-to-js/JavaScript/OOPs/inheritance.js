function User(name,course,enrolmentDate){
    //set properties of my User constructor/template
    this.Name = name
    this.course = course
    this.enrolmentDate = enrolmentDate
}
//objects have their prototypes by default in JS
//getAgeWithAlmaBetter
User.prototype.getAgeWithAlmaBetter = function(){
    let age = Math.floor((new Date() - new Date(this.enrolmentDate))/(1000*60*60*24*30))
    return `${this.Name} has been studying the ${this.course} course for the last ${age} months`    
}
//alumni constructor
function Alumni(name,course,enrolmentDate,graduationDate){
    User.call(this,name,course,enrolmentDate)
    this.graduationDate = graduationDate
}
//inherit prototype
Alumni.prototype = Object.create(User.prototype)

let user2 = new User('Kunal Kumar', 'Web Developement', '2024-07-01')
let user3 = new User('Anchal Kumari', 'BSc. Nursing', '2022-03-17')
let alumni1 = new Alumni('Kunal Kumar', 'Web Developement', '2024-07-01', '2025-03-30')
console.log(alumni1)
console.log(alumni1.getAgeWithAlmaBetter())
console.log(Object.getPrototypeOf(alumni1))
// user2.updateEnrolementDate('2024-01-01')
// console.log(user2.getAgeWithAlmaBetter())
// console.log(Object.getPrototypeOf(user2))