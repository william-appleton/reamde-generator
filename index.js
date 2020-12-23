
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
function writeFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);  
}

// function to initialize program
function init() {
  inquirer.prompt(questions)
  .then((inquirerResponses) => {
    writeFile("README.md", generator({...inquirerResponses}));
})
}

// function call to initialize program
init();

function generator(data) {
    return `# ${data.title}

    ## Description

    ${data.description}

    ## Table of Contents 

    * [Installation](#installation)

    * [Usage](#usage)

    * [Contributing](#contributing)

    * [Tests](#tests)

    * [Questions](#questions)

    ## Installation

    Run the following command to install the required dependencies: ${data.installation}

    ## Usage

    ${data.usage}

    ## Contributing

    ${data.contributing}

    ## Tests

    For tests, run the following command: ${data.test}

    ## Questions

    I can answer any questions at ${data.email}, and more of my work can be seen at: [${data.github}](https://github.com/${data.github}/). 
   
    `;
}