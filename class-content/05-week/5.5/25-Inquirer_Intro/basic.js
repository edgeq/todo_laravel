// Load the NPM Package inquirer
var inquirer = require("inquirer");

// Create a "Prompt" with a series of questions.
inquirer.prompt([

  // Here we create a basic text prompt.
  {
    type: "input",
    message: "What is your name?",
    name: "userName"
  },
  {
    type: "confirm",
    message: "Are you sure:",
    name: "confirm",
    default: true

  },
  // Here we create a basic password-protected text prompt.
  {
    type: "password",
    message: "Set your password",
    name: "password"
  },

  {
    type: "confirm",
    message: "Are you sure:",
    name: "confirm",
    default: true

  },

  {
    type: "confirm",
    message: "Are you sure:",
    name: "confirm",
    default: true

  },
  // Here we give the user a list to choose from.
  {
    type: "list",
    message: "Which Pokemon do you choose?",
    choices: ["Bulbasaur", "Squirtle", "Charmander"],
    name: "pokemon"
  },

  // Here we ask the user to confirm.
  {
    type: "confirm",
    message: "Are you sure:",
    name: "confirm",
    default: true

  }
]).then(function(inquirerResponse) {
  // If the inquirerResponse confirms, we displays the inquirerResponse's name and pokemon from the answers.
  if (inquirerResponse.confirm) {

    console.log("Welcome " + inquirerResponse.userName);
    console.log("Your " + inquirerResponse.pokemon + " is ready for battle!");
  } else {

    console.log("");
    console.log("");
    console.log("That's okay " + inquirerResponse.name + ", come again when you are more sure.");
    console.log("");
    console.log("");

  }

});
