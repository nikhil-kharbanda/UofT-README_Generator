// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "agpl-3.0":
      return "[!(https://img.shields.io/badge/License-AGPL%20v3-blue.svg)]";

    case "GNU GPLv3":
      return "[![https://img.shields.io/badge/License-GPLv3-blue.svg]]";

    case "lgpl-3.0":
      return "[!(https://img.shields.io/badge/License-LGPL%20v3-blue.svg)]";

    case "apache-2.0":
      return "[!(https://img.shields.io/badge/License-Apache%202.0-blue.svg)]";

    case "bsl-1.0":
      return "[!(https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)]";

    case "mit":
      return "[!(https://img.shields.io/badge/License-MIT-yellow.svg)]";

    case "mpl-2.0":
      return "[!(https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)]";

    default:
        return ;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${data.renderLicenseBadge(data)}
`;
}

module.exports = generateMarkdown;
