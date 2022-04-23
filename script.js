// import Bishop from "./src/classes/pieces/bishop/bishop.mjs";
// import King from "./src/classes/pieces/king/king.mjs";
// import Knight from "./src/classes/pieces/knight/knight.mjs";
// import Pawn from "./src/classes/pieces/pawn/pawn.mjs";
// import Queen from "./src/classes/pieces/queen/queen.mjs";
// import Rook from "./src/classes/pieces/rook/rook.mjs";
import { setPieces } from "./generalFunctions.mjs";
import Table from "./src/classes/table.mjs";
import context from "./src/context.mjs";

const htmlTable = document.querySelector('#table');

const jsTable = new Table();

context.table = jsTable;

setPieces(jsTable);

// jsTable.lines[0].squares[0].put(new Queen(1));
// jsTable.lines[3].squares[3].put(new Queen(1));
// jsTable.lines[3].squares[4].put(new King(1));
// jsTable.lines[3].squares[5].put(new Rook(1));
// jsTable.lines[2].squares[4].put(new Knight(1));
// jsTable.lines[2].squares[7].put(new Bishop(1, 4));
// jsTable.lines[7].squares[7].put(new Pawn(1, 7));
// jsTable.lines[0].squares[6].put(new Pawn(2, 0));

htmlTable.append(jsTable.getHtml())

const a = [3, 1, 2, 4];

