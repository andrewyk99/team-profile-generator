const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern');
const inquirer = require('inquirer');
const fs = require('fs');
const generatePage = require('../src/page-template');

class Prompt {
    constructor() {
        this.employee = [];
    }

    // First prompt to ask the user (as a manager) their basic info
    managerInfo() {
        return inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: 'What is your name? (As a manager)',
                    validate: nameInput => {
                        if (nameInput) {
                            return true;
                        }
                        else {
                            console.log('Please enter your name!');
                            return false;
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'id',
                    message: 'What is your employee ID?'
                },
                {
                    type: 'input',
                    name: 'email',
                    message: 'What is your email?',
                    validate: emailInput => {
                        if (emailInput.match( // Checks if the format for the email is correct by checking if there is an '@' and a '.com'
                            /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                        )) {
                            return true;
                        }
                        else {
                            console.log('\nPlease enter a valid email!')
                            return false;
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'officeNumber',
                    message: 'What is your office number?'
                }
            ]).then(data => { // Then it grabs the information the user puts in and gives it to the Manager class
                this.employee.push(new Manager(data.name, data.id, data.email, data.officeNumber));
                this.addEmployee(); // Calls the next function that has another prompt
            });
    }

    // Function to ask if user would like to add an employee and the type of the employee
    addEmployee() {
        return inquirer
            .prompt([
                {
                    type: 'list',
                    name: 'employeeTitle',
                    message: 'Would you like to add an engineer, intern, or quit?',
                    choices: ['Engineer', 'Intern', 'Quit']
                }
            ])
            .then(menuChoices => { // Switch case that decides which prompt get's displayed next
                let { employeeTitle } = menuChoices;
                switch(employeeTitle) {
                    case 'Engineer':
                        this.addEngineer();
                        break;
                    case 'Intern':
                        this.addIntern();
                        break;
                    case 'Quit':
                        console.log('Quit!');
                        this.promptFinish(); // Ends prompt and runs the last function
                        break;
                    default:
                        console.log('Something broke!')
                        break;
                }
            });
    }

    // Prompts when adding information for engineers
    addEngineer() {
        return inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: "What is this engineer's name?"
                },
                {
                    type: 'input',
                    name: 'id',
                    message: "What is this engineer's employee ID?"
                },
                {
                    type: 'input',
                    name: 'email',
                    message: "What is this engineer's email?"
                },
                {
                    type: 'input',
                    name: 'github',
                    message: "What is this engineer's github username?"
                }
            ]).then(data => {
                this.employee.push(new Engineer(data.name, data.id, data.email, data.github)); // Pushes data from user into the 'employee' array but in the Engineer class
                this.addEmployee();
            })
    }

    // Prompts for interns
    addIntern() {
        return inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: "What is this intern's name?"
                },
                {
                    type: 'input',
                    name: 'id',
                    message: "What is this intern's employee ID?"
                },
                {
                    type: 'input',
                    name: 'email',
                    message: "What is this intern's email?"
                },
                {
                    type: 'input',
                    name: 'school',
                    message: "What school is this intern from?"
                }
            ]).then(data => {
                this.employee.push(new Intern(data.name, data.id, data.email, data.school)); // Pushes the data from user into the 'employee' array but into the Intern class
                this.addEmployee();
            })
    }

    // Function that writes the HTML file and sends message to let user know that a file was created
    promptFinish() {
        let html = generatePage(this.employee);

        return new Promise((resolve, reject) => {
            fs.writeFile('./dist/index.html', html, err => { // Writes the html file in the 'dist' folder
                if (err) {
                    reject(err);
                    return;
                }
                resolve({
                    ok: true,
                    message: "HTML file created. Go to the 'dist' folder to check it out!"
                });
            });
        }).then(promise => {
            console.log(promise);
        });
    }
}


module.exports = Prompt;