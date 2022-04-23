import { bishop } from "../movements.mjs";
import { module } from "../../../../generalFunctions.mjs";

export default class Bishop
{
    constructor(color)
    {
        this.color = color;

        this.htmlElement = document.createElement('div');
        this.htmlElement.classList.add('Bishop');
        this.htmlElement.classList.add(color == 1 ? 'blackPiece' : 'whitePiece');


    }


    rule = (x, y, square) => {

        if(square.content != null && this.color == square.content.color ) return false;

        const deltaX = module(square.x - x),
              deltaY = module(square.y - y); 

        if(deltaX == deltaY && bishop(x, y, square.x, square.y)) return true;

        return false;
    }
}