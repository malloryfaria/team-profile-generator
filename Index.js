// Required packages
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");

// Required module exports
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const GenerateHTML = require("./lib/GenerateHTML");

// Employee array
const employees = [];

// Questions array
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
    
    // Commented out for now, but will have to pass the responses to the write the html with this
    // // Function to write the index.html file
    // function writeToFile(fileName, data) {
    //     // Uses the node path module & process.cwd function to join the current working directory to the file name passed to it from the init function
    //     return fs.writeFileSync(path.join(process.cwd(), fileName), data);
    // };


    // Function to initialize the application
    function init() {
        inquirer.prompt(questions)
        .then(function(inquirerResponses) {
            if (inquirerResponses.role === "Engineer") {
            inquirer.prompt(
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
                })
            }
            else if (inquirerResponses.role === "Manager") {
                inquirer.prompt(
                    {
                        type: "input",
                        name: "officeNumber",
                        message: "What is the manager's office number? (Required)" 
                    })
                }
            else if (inquirerResponses.role === "Intern") {
                inquirer.prompt(
                    {
                        type: "input",
                        name: "school",
                        message: "What school is the intern from? (Required)" 
                    })
            }
        })

        // Commented out for now, but will have to pass the responses to the write the html with this
        // .then(inquirerResponses => {
        //     console.log("Your html file is now being generated. You will find the completed file in the 'dist' folder.")
        // writeToFile("/dist/index.html", GenerateHTML({ ...inquirerResponses }));
        // })
    };

    // Function call to initialize app
    init();