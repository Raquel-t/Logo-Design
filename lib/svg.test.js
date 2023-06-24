const SVG = require('./svg');

describe('SVG', () => {
    test('generate() method should return the correct SVG content', () => {
        const shapeMock = {
            render: jest.fn().mockReturnValue('<mocked-shape />'),
        };
        const text = 'ABC';
        const textColor = 'black';
        
        const svg = new SVG(shapeMock, text, textColor);
        const generatedContent = svg.generate();
        
        expect(generatedContent).toContain('<svg');
        expect(generatedContent).toContain('<mocked-shape />');
        expect(generatedContent).toContain(`<text x="150" y="120" fill="${textColor}" text-anchor="middle">${text}</text>`);
        expect(generatedContent).toContain('</svg>');
    });
    
    test('createTextSvg() method should return the correct text SVG element', () => {
        const shapeMock = {
            render: jest.fn(),
        };
        
        const text = 'ABC';
        const textColor = 'black';
        
        const svg = new SVG(shapeMock, text, textColor);
        const textSvg = svg.createTextSvg();
        
        expect(textSvg).toContain(`<text x="150" y="120" fill="${textColor}" text-anchor="middle">${text}</text>`);
    });
});