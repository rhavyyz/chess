import Queen from "./src/classes/pieces/queen/queen.mjs";
import King from "./src/classes/pieces/king/king.mjs";
import Pawn from "./src/classes/pieces/pawn/pawn.mjs";
import Rook from "./src/classes/pieces/rook/rook.mjs"
import Bishop from "./src/classes/pieces/bishop/bishop.mjs"
import Knight from "./src/classes/pieces/knight/knight.mjs"

const order = [
    [Queen, [
        [3, 0], 
        [3, 7]
        ]
    ],
    [King, [
        [4, 0], 
        [4, 7]
        ]
    ],
    [Knight, [
        [1, 0],
        [6, 0],
        [1, 7],
        [6, 7]
        ]
    ],
    [Rook, [
        [0, 0],
        [7, 0],
        [0, 7],
        [7, 7],
        ]
    ],
    [Bishop, [
        [2, 0],
        [5, 0],
        [2, 7],
        [5, 7],
        ]
    ],
    [Pawn, [
        [0, 1],  
        [1, 1],  
        [2, 1],  
        [3, 1],  
        [4, 1],  
        [5, 1],  
        [6, 1],  
        [7, 1],  
        [0, 6],  
        [1, 6],  
        [2, 6],  
        [3, 6],  
        [4, 6],  
        [5, 6],  
        [6, 6],  
        [7, 6],  
        ]
    ]
]
const setPieces = (table) => {
    order.forEach(
        e => {
            e[1].forEach(
                (element, index) => {

                    table.lines[element[1]].squares[element[0]].put(new e[0]( index < (e[1].length / 2) ? 1: 0 , element[1]))
                
                
                }
            );
        }
    )
}

const module = (n) => {
    if (n > 0) return n;
    return -n;
}

export {setPieces, module};