var inquirer = require("inquirer");
var fs = require('fs');

inquirer.prompt([
  {
  type: "confirm",
  message:"Generate readme Y/N?",
  name: "generate",
  generate: "READ.md"
},
    {
        type: "input",
        name: "title",
        message: "What is your project title?",
    },
    {
        type: "input",
        name: "description",
        message: "Describe your Work (What/Why)?"
      },
      {
        type: "input",
        name: "install",
        message: "What are the steps required to install your project?"
      },
      
      {
        type: "input",
        name: "usage",
        message: "Provide instructions and examples for use.(Screenshots/gifs)",
        default: "none",
        
      },
      
      
    //     type: "input",
    //     name: "",
    //     message: ""
    //   },


    ]).then(function(data) {

    var filename = "README.md"
  
    fs.appendFile(filename, JSON.stringify(data, '\n'), function(err) {
  
      if (err) {
        return console.log(err);
      }
  
      console.log("Success!");
  
    });
  });









// # Your Project Title

// ## Description 

// ## Installation

// What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.


// ## Usage 

// Provide instructions and examples for use. Include screenshots as needed. 


// ## Credits

// List your collaborators, if any, with links to their GitHub profiles.

// If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.
