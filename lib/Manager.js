const Manager = require('./Manager')

class Manger extends Employee {
    constructor(name, id, email, officeNumber){
        super(name,id,email)
        this.officeNumber = officeNumber
    }
    getofficeNumber(){
        return this.officeNumber
    }
    getRole(){
        return Manger
    }
}
module.exports = Manager