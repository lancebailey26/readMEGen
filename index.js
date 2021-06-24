// the original code of this homework asked for multiple functions to be written but i found it easier to just write it all as one.
const inquirer = require('inquirer'); //requires inquirer
const fs = require('fs'); //requires node fs

//questions for prompt
const questions = ["Title of project", "Describe your project: ", "Link to deployed app: ", "What steps are needed to install your project?: ", "Provide instructions for use: ", "Add Screenshot (file location): ", "Add Credits: ", "Choose a license: ", "Today's Date (MM/DD/YYYY): ", "Creator name: "];
//licenses prompt
const licenses = ["MIT License", "GNU GPLv3", "GNU AGPLv3", "GNU LGPLv3","Mozilla Public License 2.0","Apache License 2.0","Boost Software License 1.0","The Unlicense"];


const readME= (answers) =>
//md file format with the answers from the prompts
`# ${answers.title}\n
## Description\n
${answers.description}\n    
## ${answers.link}\n
![Screenshot](${answers.screenshot})\n
## Installation\n
${answers.install}\n
## Usage\n
${answers.ins}\n
## Credits\n
${answers.credits}\n
## Copyright ${answers.creator} ${answers.date} License: ${answers.license}`;
     
    inquirer
        .prompt([
            {
                //title 
                type:'input',
                name:'title',
                message:questions[0]
            },
            {
                //description 
                type:'input',
                name:'description',
                message:questions[1],
            },
            {
                //link 
                type:'input',
                name:'link',
                message:questions[2]
            },
            {
                //install directions
                type:'input',
                name: 'install',
                message:questions[3],
            },
            {
                //instructions
                type:'input',
                name:'ins',
                message:questions[4],
            },
            {
                //screenshot link
                type:'input',
                name:'screenshot',
                message:questions[5],
            },
            {
                //credits
                type: 'input',
                name:'credits',
                message:questions[6],
            },
            {
                //licenses 
                type:'list',
                name:'license',
                message:questions[7],
                choices:[...licenses],
            },
            {
                //ask for date
                type:'input',
                name:'date',
                message:questions[8],
            },
            {
                //ask for name
                type:'input',
                name:'creator',
                message:questions[9],
            }
        ])
        .then((answers) => {
            //take output, rename to answers, store it in a variable
            const realAnswers = readME(answers);
            //write a readme.md with the content of realAnswers, else report a variable.
            fs.writeFile('README.md', realAnswers, (err) =>
            err ? console.log(err) : console.log('README Generated')
            );    

          
        });
