// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license || license === 'No License') {
    return '';
  }

  const licenseBadges = {
    'MIT License': 'https://img.shields.io/badge/License-MIT-yellow.svg',
    'GNU GPLv3': 'https://img.shields.io/badge/License-GPLv3-blue.svg',
    'Apache License 2.0': 'https://img.shields.io/badge/License-Apache_2.0-blue.svg',
    'ISC License': 'https://img.shields.io/badge/License-ISC-blue.svg',
  };

  return `[![License](https://img.shields.io/badge/license-${license.replace(/ /g, '%20')}-${licenseBadges[license]}-blue.svg)]`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license || license === 'No License') {
    return '';
  }

  const licenseLinks = {
    'MIT License': 'https://opensource.org/licenses/MIT',
    'GNU GPLv3': 'https://www.gnu.org/licenses/gpl-3.0',
    'Apache License 2.0': 'https://opensource.org/licenses/Apache-2.0',
    'ISC License': 'https://opensource.org/licenses/ISC',
  };

  return `[License](LICENSE_LINK_URL)`;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license || license === 'No License') {
    return '';
  }

  return `## License

This project is licensed under the ${license}. Click ${renderLicenseLink(
    license
  )} for more details.

`;

  // TODO: Create a function to generate markdown for README
  function generateMarkdown(data) {
    return `# ${data.title}
    ${renderLicenseBadge(data.license)}

## Description

TODO: Add project description here.

## Table of Contents

TODO: Add table of contents here.

## Installation

TODO: Add installation instructions here.

## Usage

TODO: Add usage information here.

${renderLicenseSection(data.license)}

## Contributing

TODO: Add contribution guidelines here.

## Tests

TODO: Add test instructions here.

## Questions

For additional questions, contact me:

GitHub: [${data.github}](https://github.com/${data.github})

Email: ${data.email}
`;
  }
}

  module.exports = generateMarkdown;
