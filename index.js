// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = ["Enter the project title",
                   "Enter your project description",
                   "Enter installation instructions",
                   "usage",
                   "contributing",
                   "tests",
                   "questions"];

// I go thorugh the list of questions?
// i make a long inquierer prompt to ask all the questions
// log the object to the screen

const promptReadMe = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the project title?',
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
            message: 'Enter the project description',
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
            choices: ["A", "B", "C"]
        },
        {
            type: 'input',
            name: 'tests',
            message: "tests for your application.",
            default: false
        },
        {
            type: 'input',
            name: 'contact',
            message: 'Enter your contact information',
            default: false
        }
    ])
    .then(ProjectData => {
        console.log(ProjectData);
    })
}

promptReadMe();

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
