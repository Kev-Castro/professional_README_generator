const inquirer = require('inquirer')
const tools = require('./lib/generate.js')

function getGNULicense() {
    return inquirer.prompt({
        name: 'gnu',
        message: 'Please select your GNU License',
        type: 'list',
        choices: ['GPL v3', 'GLP v2', 'AGPL v3']
    });
}

function promptUser() {
    inquirer.prompt([
        {
            name: 'title',
            message: 'Please provide your project Title.'
        },
        {
            name: 'description',
            message: 'Please provide your project Description'
        },
        {
            name: 'installation',
            message: 'Please provide any info on the Installation'
        },
        {
            name: 'usage',
            message: 'Please provide any info on the Usage '
        },
        {
            name: 'contributing',
            message: 'Please '
        },
        {
            name: 'tests',
            message: 'Please '
        },
        {
            name: 'github',
            message: 'Please '
        },
        {
            name: 'email',
            message: 'Please '
        },
        {
            name: 'license',
            message: 'Please choose the license you would like',
            type: 'list',
            choices: ['MIT', 'ISC', 'GNU']
        }
    ]).then((answersObj) => {
        if (answersObj.license === 'GNU') {
            return getGNULicense()
                .then((gnuAnswerObj) => {
                    answersObj.license = gnuAnswerObj.gnu;
                    tools.generateReadme(answersObj)
                });
        }

        tools.generateReadme(answersObj)
    });
}

function init() {
    tools.anotherFunc
    promptUser();
}

init();

