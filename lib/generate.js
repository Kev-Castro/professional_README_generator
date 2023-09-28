const fs = require('fs');

function generateBadge(license) {
    // if (license === 'MIT') {
    //     return 'https://img.shields.io/badge/License-MIT-yellow.svg'
    // }
    const url = 'https://img.shields.io/badge/License-'
    switch (license) {
        case 'MIT':
            return url + 'MIT-yellow.svg'
        case "ISC":
            return url + 'ISC-blue.svg'
        case "GPL v3":
            return url + 'GPLv3-blue.svg'
        case "GPL v2":
            return url + 'GPLv2-blue.svg'
        case "AGPL v3":
            return url + 'AGPLv3-blue.svg'
    }
}

function generateReadme(answerObj) {
    const badge = generateBadge(answerObj.license)
    const md = `
# ${answerObj.title}
## Description
> ${answerObj.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Installation](#installation)
- [Installation](#installation)

## Installation


## Usage


## License


## Contributing


## Tests


## Questions

![License: ${answerObj.license}](${badge})
`;

    fs.writeFile(`.${answerObj.title}_README.md`, md.trim(), (err) => {
        if (err) throw err;

        console.log('File created successfully')
    });
}

function anotherFunc() {
    console.log('another');
}

module.exports = {
    generateReadme: generateReadme,
    anotherFunc: anotherFunc
};