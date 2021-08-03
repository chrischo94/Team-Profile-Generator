const Employee = require('./Employee')

class Intern extends Employee {
    constructor(name, id, email, extra){
        super(name,id,email)
        this.extra = extra
    }
    getSchool(){
        return this.extra
    }
    getRole(){
        return "Intern"
    }
}
module.exports = Intern