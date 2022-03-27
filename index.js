// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const licenses = [
    {
    name: "Apache License 2.0",
    value: "this stuff",
    badge: "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]",
    link: "https://opensource.org/licenses/Apache-2.0"
     },
    {
    name: "GNU General Public License v3.0",
    value: "this stuff",
    badge: "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]",
    link: "https://www.gnu.org/licenses/gpl-3.0"
    },
    {
    name: "MIT License",
    value: "this stuff",
    badge: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]",
    link: "https://opensource.org/licenses/MIT"
        }
]

const promptReadMe = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: '(Required) What is the project title?',
            validate: nameInput => {
                if (nameInput) {
                  return true;
                } else {
                  console.log('You need to enter a project title!');
                  return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: '(Required) Enter the project description',
            validate: nameInput => {
                if (nameInput) {
                  return true;
                } else {
                  console.log('You need to enter a project description!');
                  return false;
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running',
            default: false
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide instructions and examples for use.',
            default: false
        },
        {
            type: 'input',
            name: 'credits',
            message: 'List your collaborators.',
            default: false
        },
        {
            type: 'list',
            name: 'license',
            message: 'Select your license.',
            choices: licenses,
            default: false
        },
        {
            type: 'input',
            name: 'tests',
            message: "tests for your application.",
            default: false
        },
        {
            type: 'input',
            name: 'questions',
            message: 'Enter your github information',
            default: false
        }
    ])
}



// TODO: Create a function to write README file
function writeToFile(data) {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/README.md', generateMarkdown(data), err => {
            if (err) {
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: "File Created!"
            });
        });
    });
}

// TODO: Create a function to initialize app
function init() {
    promptReadMe()
    .then(answers => {
        console.log(answers)
        writeToFile(answers)
        console.log("ReadMe written!")
    })
}

// Function call to initialize app
init();
