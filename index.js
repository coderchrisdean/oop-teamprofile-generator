//PSEUDOCODE
// I WANT to generate a webpage that displays my team's basic info
// SO THAT I have quick access to their emails and GitHub profiles


// GIVEN a command-line application that accepts user input
// WHEN I am prompted for my team members and their information
// THEN an HTML file is generated that displays a nicely formatted team roster based on user input
// WHEN I click on an email address in the HTML
// THEN my default email program opens and populates the TO field of the email with the address
// WHEN I click on the GitHub username
// THEN that GitHub profile opens in a new tab
// WHEN I start the application
// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
// WHEN I enter the team manager’s name, employee ID, email address, and office number
// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated

// packages and files/scripts required
const inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require("./assets/library/Engineer");
const Manager = require("./assets/library/Manager");
const Intern = require("./assets/library/Intern");
const {managerQuestions, engineerQuestions, internQuestions} = require("./questions");
const generateHTML = require("./assets/src/helper");
var randomFileNum = Math.floor(100 + Math.random() * 9999)


// team object to store all the team members data
const team = []

// prompt data entry to get input for questions

const addEmployee = [
    {
        type: "list",
        name: "addEmployee",
        message: "Would you like to add an employee?",
        choices: ["Engineer", "Intern", "No"]
    }
];

const init = () => {
    inquirer.prompt(managerQuestions).then((managerAnswers) => {
        const manager = new Manager(managerAnswers.name, managerAnswers.id, managerAnswers.email, managerAnswers.officeNumber);
        team.push(manager);
        addEmployees();
    });
}
// add additional employees as options
const addEmployees = () => {
    inquirer.prompt(addEmployee).then((employeeAnswers) => {
        switch (employeeAnswers.addEmployee) {
            case "Engineer":
                inquirer.prompt(engineerQuestions).then((engineerAnswers) => {
                    const engineer = new Engineer(engineerAnswers.name, engineerAnswers.id, engineerAnswers.email, engineerAnswers.github);
                    team.push(engineer);
                    addEmployees();
                });
                break;
            case "Intern":
                inquirer.prompt(internQuestions).then((internAnswers) => {
                    const intern = new Intern(internAnswers.name, internAnswers.id, internAnswers.email, internAnswers.school);
                    team.push(intern);
                    addEmployees();
                });
                break;
            default:
                
                
                console.log("Your team has been created. File stored at index" + randomFileNum + ".html");
                let htmlData = generateHTML(team); 
                   
                fs.writeFileSync('index' + randomFileNum + ".html", htmlData);
        }
    });
}

init();





