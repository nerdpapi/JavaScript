let user1 = {
    Name :'Kunal Kumar',
    Course : 'Web Developement',
    enrolmentDate : '2024-07-01',

    //add some method
    getAgeWithAlmaBetter : function() {
        let age = Math.floor((new Date() - new Date(this.enrolmentDate))/(1000*60*60*24*30))
        return `${this.Name} has been studying the ${this.Course} course for the last ${age} months`
    }
}
console.log(user1.getAgeWithAlmaBetter())
//way to difine a template to create multiple instances/objects of same types
//Creating template using a constructor (PascleCase)
function User(name,course,enrolmentDate){
    //set properties of my User constructor/template
    this.Name = name
    this.course = course
    this.enrolmentDate = enrolmentDate

    //enabling objects with behaviour/method
    this.getAgeWithAlmaBetter = function(){
        let age = Math.floor((new Date() - new Date(this.enrolmentDate))/(1000*60*60*24*30))
        return `${this.Name} has been studying the ${this.course} course for the last ${age} months`    
    }
    
    //method to update enrolement date
    this.updateEnrolmentDate = function(newDate){
        this.enrolmentDate = newDate
        console.log('the user enrolement date has been updated successfully')
    }

}
//creating multiple instances/objects with User template/constructor.
let user2 = new User('Kunal Kumar', 'Web Developement', '2024-07-01')
let user3 = new User('Anchal Kumari', 'BSc. Nursing', '2022-03-17')
console.log(user2)
console.log(user3)
console.log(user2.enrolmentDate)
user2.updateEnrolmentDate('2024-01-01')
console.log(user2.getAgeWithAlmaBetter())
console.log(user3.getAgeWithAlmaBetter())


