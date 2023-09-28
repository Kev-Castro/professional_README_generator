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
            message: 'Please provide your project title.'
        },
        {
            name: 'description',
            message: 'Please provide your project description'
        },
        {
            name: 'installation',
            message: 'Please '
        },
        {
            name: 'usage',
            message: 'Please '
        },
        {
            name: 'github',
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

