import context from "../../context.mjs";
import { module } from "../../../generalFunctions.mjs";


const bishop = (iX, iY, fX, fY) => {  
    let xProgress = -1, yProgress = -1;

    let condX = 'x > fX';

    if(fX - iX > 0)
    {
        xProgress = 1;
        condX = 'x < fX';
    }
    if(fY - iY > 0)
        yProgress = 1;
    



    for(let x = xProgress + iX, y = yProgress + iY             ;eval(condX) ;x += xProgress, y += yProgress )
    {
        if(context.table.lines[y].squares[x].content != null) return false
    }

    return true;
}    

const rook = (iX, iY, fX, fY) => {

    const direction = fX - iX != 0;

    let delta = direction ? (fX - iX) / module(fX - iX) : (fY - iY) / module(fY - iY);

    let progress = -1,
        condition = 'i > ';

    if(direction)
    {
        if(delta > 0)
        {
            progress = 1;
            condition = 'i < ';
        }
        condition += 'fX';

        for(let i = iX + progress; eval(condition); i += progress)
        {
            if(context.table.lines[iY].squares[i].content != null) return false
        }
    }
    else
    {
        if(delta > 0)
        {
            progress = 1;
            condition = 'i < ';
        }
        condition += 'fY';

        for(let i = iY + progress; eval(condition); i += progress)
        {
            if(context.table.lines[i].squares[iX].content != null) return false
        }

    }
    
    return true;
} 

export {bishop, rook};