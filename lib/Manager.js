const Employee = require('./Employee')

class Manager extends Employee {
    constructor(name, id, email, extra){
        super(name, id, email)
        this.extra = extra
    }
    getOfficeNumber(){
        return this.extra
    }
    getRole(){
        return "Manager"
    }
}
module.exports = Manager