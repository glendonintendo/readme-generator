# README Generator <!-- omit in toc -->
- [Description](#description)
- [Intallation and Usage](#intallation-and-usage)
- [Demo](#demo)
- [Submission Requirements](#submission-requirements)
  - [User Story](#user-story)
  - [Acceptance Criteria](#acceptance-criteria)
  - [Grading Criteria](#grading-criteria)
## Description
The README Generator takes is run entirely through a command line interface. Upon execution of the index.js file, the user is prompted to enter information regarding their readme file. After getting the input information, my program formats the data and generates a professional readme.
## Intallation and Usage
This program uses Inquirer, a node package that makes . To use this application Inquirer must first be installed. Use the command `npm i` in the command line while in the project root directory to install Inquirer.
## Demo
A video demo of my project can be found [here](https://youtu.be/gMK-CIRVNpI).
## Submission Requirements
### User Story
```
AS A developer
I WANT a README generator
SO THAT I can quickly create a professional README for a new project
```
### Acceptance Criteria
```
GIVEN a command-line application that accepts user input
WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
WHEN I enter my project title
THEN this is displayed as the title of the README
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README
```
### Grading Criteria
#### Deliverables - 20% <!-- omit in toc -->
- [x] A sample README generated using the application
- [x] GitHub repository with application code
#### Walkthrough Video - 27% <!-- omit in toc -->
- [x] Demonstrates functionality of the README generator
- [x] Video link included in README file
- [x] Demonstrates how a user would invoke the application from the command line
- [x] Demonstrates how a user would enter responses to all of the prompts in the application
- [x] Demonstrates a generated README that matches the user input
- [x] README generated has functional table of contents
#### Technical Acceptance Criteria - 40% <!-- omit in toc -->
- [x] Prompts user for project description, installation instructions, usage information, contribution guidelines, and test instructions
- [x] Prompts user to pick license from a list
- [x] Prompts user for GitHub username and contact email
- [x] Creates a markdown file titled README from user inputs
- [x] Generated markdown file includes a table of contents, badge with link to associated license, and organized user inputs
- [x] Uses Inquirer package
#### Repository Quality - 13% <!-- omit in toc -->
- [x] Repository has a unique name
- [x] Reponsitory follows best practices for file structure and naming conventions
- [x] Respository follows best practices for class/id naming conventions, indentation, quality comments, etc.
- [x] Repository contains multiple descriptive commit messages
- [x] Repository contains a high-quality README with description and a link to walkthrough video