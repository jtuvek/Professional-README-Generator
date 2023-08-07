// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license || license === 'No License') {
    return '';
  }

  const licenseBadges = {
    'MIT License': 'LICENSE_BADGE_URL',
    'GNU GPLv3': 'LICENSE_BADGE_URL',
    'Apache License 2.0': 'LICENSE_BADGE_URL',
    'ISC License': 'LICENSE_BADGE_URL',
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
    'MIT License': 'LICENSE_LINK_URL',
    'GNU GPLv3': 'LICENSE_LINK_URL',
    'Apache License 2.0': 'LICENSE_LINK_URL',
    'ISC License': 'LICENSE_LINK_URL',
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

`;
  }

  module.exports = generateMarkdown;
