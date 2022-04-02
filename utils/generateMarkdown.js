// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicense(license) {
  return `## License
  This repo is licensed under the ${license.name} license. More information can be found [here](${license.link})
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
    return
  }
  url = `https://github.com/${questions}`;
  return `hit me up on [Github](${url})
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
  
  ![image](${data.license.svg})

  ${renderTableOfContents(data)}
  ${renderInstallation(data.installation)}
  ${renderUsage(data.usage)}
  ${renderCredits(data.credits)}
  ${renderTests(data.tests)}
  ${renderQuestions(data.questions)}
  ${renderLicense(data.license)}
`;
}

module.exports = generateMarkdown;