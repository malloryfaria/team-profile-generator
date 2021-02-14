const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        // Checks if office number is blank, if it is, throw error
        if (!officeNumber) {
            throw new Error("Please enter an office number!");
        };
        // Get methods from Employee class
        super(name, id, email);

        this.officeNumber = officeNumber;
    }    

    getRole() {
        this.role = "Manager";
        return this.role;
    }
}

module.exports = Manager;