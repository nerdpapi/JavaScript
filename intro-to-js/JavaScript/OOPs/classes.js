class User {
    //defining properties
    constructor(name,course,enrolmentDate){
        this.name = name
        this.course = course
        this.enrolmentDate = enrolmentDate

    }
    
    //method
    getAgeWithAlmaBetter() {
        let age = Math.floor((new Date() - new Date(this.enrolmentDate))/(1000*60*60*24*30))
        return `${this.name} has been studying the ${this.course} course for the last ${age} months`
    }
    
    //method
    updateEnrolmentDate(){
        this.enrolmentDate = newDate
        console.log('the user enrolement date has been updated successfully')
    }

}
let user1 = new User('Kunal Kumar', 'Web Developement', '2024-07-01')
console.log(user1.getAgeWithAlmaBetter())

//extend class
class Alumni extends User{
    constructor(name,course,enrolmentDate,graduationDate){
        super(name,course,enrolmentDate)
        this.graduationDate = graduationDate
    }
}
let alumni1 = new Alumni('Kunal Kumar', 'Web Developement', '2024-07-01', '2025-03-30')
console.log(alumni1.graduationDate)
console.log(alumni1.getAgeWithAlmaBetter())
