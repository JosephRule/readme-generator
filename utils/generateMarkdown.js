// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `## License
  License selected is ${license}.
  `;
}

function renderInstallation(installation) {
  if (!installation) {
    return '';
  }
  return `## Installation
  ${installation}
  `
}

function renderUsage(usage) {
  if (!usage) {
    return '';
  }
  return `## Usage
  ${usage}
  `
}

function renderCredits(credits) {
  if (!credits) {
    return '';
  }
  return `## Credits
  ${credits}
  `
}

function renderLicense(license) {
  if (!license) {
    return '';
  }
  return `## License
  ${license}
  `
}

function renderTests(tests) {
  if (!tests) {
    return '';
  }
  return `## Tests
  ${tests}
  `
}

function renderQuestions(questions) {
  if (!questions) {
    return '';
  }
  return `## Questions
  ${questions}
  `
}

function renderTableOfContents(data) {
  console.log("Toc function ran")
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Project Description
  ${data.description}

  ${renderTableOfContents(data)}
  ${renderInstallation(data.installation)}
  ${renderUsage(data.usage)}
  ${renderCredits(data.credits)}
  ${renderLicense(data.license)}
  ${renderTests(data.tests)}
  ${renderQuestions(data.questions)}
`;
}

module.exports = generateMarkdown;