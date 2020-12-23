
const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");


// array of questions for user
const questions = [
  {
      type: "input",
      name: "github",
      message: "What's your username for GitHub"
  },
  {
      type: "input",
      name: "email",
      message: "What's your email?"
  },
  {
    type: "input",
    name: "project",
    message: "What's the name of your project"
  }, 
  {
    type: "input",
    name: "description",
    message: "What's your project about?"
  },
  {
    type: "list",
    name: "license",
    message: "What's the license for this project?",
    choices: ["APACHE 2.0", "GPL 3.0", "MIT", "None"]
  },
  {
    type: "input",
    name: "installation",
    message: "Which command should be used to intall any dependencies?",
    default: "npm install"
  },
  {
    type: "input",
    name: "test",
    message: "Which command should be used to run tests?",
    default: "npm test"
  },
  {
    type: "input",
    name: "usage",
    message: "What should the user know to use the repo?",
  },
  {
    type: "input",
    name: "contributing",
    message: "What should the user know about contributing?",
  },
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
