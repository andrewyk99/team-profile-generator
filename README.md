# Team Profile Generator

## Description
An application that will generate a page with employee information on cards based on the user input.

## Built With
* JavaScript
* Node.js
* Inquirer
* Jest
* Bootstrap CSS

## Installation
You must install Node.js and clone the repository. Open the root folder and run "npm install" for all the required modules.

## Usage
In order to use the application, you need to run "node index" and answer the following questions. The user is expected to be a team manager who can add other employees, an engineer or intern. The team manager prompts are required, but adding other employees are optional which you can see when answering the questions. When prompted to add an employee, the user can choose to "quit" which ends the prompt and creates an HTML file in the /dist folder.

![screenshot of terminal](./assets/images/terminal-ss.png?raw=true "Terminal Screenshot")
Screenshot of the command-line with the questions answered.

![screenshot of created html](./assets/images/website-ss.png?raw=true "Generated Website Screenshot")
Screenshot of the website generated with the input from the previous screenshot of the command-line.

Video Demo: 

## Test
Tests for all the classes were created under the /__tests__ folder, labeled "Employee.test.js", "Engineer.test.js", "Intern.test.js", and "Manager.test.js". The tests are ran by Jest. Run "npm run test" in the command line to see that all pass. The tests check for proper object and method generation for all four classes.

## Credits
Made by Andrew Kim