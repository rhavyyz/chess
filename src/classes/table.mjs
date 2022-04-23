import Line from "./line.mjs";

export default class Table
{
    constructor()
    {
        this.lines = []
        for(let i = 0; i < 8; i++)
        {
            this.lines.push(new Line(i)); 
        }
    }

    rotationController = 1;

    getHtml = () => {
        const html = document.createElement('div');
        this.lines.forEach(e => html.append(e.getHtml()));

        return html;
    }

    changeElements = (iX, iY, fX, fY) => {

        
        if((iX == fX && iY == fY) || this.lines[iY].squares[iX].content.color != this.rotationController) return;
        
        if(this.lines[iY].squares[iX].content != null && this.lines[iY].squares[iX].content.rule(iX, iY, this.lines[fY].squares[fX]))
        {
            this.rotationController = this.rotationController == 1 ? 0 : 1; 
            
            this.lines[fY].squares[fX].put(this.lines[iY].squares[iX].take());
        }
    }
}