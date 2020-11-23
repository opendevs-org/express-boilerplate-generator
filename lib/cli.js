#!/usr/bin/env node

const path = require('path');
const expressGenTs = require('./express-generator');
const { prompt } = require('prompts');
const { say } = require('cfonts');

const options = [
	{
		description: 'Express Server Boilerplate without Auth',
		defaultName: 'express-server-boilerplate',
		templateName: 'express-server-boilerplate',
		dependencies: 'cookie-parser dotenv express express-async-errors helmet mongoose morgan snyk swagger-ui-express',
		devDependencies: '@types/express @types/cookie-parser @types/find @types/helmet @types/jsonfile @types/mongoose @types/morgan @types/node @types/swagger-ui-express @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint find fs-extra git-cz jsonfile nodemon ts-node tsconfig-paths typedoc typescript'
	}, {
		description: 'Express Server Boilerplate with Auth',
		defaultName: 'express-server-boilerplate-auth',
		templateName: 'express-server-boilerplate-auth',
		dependencies: 'bcryptjs cookie-parser dotenv express express-async-errors helmet mongoose morgan passport passport-jwt passport-local',
		devDependencies: '@types/express @types/cookie-parser @types/passport @types/bcryptjs @types/find @types/helmet @types/jsonfile @types/mongoose @types/morgan @types/node @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint find fs-extra git-cz jsonfile nodemon ts-node tsconfig-paths typescript @types/passport-jwt'
	}
];


const getDest = (option, destFolder, projectName) => {
	return `${path.join(process.cwd(), destFolder)}/${projectName || option.defaultName}`;
};


const initiate = async (option, path, projectName) => {
	try {
		const destination = getDest(option, path, projectName);
		await expressGenTs(option, destination);
		console.log('\x1b[32m\x1b[40m%s\x1b[0m', `Project setup complete! at ${destination}`);
	} catch (error) {
		console.error(error);
	}
};


say('express server generator', {
	font: 'chrome',
	align: 'center',
	colors: ['system'],
	background: 'transparent',
	letterSpacing: 1,
	lineHeight: 1,
	space: true,
});


say('opendevs', {
	font: 'chrome',
	align: 'right',
	colors: ['system'],
	background: 'transparent',
	letterSpacing: 1,
	lineHeight: 1,
	space: true,
	gradient: ['#fff', '#89d8d3'],
});


console.log('\x1b[33m\x1b[40m%s\x1b[0m', 'Setting up new Express Server Boilerplate project...\n');


const onCancel = () => {
	console.log('\x1b[31m%s\x1b[0m', 'Project creation failed!');
};


(async () => {
	const questions = [
		{
			type: 'select',
			name: 'option',
			message: 'Select a option for the type of project',
			validate: value => value >= 1 && value <=2 ? true : 'Specify number in the range of 1 - 2',
			suggest: (input, choices) => choices.filter(i => i.value),
			choices: options.map((el, index) => ({ value: index, title: el.templateName, description: el.description })),
			fallback: {
				title: 'Using default',
				value: 1
			}
		},
		{
			type: 'text',
			name: 'projectName',
			message: 'Specify project name',
			validate: projectName => /^(@[a-z0-9-~][a-z0-9-._~]*\/)?[a-z0-9-~][a-z0-9-._~]*$/.test(projectName) ? true : 'Invalid project name, please follow npm guidelines'
		},
		{
			type: 'text',
			name: 'path',
			message: '[OPTIONAL] Specify directory where you want to create the project, if no path is provided current directory will be used.',
			fallback: {
				title: 'Using default',
				value: './'
			}
		}
	];

	const answers = await prompt(questions, { onCancel });

	if (answers.option, answers.path, answers.projectName) {
		console.log('\x1b[33m\x1b[40m%s\x1b[0m', 'Let\'s get started...');
		initiate(options[answers.option], answers.path, answers.projectName);
	}


})();
