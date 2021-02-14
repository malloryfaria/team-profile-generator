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
    }    

    getSchool() {
        return this.school;

    };

    getRole() {
        this.role = "Intern";
        return this.role;
    }
};

module.exports = Intern;