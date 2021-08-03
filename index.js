
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
            message: "What is the Engineer's name?"
        },
        {
            type:"input",
            name: "name",
            message: "What is your id?"
        },
        {
            type:"input",
            name: "email",
            message: "What is your email?"
        },
        {
            type:"input",
            name: "extra",
            message: "What is your GitHub username?"
        }
    ])
        .then((res)=> {
            let Engineer = new Engineer(res.name, res.id, res.email, res.extra)
            myTeam.push(Engineer)
            newWorker()
        })
    } else {

    }