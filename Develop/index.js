// const {writeFile} = require('./utils/generateMarkdown');
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')


const questions = () => {
  return inquirer.prompt([
    {
      type: 'input',
      message: 'What is the name of your project?(REQUIRED)',
      name: 'project',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter the name of your project');
          return false;
        }
      }
    },

    {
      type: 'input',
      message: 'Provide a description about your project(REQUIRED)',
      name: 'description',
      validate: descriptionInput => {
        if (descriptionInput) {
          return true;
        } else {
          console.log('You need to enter a project description!');
          return false;
        }
      }
    },

    {
      type: 'input',
      message: 'What are the steps required to install your project?',
      name: 'Installation',
      
    },

    {
      type: 'input',
      message: 'Provide instructions and examples for use',
      name: 'Usage',
    },

    {
      type: 'input',
      message: 'List your collaborators(with links to their GitHub profiles).',
      name: 'Credits',
    },

    {
      type: 'input',
      message: 'Would you like to add guidelines for future contributers?',
      name: 'Contributing',
    },

    {
      type: 'input',
      message: 'Would you like to add test for your application? If yes also provide steps on how to run the test.',
      name: 'Tests',
    },

    {
      type: 'list',
      message: 'Select your applications license',
      name: 'license',
      choices: ['GNU_AGPLv3', 'GNU_GPLv3', 'Mozilla_Public_License_2.0', 'Apache_License_2.0', 'MIT_License']
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub Username (Required)',
      validate: githubInput => {
        if (githubInput) {
          return true;
        } else {
          console.log('Please enter your GitHub username!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter your email (Required)',
      validate: emailInput => {
        if (emailInput) {
          return true;
        } else {
          console.log('Please enter your email!');
          return false;
        }
      }
    },
  ])
}


// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() {
  questions()
    .then((answers) => {
      console.log(answers)
      var output = generateMarkdown(answers);
      console.log(output)
      fs.writeFile('./README.md', output, err => {
        console.log("generated read me")
      })
    })
}

// Function call to initialize app
init();

