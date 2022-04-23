import { module } from "../../../../generalFunctions.mjs";

export default class Knight
{
    constructor(color)
    {
        this.color = color;

        this.htmlElement = document.createElement('div');
        this.htmlElement.classList.add('Knight');
        this.htmlElement.classList.add(color == 1 ? 'blackPiece' : 'whitePiece');


    }

    rule = (x, y, square) => {

        if(square.content != null && this.color == square.content.color ) return false;

        let deltaX = module(square.x - x),
            deltaY = module(square.y - y); 

        const cond1 = (deltaX == 2 && deltaY == 1);
        const cond2 = (deltaX == 1 && deltaY == 2);




        if(cond1 || cond2)  return true;
        
        return false;
    }


}