import { rook } from "../movements.mjs";

export default class Rook
{
    constructor(color)
    {
        this.color = color;

        this.htmlElement = document.createElement('div');
        this.htmlElement.classList.add('Rook');
        this.htmlElement.classList.add(color == 1 ? 'blackPiece' : 'whitePiece');
        

    }

    rule = (x, y, square) =>  {
        if(square.content != null && this.color == square.content.color ) return false;

        let otherX = square.x;
        let otherY = square.y;

        if((x == otherX || otherY == y) && rook(x, y, otherX, otherY)) return true;
        
        return false;
    }


}