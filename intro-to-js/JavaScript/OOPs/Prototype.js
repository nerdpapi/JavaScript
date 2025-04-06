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

//add update enrolment Date to prototype
User.prototype.updateEnrolementDate = function(newDate){
    this.enrolmentDate = newDate
    console.log('the user enrolement date has been updated successfully')
}


let user2 = new User('Kunal Kumar', 'Web Developement', '2024-07-01')
let user3 = new User('Anchal Kumari', 'BSc. Nursing', '2022-03-17')
user2.updateEnrolementDate('2024-01-01')
console.log(user2.getAgeWithAlmaBetter())
console.log(Object.getPrototypeOf(user2))