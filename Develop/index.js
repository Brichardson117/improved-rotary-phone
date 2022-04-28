const inquirer = require('inquirer');
const fs = require('fs');


const questions = () => {
    return inquirer.prompt([
        {
        type: 'input',
        message: 'What is the name of your project?(REQUIRED)',
        name: 'project name',
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
         type: 'list',
         message: 'Select your applications license',
         name: 'license',
         choices: [ ]
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
questions()

// TODO: Create a function to write README file
function writeFile(data) {
    return new Promise((resolve, rejects) =>{
        fs.writeFile('README.md', data, err => {
            if(err) throw err;
            console,log('Your README.md has been created')
        })
    })
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
