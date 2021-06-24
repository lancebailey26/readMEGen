
const inquirer = require('inquirer');
const fs = require('fs');


const questions = ["Title of project", "Describe your project: ", "Link to deployed app", "What steps are needed to install your project?: ", "Provide instructions for use: ", "Add Screenshot (file location): ", "Add Credits: ", "Choose a license: ", "Today's Date (MM/DD/YYYY): ", "Creator name: "];
const licenses = ["MIT License", "GNU GPLv3", "GNU AGPLv3", "GNU LGPLv3","Mozilla Public License 2.0","Apache License 2.0","Boost Software License 1.0","The Unlicense"];


const init= (answers) =>
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
## Copyright ${answers.creator} ${answers.date} License: ${answers.license}`    ;
     
    inquirer
        .prompt([
            {
                type:'input',
                name:'title',
                message:questions[0]
            },
            {
                type:'input',
                name:'description',
                message:questions[1],
            },
            {
                type:'input',
                name:'link',
                message:questions[2]
            },
            {
                type:'input',
                name: 'install',
                message:questions[3],
            },
            {
                type:'input',
                name:'ins',
                message:questions[4],
            },
            {
                type:'input',
                name:'screenshot',
                message:questions[5],
            },
            {
                type: 'input',
                name:'credits',
                message:questions[6],
            },
            {
                type:'list',
                name:'license',
                message:questions[7],
                choices:[...licenses],
            },
            {
                type:'input',
                name:'date',
                message:questions[8],
            },
            {
                type:'input',
                name:'creator',
                message:questions[9],
            }
        ])
        .then((answers) => {
            const realAnswers = init(answers);
            fs.writeFile('README.md', realAnswers, (err) =>
            err ? console.log(err) : console.log('README Generated')
            );    

          
        });