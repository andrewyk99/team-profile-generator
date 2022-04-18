const Employee = require('./Employee');
const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern');
const inquirer = require('inquirer');
const fs = require('fs');
const generatePage = require('../src/page-template');

class Prompt {
    constructor() {
        this.manager = [];
        this.engineer = [];
        this.intern = [];
    }

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
                    name: 'email',
                    message: 'What is your email?'
                },
                {
                    type: 'input',
                    name: 'id',
                    message: 'What is your employee ID?'
                },
                {
                    type: 'input',
                    name: 'officeNumber',
                    message: 'What is your office number?'
                }
            ]).then(data => {
                this.manager.push(new Manager(data.name, data.email, data.id, data.officeNumber));
                this.addEmployee();
            });
    }

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
            .then(menuChoices => {
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
                        this.promptFinish();
                        break;
                    default:
                        console.log('Something broke!')
                        break;
                }
            });
    }

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
                this.engineer.push(new Engineer(data.name, data.id, data.email, data.github));
                this.addEmployee();
            })
    }

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
                this.intern.push(new Intern(data.name, data.id, data.email, data.school));
                this.addEmployee();
            })
    }

    promptFinish() {
        let html = generatePage(this.manager, this.engineer, this.intern);

        return new Promise((resolve, reject) => {
            fs.writeFile('./dist/index.html', html, err => {
                if (err) {
                    reject(err);
                    return;
                }
                resolve({
                    ok: true,
                    message: 'File Created!'
                });
            });
        });
    }
}


module.exports = Prompt;