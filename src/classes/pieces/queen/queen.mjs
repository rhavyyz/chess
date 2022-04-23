import { module } from '../../../../generalFunctions.mjs';
import { bishop, rook } from '../movements.mjs';

export default class Queen
{
    constructor(color)
    {
        this.color = color;

        this.htmlElement = document.createElement("div");

        this.htmlElement.classList.add('Queen');
        this.htmlElement.classList.add(color == 1 ? 'blackPiece' : 'whitePiece');


    }

    htmlElement;

    rule = (x, y, square) => {
        let otherX = square.x;
        let otherY = square.y;


        const deltaX = module(otherX - x);
        const deltaY = module(otherY - y);
        
        if(deltaX == deltaY || x == otherX || y == otherY) 
        {
            const pathClean = (deltaX == deltaY) ? bishop(x, y, otherX, otherY) : rook(x, y, otherX, otherY); 


            if((square.content == null || square.content.color != this.color) && pathClean)
            {
                return true;
            }
        }

        return false;
    }
}