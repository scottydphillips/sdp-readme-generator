// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');



// TODO: Create an array of questions for user input
const questions = [
	{
		type: 'input',
		message: 'What is your GitHub username?',
		name: 'username'
	}, 
	{
		type: 'input',
		message: 'What is your email address?',
		name: 'email'
	}, 
	{
		type: 'input',
		message: "What is your project's name?",
		name: 'project'
	}, 
	{
		type: 'input',
		message: 'Please write a short description of your project.',
		name: 'description'
	},
	{
		type: 'list',
		message: 'What kind of license should your project have?',
		name: 'license',
		choices: ['MIT','Apache 2.0','GPL 3.0','BSD 3','None']
	},
	{
		type: '',
		message: 'What command should be run to install dependencies',
		name: 'dependencies'
	},
	{
		type: '',
		message: 'What command should be run to run tests?',
		name: 'tests',
	},
	{
		type:'input',
		message: 'What does the user need to know about using the repo?',
		name: 'knowledge',
	},
	{
		type: 'input',
		message: 'What does the user need to know about contributing to the repo?',
		name: 'contribution'
	}
];

let userPrompt = () => inquirer.prompt(questions)
	.then((res) => {
		console.log(res)
let badgeSelector = () => {
	let choicesArray = ['MIT','Apache 2.0','GPL 3.0','BSD 3','None']
	if (res.license === choicesArray[0]) {
	badge = `![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)`;
} else if (res.license === choicesArray[1]) {
	badge = `![License: Apache 2.0]()`
} else if (res.license === choicesArray[2]) {
	badge = `![License: GPL 3.0]()`
} else if (res.license === choicesArray[3]) {
	badge = `![BSD 3]()`
} else {
	badge = `No license utilized`
} return badge;
}
	const generateMkdn = `# ${res.project}

${badgeSelector()}

## Table of Contents

*[Installation](#installation)

*[Usage](#usage)

*[License](#license)

*[Contributing](#contributing)

*[Tests](#tests)

*[Questions](#questions)

## Installation

To install necessary dependencies, run the following command:
...
npm i












	

`
fs.writeFile("README.md", generateMkdn, err => {
	if (err) {
		console.error(err)
		return;
	}
	console.log("README wrriten successfully! Huzzah!")
	}
);
});

userPrompt();