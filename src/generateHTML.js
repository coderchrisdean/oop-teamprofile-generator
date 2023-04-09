const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");

function generateHTML(teamMembers) {
  const htmlArray = [];

  htmlArray.push(`<!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.2/css/bootstrap.min.css">
          <link rel="stylesheet" href="../assets/css/style.css">
          <title>Team Profile Generator</title>
      </head>
      <body>
          <header>
              <div class="container-fluid">
                  <div class="row">
                      <div class="col-12 hero mb-3 team-heading">
                          <h1 class="text-center">My Team</h1>
                      </div>
                  </div>
              </div>
          </header>
          <main>
              <div class="container">
                  <div class="row">
                      <div class="team-area col-12 d-flex justify-content-center">
      `);

  for (const teamMember of teamMembers) {
    let additionalInfo = "";
    switch (teamMember.getRole()) {
      case "Manager":
        additionalInfo = `<li class="list-group-item">Office number: ${teamMember.getOfficeNumber()}</li>`;
        break;
      case "Engineer":
        additionalInfo = `<li class="list-group-item">GitHub: <a href="https://github.com/${teamMember.getGithub()}">${teamMember.getGithub()}</a></li>`;
        break;
      case "Intern":
        additionalInfo = `<li class="list-group-item">School: ${teamMember.getSchool()}</li>`;
        break;
    }
    const html = `
              <div class="card employee-card">
                  <div class="card-header">
                      <h2 class="card-title">${teamMember.getName()}</h2>
                      <h3 class="card-title"><i class="fas fa-user"></i>${teamMember.getRole()}</h3>
                  </div>
                  <div class="card-body">
                      <ul class="list-group">
                          <li class="list-group-item">ID: ${teamMember.getId()}</li>
                          <li class="list-group-item">Email: <a href="mailto:${teamMember.getEmail()}">${teamMember.getEmail()}</a></li>
                          ${additionalInfo}
                      </ul>
                  </div>
              </div>`;
    htmlArray.push(html);
  }

  htmlArray.push(`            </div>
                  </div>
              </div>
          </main>
      </body>
      </html>`);

  return htmlArray.join("");
}

module.exports = generateHTML;
