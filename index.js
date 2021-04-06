const inquirer = require("inquirer");
const generateMarkdown = require("./generate-markdown.js");
const writeReadme = require("./generate-readme.js")

const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the name of your project (required)?",
        validate: projectNameInput => {
            if (projectNameInput) {
                return true;
            } else {
                console.log("Please enter the name of your project. This field is not optional.");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "description",
        message: "Describe your project (required).",
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log("Please enter a description of your project. This field is not optional.");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "installation",
        message: "What are the installation requirements of your project (required)?",
        validate: instructionsInput => {
            if (instructionsInput) {
                return true;
            } else {
                console.log("Please enter the installation instructions for your project. This field is not optional.");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "usage",
        message: "Provide instructions and examples for use (required).",
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log("Please provide instructions on how to use your project. This field is not optional.");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "contributing",
        message: "Describe how people may contribute to this project (required).",
        validate: contributingInput => {
            if (contributingInput) {
                return true;
            } else {
                console.log("Please describe how people may contribute to your project. This field is not optional.");
                return false;
            }
        }
    },
    {
        type: "list",
        name: "license",
        message: "Choose a license your project (required).",
        choices: ["MIT", "Apache", "GPL", "No License"],
        validate: licenseInput => {
            if (licenseInput) {
                return true;
            } else {
                console.log("Please choose a license your project. This field is not optional.");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "username",
        message: "What is your GitHub username(required)?",
        validate: usernameInput => {
            if (usernameInput) {
                return true;
            } else {
                console.log("Please enter your GitHub username. This field is not optional.");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "email",
        message: "Please enter an email for people to contact you with questions (required).",
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log("Please enter a contact email. This field is not optional.");
                return false;
            }
        }
    }
];

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(readmeData => generateMarkdown(readmeData))
        .then(readmeText => writeReadme(readmeText))
        .then(writeReadmeResponse => console.log(writeReadmeResponse))
        .catch(err => console.log(err))
}

// Function call to initialize app
init();