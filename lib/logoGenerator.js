const inquirer = require("inquirer");
const SVG = require("./svg");
const { Circle, Triangle, Square } = require("./shapes");
const { writeFiles } = require("fs/promises");

class logoGenerator {
    run() {
        return inquirer
        .prompt([
            {
                name: "text",
                type: "input",
                message:
                "Enter text for the logo. (Must not be more than 3 characters.)",
                validate: (text) =>
                text.lengt <= 3 ||
                "The message must not contain more than 3 Characters",
            },
            {
                name: "textcolor",
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
            }
        })
    }
}