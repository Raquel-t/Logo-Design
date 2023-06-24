// Exports `Triangle`, `Circle`, and `Square` classes
const { writeFiles } = require("fs/promises")

// shape classes
class shape {
    constructor() {
        this.clor = "";
    }
    setColor(color) {
        this.color = color;
    }
}

class Circle extends Shape {
    render() {
        return '<circle cx="150" cy="100" r="50" fill="${this.color}" />';
    }
}

class Triangle extends Shape {
    render() {
        return `<polygon points="150,30 225,150 75,150" fill="${this.color}" />`;
    }
}

class Square extends Shape {
    render() {
        return `<rect x="75" y="50" width="150" height="100" fill="${this.color}" />`;
    }
}

module.exports = { Circle, Triangle, Square };