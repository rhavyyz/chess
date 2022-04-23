import { module } from "../../../../generalFunctions.mjs";

export default class King
{
    constructor(color)
    {
        this.color = color;

        this.htmlElement = document.createElement('div');
        this.htmlElement.classList.add('King');
        this.htmlElement.classList.add(color == 1 ? 'blackPiece' : 'whitePiece');


    }

    rule = (x, y, square) => {
        if( square.content != null && square.content.color == this.color) return false;

        let otherX = square.x;
        let otherY = square.y;

        return module(otherX - x) <=1 && module(otherY - y) <= 1;
    }
}