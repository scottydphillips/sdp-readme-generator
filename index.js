// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateMarkdown = require('./utils/generateMarkdown.js')


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
		choices: ['MIT','Apache 2.0','GPl 3.0','BSD 3','None']
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

let userPrompt = () => inquirer.prompt(questions);

// TODO: Create a function to write README file
function writeToFile('README.md', data) {
	console.log(data)
}

// TODO: Create a function to initialize app
function init() {
	try {
		const answers = await userPrompt();
		const generateContent = generateMarkdown(answers);
		await writeFileAsync (./dist/REAMDE.md, generateContent);
		console.log("REAMDE is generated!");
	}
	catch(err) {
		console.error(err);
	}
}

// Function call to initialize app
init();
