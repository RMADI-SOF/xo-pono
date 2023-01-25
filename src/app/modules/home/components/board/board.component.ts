import { Component, OnInit, ɵpublishDefaultGlobalUtils } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subject } from 'rxjs';
import { DialogComponent } from '../dialog/dialog.component';
import { Board } from './board.model';
import Utils from '../../../../shared/Utils/Utils';
import { UserService } from '../../../../core/services/user.service';
@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  winCompositions : string[]= ['012',
  '345',
  '678',
  '036',
  '147',
  '258',
  '048',
  '246'];

  board: Board = new Board(); 
  cellsObs = new Subject<Board>();
  cells: string[];
  constructor(public dialog: MatDialog, private userService : UserService) {}

  openDialog(winner: string) {
    const dialogRef = this.dialog.open(DialogComponent);
    dialogRef.componentInstance.winner = winner; 
    dialogRef.componentInstance.userName = this.userService.getUsername; 
    dialogRef.afterClosed().subscribe(restart => {
      if(restart)
        this.restart();
    });
  }

  ngOnInit(): void {
    this.cellsObs.subscribe(value => {
      this.playRandom();
      if(this.winner){
        this.openDialog(this.winner);
      }
      this.cells = value.cells; 
    });
    this.cellsObs.next(this.board);
  }

  cellClicked(index: any){
    if(this.board.cells[index])
      return;
    this.board.cells[index] = "X";
    this.cellsObs.next(this.board);
  }

  playRandom(): void{
    const emptyCellsIndexes = this.getValuePositions('', this.board.cells);
    const randomIndex = this.getRandomItem(emptyCellsIndexes);
    this.board.cells[randomIndex] = 'O';
  }

  getValuePositions(value: string, arr: string[]){
    let positions = [];
    arr.forEach((vi , i) => {
      if(vi == value)
        positions.push(i);
    })
    return positions;
  }

  get winner() {
    let xpos = this.getValuePositions('X', this.board.cells).join('');
    if(this.hasWinner(xpos)) 
      return 'X';
    let opos = this.getValuePositions('O', this.board.cells).join('');
    if(this.hasWinner(opos))
      return 'O';
    if(!this.board.cells.includes(''))
      return 'N';
    return null;
  }

  getRandomItem(arr: any[]) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
  }

  hasWinner(pos : string) : boolean {
    return pos.length < 3 ? false : 
           this.winCompositions.find(win => Utils.containsAllElement([...win], pos)) != undefined;
  }

  containsAllElement(searched: string[], container: string){
    return searched.every(r => container.includes(r));
  }

  restart(): void {
    this.board = new Board();
    this.cellsObs.next(this.board);
  }

}
