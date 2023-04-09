// packages and files/scripts required
const inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require("./lib/Manager");
const Manager = require("./lib/Engineer");
const Intern = require("./lib/Intern");



// team object to store all the team members data
const teamMembers = []

function promptUser () {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: 'Please select a role:',
            choices: ['Manager', 'Engineer', 'Intern', 'Done'],
        },
        {
            type: 'input',
            name: 'name',
            message: "Please enter the team member's name:",
            when: ({ role }) => role !== 'Done',
            validate: (nameInput) => {
              if (nameInput) {
                return true;
              } else {
                console.log("Please enter the team member's name.");
                return false;
              }
            },
          },
          {
            type: 'input',
            name: 'id',
            message: "Please enter the team member's ID:",
            when: ({ role }) => role !== 'Done',
            validate: (idInput) => {
              if (idInput) {
                return true;
              } else {
                console.log("Please enter the team member's ID.");
                return false;
              }
            },
          },
          
          {
            type: 'input',
            name: 'email',
            message: "Please enter the team member's email:",
            when: ({ role }) => role !== 'Done',
            validate: (emailInput) => {
              const regexEmail = /^\S+@\S+\.\S+$/;
              if (regexEmail.test(emailInput)) {
                return true;
              } else {
                console.log("Please enter a valid email address.");
                return false;
              }
            },
          },
          {
            type: 'input',
            name: 'officeNumber',
            message: "Please enter the manager's office number:",
            when: ({ role }) => role === 'Manager',
            validate: (officeNumberInput) => {
              if (officeNumberInput) {
                return true;
              } else {
                console.log("Please enter the manager's office number.");
                return false;
              }
            },
          },
          {
            type: 'input',
            name: 'gitHub',
            message: "Please enter the engineer's GitHub username:",
            when: ({ role }) => role === 'Engineer',
            validate: (gitHubInput) => {
              if (gitHubInput) {
                return true;
              } else {
                console.log("Please enter engineer's GitHub username.");
                return false;
              }
            },
          },
          {
            type: 'input',
            name: 'school',
            message: "Please enter the intern's school:",
            when: ({ role }) => role === 'Intern',
            validate: (schoolInput) => {
              if (schoolInput) {
                return true;
              } else {
                console.log("Please enter the intern's school.");
                return false;
              }
            },
          },
        ]);
    }

    function promptToAddTeamMember () {
        return inquirer.prompt([
            {
                type: 'confirm',
                name: 'confirmAddTeamMember',
                message: 'Would you like to add another team member',
                default: false,
            },
        ])
        .then((confirmTAddTeamMemberData) => confirmTAddTeamMemberData.confirmTAddTeamMember);
    }

    const generateHTML = require("./src/generateHTML");