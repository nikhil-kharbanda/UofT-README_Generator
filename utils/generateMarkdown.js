// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

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
      return;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log("title: " + data.title);

  return `
<h1 align="center">${data.title} </h1>

  ${getLicense(data.license)} <br />

## Description
  ${data.description}

## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)  

## Installation
  ${data.installation}

## Installation
  ${data.usage}

## Contributing
  ${data.contributing}

## Tests
  ${data.tests}

## About the developer 
  ${data.userName} <br >
  ${data.userEmail}

  
`;
}

module.exports = generateMarkdown;
