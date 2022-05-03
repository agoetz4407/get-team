const fs = require('fs')
const inquirer = require('inquirer')
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')

const team = []

const generateManager = function(managerInfo) {
    const manager = new Manager(managerInfo.name, managerInfo.id, managerInfo.email, managerInfo.officeNumber)
    team.push(manager)
}

const generateEngineer = function(engineerInfo) {
    const engineer = new Engineer(engineerInfo.name, engineerInfo.id, engineerInfo.email, engineerInfo.github)
    team.push(engineer)
}

const generateIntern = function(internInfo) {
    const intern = new Intern(internInfo.name, internInfo.id, internInfo.email, internInfo.school)
    team.push(intern)
}

const engineerPrompt = function() {
    inquirer.prompt([
        {
            type:'input',
            name: 'name',
            message: "What is the engineer's name?",
            validate: input => {
                if (input) {
                    return true
                } else {
                    console.log("Please enter the engineer's name")
                    return false
                }
            }
        },
        {
            type:'input',
            name: 'id',
            message: "What is the engineer's employee ID?",
            validate: input => {
                if (input) {
                    return true
                } else {
                    console.log("Please enter the engineer's employee ID")
                    return false
                }
            }
        },
        {
            type:'input',
            name: 'email',
            message: "What is the engineer's email address?",
            validate: input => {
                if (!input || !input.includes('@') || !input.includes('.')) {
                    console.log(' Please enter a valid email address')
                    return false
                }
                else {
                    return true
                }
            }
        },
        {
            type:'input',
            name: 'github',
            message: "What is the engineer's Github username?",
            validate: input => {
                if (input) {
                    return true
                } else {
                    console.log("Please enter the engineer's Github username")
                    return false
                }
            }
        }
    ])
    .then(engineer => {
        generateEngineer(engineer)
        teamPrompt()
    })
}

const teamPrompt = function() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'teamChoice',
            message: 'Choose team member role to add, or select "Done" to finish',
            choices: ['Engineer', 'Intern', 'Done']
        }
    ])
    .then(choice => {
        switch(choice){
            case 'Engineer':
                engineerPrompt()
                break;
            case 'Intern':
                internPrompt()
                break;
            case 'Done':
                generateTeam()
        }
    })
}

const mainPrompt = function() {
    console.log('Welcome to the get-team team builder app!')
    inquirer.prompt([
        {
            type:'input',
            name: 'name',
            message: "What is the team manager's name?",
            validate: input => {
                if (input) {
                    return true
                } else {
                    console.log("Please enter the team manager's name")
                    return false
                }
            }
        },
        {
            type:'input',
            name: 'id',
            message: "What is the team manager's employee ID?",
            validate: input => {
                if (input) {
                    return true
                } else {
                    console.log("Please enter the team manager's employee ID")
                    return false
                }
            }
        },
        {
            type:'input',
            name: 'email',
            message: "What is the team manager's email address?",
            validate: input => {
                if (!input || !input.includes('@') || !input.includes('.')) {
                    console.log(' Please enter a valid email address')
                    return false
                }
                else {
                    return true
                }
            }
        },
        {
            type:'input',
            name: 'officeNumber',
            message: "What is the team manager's office number?",
            validate: input => {
                if (input) {
                    return true
                } else {
                    console.log("Please enter the team manager's office number")
                    return false
                }
            }
        }
    ])
    .then(manager => {
        generateManager(manager)
        teamPrompt()
    })
}

mainPrompt()