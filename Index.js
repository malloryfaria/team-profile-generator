// Required packages
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const fileDirectory = path.resolve(__dirname, "dist");
const filePath = path.join(fileDirectory, "team.html");

// Required module exports
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const render = require("./lib/generateHTML");

// Employee array
let employees = [];

// Questions array for all employees
const questions = [           
    {
        type: "input",
        name: "name",
        message: "What is the name of this employee?"
    },
    {
        type: "input",
        name: "id",
        message: "What is the ID of this employee?"
    },
    {
        type: "input",
        name: "email",
        message: "What is this employee's email?"
    },
    {
        type: "list",
        name: "role",
        message: "What role does this employee have?",
        choices: ["Engineer", "Intern", "Manager"]
    }
    ]

    // Questions for manager role
    managerQuestions = [
        {
            type: "input",
            name: "officeNumber",
            message: "What is the manager's office number? (Required)" 
        }
    ]

    // Questions for engineer role
    engineerQuestions = [
        {
            type: "input",
            name: "github",
            message: "What is the engineer's Github Username? (Required)",
            validate: githubInput => {
                if (githubInput) {
                  return true;
                } else {
                  console.log("Please enter a GitHub username!");
                  return false;
                }
              }
        }
    ]

    // Questions for intern role
    internQuestions = [

        {
            type: "input",
            name: "school",
            message: "What school is the intern from? (Required)" 
        }
    ]

    // Function to create new employees
    const newEmployee = () => {
        inquirer.prompt(questions)
          .then((response) => {
            let name = response.name;
            let id = response.id;
            let email = response.email;
            let role = response.role;
            let officeNumber;
            let github;
            let school;

            if (role === "Engineer") {
            inquirer.prompt(engineerQuestions).then((response) =>{
                github = response.github;
                let employee = new Engineer(name, id, email, github);
                employees.push(employee);
                anotherOne();
                });
            }
            else if (role === "Manager") {
                inquirer.prompt(managerQuestions).then((response) =>{
                        officeNumber = response.officeNumber;
                        let employee = new Manager(name, id, email, officeNumber);
                        employees.push(employee);
                        anotherOne();
                    });
                }
            else if (role === "Intern") {
                inquirer.prompt(internQuestions).then((response) =>{
                        school = response.school;
                        let employee = new Intern(name, id, email, school);
                        employees.push(employee);
                        anotherOne();
                    });
            }

        });    
    
    }

    // Function to initialize the application
    function init() {
        anotherOne();
    };   


    const anotherOne = () => {
        inquirer
        .prompt({
            type: "confirm",
            name: "anotherOne",
            message: "Would you like to add an employee?"
        }).then(function(data){
            if (data.anotherOne){
                newEmployee();
            } else {
                const renderHTML = (employees) =>{
                    fs.writeFile(filePath,render(employees),"utf8",function(err){
                        if (err) {return console.log(err)};
          
                        console.log("Success!");
                       }); 
                }
                renderHTML();

                } 
                
                
            }) 
        }

    // Function call to initialize app
    init();