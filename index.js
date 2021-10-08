/* TODO: Include packages needed for this application*/
//require filestream
const fs = require("fs");

//require inquirer to allow for inputs in the cmd
const inquirer = require("inquirer");

//require markdown js file
const generateMd = require("./utils/generateMarkdown");

/*

function getLicense(value) {
  switch (value) {
    case "agpl-3.0":
      return "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)";

    case "GNU GPLv3":
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";

    case "lgpl-3.0":
      return "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)";

    case "apache-2.0":
      return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";

    case "bsl-1.0":
      return "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";

    case "mit":
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";

    case "mpl-2.0":
      return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";

    default:
        return ;
  }
}

/*

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
    message: "Please enter a description of your project.",
    validate: validateInput,
  },

  /*Table of contents, handle this in Markdown*/
  //Question for Installation
  {
    type: "input",
    name: "installation",
    message:
      "Enter an explination of how to install the software, or commands for the program.",
    validate: validateInput,
  },

  //Question for Usage
  {
    type: "input",
    name: "usage",
    message: "How can this project/project be used.",
    validate: validateInput,
  },

  //Question for license (grabbed differenct types from https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/licensing-a-repository)
  /*Made list using https://opensource.org/licenses */
  {
    type: "list",
    name: "license",
    message: "Select a license for this project",
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
    message: "How can other users contribute to this project?",
    validate: validateInput,
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
    message: "GitHub email?",
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
  fs.writeFile(fileName, generateMd(data), function (err) {
    if (err) {
      return console.log(err);
    }
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((data) => {
    console.log(JSON.stringify(data, null, " "));
    data.getLicense = generateMd(data.license);
    writeToFile("./example/README.md", data);
  });
}

// Function call to initialize app
init();
