// packages and files/scripts required
const inquirer = require("inquirer");
const fs = require("fs");
const generateHTML = require("./src/generateHTML");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
// team object to store all the team members data
const teamMembers = [];

function promptUser() {
  return inquirer.prompt([
    {
      type: "list",
      name: "role",
      message: "Please select a role:",
      choices: ["Manager", "Engineer", "Intern", "Done"],
    },
    {
      type: "input",
      name: "name",
      message: "Please enter the team member's name:",
      when: ({ role }) => role !== "Done",
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
      type: "input",
      name: "id",
      message: "Please enter the team member's ID:",
      when: ({ role }) => role !== "Done",
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
      type: "input",
      name: "email",
      message: "Please enter the team member's email:",
      when: ({ role }) => role !== "Done",
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
      type: "input",
      name: "officeNumber",
      message: "Please enter the manager's office number:",
      when: ({ role }) => role === "Manager",
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
      type: "input",
      name: "gitHub",
      message: "Please enter the engineer's GitHub username:",
      when: ({ role }) => role === "Engineer",
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
      type: "input",
      name: "school",
      message: "Please enter the intern's school:",
      when: ({ role }) => role === "Intern",
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

function promptToAddTeamMember() {
  return inquirer
    .prompt([
      {
        type: "confirm",
        name: "confirmAddTeamMember",
        message: "Would you like to add another team member?",
        default: true,
      },
    ])
    .then((answer) => {
      if (answer.confirmAddTeamMember) {
        console.log("Adding another team member.");
        return true;
      } else {
        console.log("Team member entries are complete.");
        return false;
      }
});
}

async function init() {
  let keepAddingTeamMembers = true;
  while (keepAddingTeamMembers === true) {
    //prompt user for team member data
    const teamMemberData = await promptUser();
    //create team member object based on role
    if (teamMemberData.role === "Manager") {
      const manager = new Manager(
        teamMemberData.name,
        teamMemberData.id,
        teamMemberData.email,
        teamMemberData.officeNumber
      );
      teamMembers.push(manager);
    } else if (teamMemberData.role === "Engineer") {
      const engineer = new Engineer(
        teamMemberData.name,
        teamMemberData.id,
        teamMemberData.email,
        teamMemberData.gitHub
      );
      teamMembers.push(engineer);
    } else if (teamMemberData.role === "Intern") {
      const intern = new Intern(
        teamMemberData.name,
        teamMemberData.id,
        teamMemberData.email,
        teamMemberData.school
      );
      teamMembers.push(intern);
    }
    //prompt user to add another team member
    keepAddingTeamMembers = await promptToAddTeamMember();
  }

  //generate HTML using teamMembers array
  const html = generateHTML(teamMembers);
  //write HTML to file
  fs.writeFile("./dist/index.html", html, (err) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(
      "Your team profile has been generated! Please check out the index.html file in the dist folder to see it."
    );
  });
}

init();
