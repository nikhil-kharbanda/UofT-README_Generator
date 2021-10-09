/* TODO: Include packages needed for this application*/
//require filestream
const fs = require("fs");

//require inquirer to allow for inputs in the cmd
const inquirer = require("inquirer");

//require markdown js file
const generateMd = require("./utils/generateMarkdown");

/* TODO: Create an array of questions for user input*/
const questions = [
  /*Question for the title*/
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
    validate: validateInput,
  },

  {
    type: "input",
    name: "description",
    message: "Please enter a breif description of the project.",
    validate: validateInput,
  },

  /*Table of contents, handle this in Markdown*/
  //Question for Installation
  {
    type: "input",
    name: "installation",
    message:
      "Please enter steps for installing this project",
    validate: validateInput,
  },

  //Question for Usage
  {
    type: "input",
    name: "usage",
    message: "What is the purpose of this project.",
    validate: validateInput,
  },

  //Question for license (grabbed differenct types from https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/licensing-a-repository)
  /*Made list using https://opensource.org/licenses */
  {
    type: "list",
    name: "license",
    message: "Select a license used for this project",
    choices: [
      "agpl-3.0",
      "gpl-3.0",
      "lgpl-3.0",
      "apache-2.0",
      "bsl-1.0",
      "mit",
      "mpl-2.0",
      "unlicense",
    ],
    validate: validateInput,
  },

  //Question for contributing
  {
    type: "input",
    name: "contributing",
    message: "How many other contributers are there for this project?",
    validate: validateInput,
  },

  {
    type: "input",
    name: "tests",
    message: "Is there a test included?",
  },

  //QUESTIONS SECTION

  //Github
  {
    type: "input",
    name: "userName",
    message: "GitHub username?",
    validate: validateInput,
  },

  //Email
  {
    type: "input",
    name: "userEmail",
    message: "Email?",
  },
];

function validateInput(value) {
  if (value != "") {
    return true;
  } else {
    return "Please answer the question with some kind on input.";
  }
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, function (err) {
    if (err) {
      return console.log(err);
    }
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((data) => {
    console.log(JSON.stringify(data, null, " "));
    var nodeData = generateMd(data);
    writeToFile("./example/README.md", nodeData);
  });
}

// Function call to initialize app
init();
