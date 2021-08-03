const Employee = require('./Employee')

class Engineer extends Employee {
    constructor(name, id, email, extra){
        super(name,id,email)
        this.extra = extra
    }
    getGithub(){
        return this.extra
    }
    getRole(){
        return "Engineer"
    }
}

module.exports = Engineer