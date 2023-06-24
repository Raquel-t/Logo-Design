// shape testing

const { Circle, Triangle, Square } = require('./shapes');

describe('Circle', () => {
    test('render() method should return the correct SVG string', () => {
        const circle = new Circle();
        circle.setColor('blue');
        expect(circle.render()).toEqual('<circle cx="150" cy="100" r="50" fill="blue" />');
    });
});

describe('Triangle', () => {
    test('render() method should return the correct SVG string', () => {
        const triangle = new Triangle();
        triangle.setColor('red');
        expect(triangle.render()).toEqual('<polygon points="150,30 225,150 75,150" fill="red" />');
    });
});

describe('Square', () => {
    test('render() method should return the correct SVG string', () => {
        const square = new Square();
        square.setColor('green');
        expect(square.render()).toEqual('<rect x="75" y="50" width="150" height="100" fill="green" />');
    });
});