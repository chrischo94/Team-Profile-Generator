const Employee = require('./Employee')

class Manger extends Employee {
    constructor(name, id, email, extra){
        super(name,id,email)
        this.extra = extra
    }
    getOfficeNumber(){
        return this.extra
    }
    getRole(){
        return "Manger"
    }
}
module.exports = Manager