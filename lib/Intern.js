const Employee = require('./Employee');
class Intern extends Employee {
    constructor(name, id, email, school) {
        // Checks if school is blank, if it is, throw error
        if (!school) {
            throw new Error("Please enter a school!");
        };
        // Get methods from Employee class
        super(name, id, email);
        
        this.school = school;
        this.getRole = 'Intern';
    }    

    getSchool() {
        return this.school;

    };
};

module.exports = Intern;