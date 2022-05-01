const fs = require('fs');
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `
  ![${license}](https://shields.io/badge/license-${license}-brightgreen)
  `
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return `
  [${license}](https://opensource.org/license/${license})
  `
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `
  ### This project uses ${license}`
}
 
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.project}

  ## License
  ${renderLicenseSection(data.license)}
  ${renderLicenseLink(data.license)}
  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}
  
  
  ## Table Of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)
  * [Questions](#Questions)
  

  ## Installation
  ${data.Installation}

  ## Usage
  ${data.Usage}

  ## Credits
  ${data.Credits}

  ## Contributing
    ${data.Contributing}


  ## Tests
  ${data.test}

  ## Questions
If you have additional questions you can reach me here ${data.email} and https://github.com/${data.github}




`;
}

module.exports = generateMarkdown;
