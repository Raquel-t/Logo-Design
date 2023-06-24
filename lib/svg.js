// SVG Class

class SVG {
    constructor(shape, text, textColor) {
        this.shape = shape;
        this.text = text;
        this.textColor = textColor;
    }
    generate() {
        const shapeSvg = this.shape.render();
        const textSvg = this.createTextSvg();
        // Combine the shape and text SVG elements into a single SVG content
        const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">${shapeSvg}${textSvg}</svg>`;
        return svgContent;
    }
    createTextSvg() {
        const x = 150; // X position for text
        const y = 120; // Y position for text
        return `<text x="${x}" y="${y}" fill="${this.textColor}" text-anchor="middle">${this.text}</text>`;
    }
}

module.exports = SVG;