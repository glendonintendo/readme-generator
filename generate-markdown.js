// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "No License") {
    return "";
  }

  return `[![license badge](https://img.shields.io/badge/license-${license}-brightgreen)](${renderLicenseLink(license)})`
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch(license) {
    case "MIT":
      return "https://opensource.org/licenses/MIT";
    case "Apache":
      return "https://opensource.org/licenses/Apache-2.0";
    case "GPL":
      return "https://opensource.org/licenses/gpl-license";
  }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "No License") {
    return "";
  }
  return `## License
Licensed under the [${license}](${renderLicenseLink(license)}) license.`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}
## Description
${data.description}
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Testing](#testing)
- [Questions](#questions)
${(data.license !== "No License") ? "- [License](#license)" : ""}
## Installation
${data.installation}
To install the necessary dependencies for this application, run the following commands in your command line while in the project root directory:  
\`\`\`
${data.installationCommands}
\`\`\`
## Usage
${data.usage}
## Contributing
${data.contributing}
## Testing
To run the test suite for this application, run the following commands in your command line while in the project root directory:  
\`\`\`
${data.testCommands}
\`\`\`
## Questions
[My GitHub Site](https://www.github.com/${data.username})\\
If you have any additional questions or concerns, please contact me by email at <${data.email}>.
${renderLicenseSection(data.license)}`;
}

module.exports = generateMarkdown;