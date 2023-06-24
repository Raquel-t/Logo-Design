const inquirer = require("inquirer");
const { Circle, Triangle, Square } = require("./shapes");
const { writeFile } = require("fs/promises");
const SVG = require("./svg");

class CLI {
    run() {
        return inquirer
        .prompt([
            // Prompt questions
            {
                name: "text",
                type: "input",
                message:
                "Enter text for the logo. (Must not be more than 3 characters.)",
                validate: (text) =>
                text.length <= 3 || "The message must not contain more than 3 Characters",
            },
            {
                name: "textColor",
                type: "input",
                message:"Enter a text color",
            },
            {
                name: "shapeType",
                type: "list",
                message: "Select a shape for the logo",
                choices: ["circle", "square", "triangle"],
            },
            {
                name: "shapeColor",
                type: "input",
                message: "Enter a shape color",
            },
        ])
        .then(({ text, textColor, shapeType, shapeColor }) => {
            let shape;
            switch (shapeType) {
                case "circle":
                    shape = new Circle();
                    break;
                case "triangle":
                    shape = new Triangle();
                    break;
                case "square":
                    shape = new Square();
                    break;
                default:
                    // handle invalid shape types here
                    break;
            }
            
            shape.setColor(shapeColor); 
            // Create the SVG content using the shape and text information
            const svgContent = new SVG(shape, text, textColor).generate();

            // Save the SVG content to a file
            return writeFile("logo.svg", svgContent);
        })
        .then(() => {
            console.log("Generated logo.svg");
        })
        .catch((error) => {
            console.log("An error occured:", error)
        });
    }
}

module.exports = CLI;