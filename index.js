
const fs = require('fs');
const inquirer = require("inquirer");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const myTeam = []

inquirer
    .prompt([
        {
            type:"input",
            name: "name",
            message: "What is the Manager's name?"
        },
        {
            type:"input",
            name: "id",
            message: "What is the Manager's id?"
        },
        {
            type:"input",
            name: "email",
            message: "What is the Manager's email?"
        },
        {
            type:"input",
            name: "extra",
            message: "What is the Manager's office number?"
        }
    ])
        .then((res)=> {
            let manager = new Manager(res.name, res.id, res.email, res.extra)
            myTeam.push(manager)
            newWorker()
        })
function writeToFile(file, data) {
    fs.writeFile(file, data, (err) =>
    err ? console.error(err) : console.log("Success!")
    )}

function newWorker() {
    inquirer.prompt([
        {
            type: "list",
            name: "repeat",
            message: "Add another worker?",
            choices: ["Engineer", "Intern", "No Thanks"]
        }
    ])
        .then((res) => {
            if (res.repeat.toString() == "No Thanks") {
                let finishedCard = "";
                myTeam.forEach(profile => {
                    finishedCard += createCards(profile)
                })
                writeToFile("index.html", generateHTML(finishedCard))
            } else if (res.repeat.toString() == "Engineer") {
                inquirer.prompt([
                    {
                        type: "input",
                        name: "name",
                        message: "What is the Engineer's name"
                    },
                    {
                        type: "input",
                        name: "id",
                        message: "What is the Engineer's id"
                    },
                    {
                        type: "input",
                        name: "email",
                        message: "What is the Engineer's email"
                    },
                    {
                        type: "input",
                        name: "extra",
                        message: "What is the Engineer's GitHub username"
                    },
                ])
                    .then((res) => {
                        let engineer = new Engineer(res.name, res.id, res.email, res.extra)
                        myTeam.push(engineer)
                        newWorker()
                    })
            } else {
                inquirer.prompt([
                    {
                        type: "input",
                        name: "name",
                        message: "What is the Intern's name?"
                    },
                    {
                        type: "input",
                        name: "id",
                        message: "What is the Intern's id?"
                    },
                    {
                        type: "input",
                        name: "email",
                        message: "What is the Intern's email?"
                    },
                    {
                        type: "input",
                        name: "extra",
                        message: "What school did the Intern attend?"
                    }
                ])
                    .then((res) => {
                        let intern = new Intern(res.name, res.id, res.email, res.extra)
                        myTeam.push(intern)
                        newWorker()
                    })
            }
        })
}

function generateHTML (finishedCard) {
    let markDown =
    `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
            <title>Team Profile</title>
        </head>
        <body>
            <header>My Team</header>
            <div class= "container">
            <div class="row">
                ${finishedCard}
                   
                </div>
            </div>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>

        </body>
        </html>`
        return markDown
}

function createCards(teamProf) {
    let card = `
        
        <div class="text-center card"> 
            <div class="card-header">${teamProf.getRole()}
        </div>
       
        <div class="card-body">
            <h5 class="card-title">${teamProf.name}</h5>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">${teamProf.id}</li>
            <li class="list-group-item">${teamProf.email}</li>
            <li class="list-group-item">${teamProf.extra}</li>
        </ul>
        </div>`
        return card
}
