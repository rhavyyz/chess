import Square from "./square.mjs";

export default class Line
{
    
    squares = []
    getHtml = () =>{
        const div = document.createElement('div');

        this.squares.forEach(e => div.append(e.innerHtml));

        div.classList.add('line');

        return div;
    }
    
    constructor(y)
    {
        this.y = y;
    
        for(let i = 0; i < 8; i++)
        {
            this.squares.push(new Square(i, y));
        }
    }


}