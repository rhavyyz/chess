import { module } from "../../../../generalFunctions.mjs";
import { rook } from "../movements.mjs";

export default class Pawn
{
    constructor(color, y)
    {
        this.color = color;
        this.direction = y < 3 ? 1 : -1;

        this.condition = y < 3 ? 'deltaY <= this.direction * (this.firstStep ? 2 : 1) && deltaY > 0' : 'deltaY >= this.direction * (this.firstStep ? 2 : 1) && deltaY < 0';
        
        this.htmlElement = document.createElement("div");
        this.htmlElement.classList.add('Pawn');

        this.htmlElement.classList.add(color == 1 ? 'blackPiece' : 'whitePiece');


        this.firstStep = true;
    }

    rule = (x, y, square) =>
    {
        if(square.content != null && this.color == square.content.color ) return false;
        
        let deltaX = square.x - x,
            deltaY = square.y - y; 

        if(eval(this.condition))
        {
            
            if((deltaX == 0 && rook(x, y, square.x, square.y) && square.content == null) || (module(deltaX) == 1 && module(deltaY) == 1 && square.content != null) )
            {
                if(this.firstStep) this.firstStep = false;

                return true;
            }
        }
        
        return false;
    }


}