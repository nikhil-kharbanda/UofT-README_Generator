/* TODO: Include packages needed for this application*/
//require filestream
const fs = require("fs");

//require inquirer to allow for inputs in the cmd
const inquirer = require("inquirer");

//require markdown js file
const generateMd = require("./utils/generateMarkdown");

function getLicense(value){
    return value;
}


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
        message: "Enter an explination of how to install the software, or commands for the program.",
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
    {
        type: "list",
        name: "licemse",
        message: "Select a license for this project",
        choices: [
            "apache-2.0",
            "bsd-2-clause",
            "cc",
            "wtfpl",
            "ecl-2.0",
            "epl-2.0",
            "isc",
            "lppl-1.3c",
            "ms-pl",
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
    }

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
    fs.writeFile(fileName, generateMd(data), function(err){
        if(err){
            return console.log(err);
        }
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((data) => {
        console.log(JSON.stringify(data, null, " "));
        data.getLicense = getLicense(data.license);
        writeToFile("./example/README.md", data);
    });
}

// Function call to initialize app
init();
