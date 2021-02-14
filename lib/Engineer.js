const Employee = require('./Employee');
class Engineer extends Employee {
    constructor(name, id, email, github) {
        // Checks if github is blank, if it is, throw error
        if (!github) {
            throw new Error("Please enter a GitHub username!");
        };
        // Get methods from Employee class
        super(name, id, email);
        
        // GitHub username
        this.github = github;
        this.getRole = 'Engineer';
    }    

    getGithub() {
        return "https://github.com/" + this.github;
    }
};

module.exports = Engineer;