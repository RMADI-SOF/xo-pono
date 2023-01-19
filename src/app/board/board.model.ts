export class Board{
    cells : string[];
    constructor(){
        this.initBoard();
    }

    initBoard(): void {
        this.cells = Array(9).fill("");
    }

}