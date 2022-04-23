import context from "../context.mjs";


export default class Square
{

    content = null;

    take = () => {
        this.innerHtml.innerHTML = null;
        const aux = this.content;
        this.content = null;
        return aux;
    }
    put = (element) => {
        this.innerHtml.innerHTML = null;
        this.content = element;
        this.innerHtml.append(element.htmlElement)
    }

    constructor(x, y)
    {
        this.y = y;
        this.x = x;

        this.innerHtml = document.createElement('div');
        this.innerHtml.classList.add('square');
        this.innerHtml.classList.add(((x + y) % 2 === 0) ? 'white' : 'black');

        this.innerHtml.addEventListener("click", ()=> {
            if(context.alreadyClicked)
            {
                context.table.changeElements(context.x, context.y, this.x, this.y);
    
                context.alreadyClicked = false;
                return;
            }

            context.x = this.x; context.y = this.y;
            context.alreadyClicked = true;
        })
    }        

}