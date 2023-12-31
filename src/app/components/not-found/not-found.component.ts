import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ResponsivenessService } from 'src/app/services/responsiveness.service';
import { screenSize } from 'src/app/interfaces/types';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent {

  @ViewChildren('cell') cellEls!: QueryList<ElementRef>;

  update!: ReturnType<typeof setInterval>;
  cells: number[] = [];
  programErrors: number = 0;
  maxProgramErrors: number = 10;
  points: number = 0;
  gameStatus: 'off' | 'running' | 'paused' = 'off';
  private _brokenCells: Set<number> = new Set();

  currentScreenSize!: screenSize;
  subscriptions: Subscription[] = [];

  constructor(
    private _snackBar: MatSnackBar,
    private responsive: ResponsivenessService,
  ) {
    let i = 0;
    this.cells = Array.from({ length: 25 }, () => i++);
  }

  ngOnInit() {
    const responsiveSub = this.responsive.screenSize.subscribe(data => {
      this.currentScreenSize = data;
    });
    this.subscriptions.push(responsiveSub);
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
    this.stopDebugging();
    this.points = 0;
  }

  private cleanBugs() {
    this.cellEls.forEach((el, i) => {
      if (!el.nativeElement.classList.contains('bug')) return;
      if (this.gameStatus === 'running') {
        el.nativeElement.classList.add('trace');
        this._brokenCells.add(i);
        this.programErrors++;
        if (this.programErrors >= this.maxProgramErrors) {
          this.gameOver();
        }
      }
      el.nativeElement.classList.remove('bug');
    });
  }

  private cleanTrace() {
    this.cellEls.forEach(el => {
      if (!el.nativeElement.classList.contains('trace')) return;
      el.nativeElement.classList.remove('trace');
    });
  }

  startDebugging(): void {
    this.programErrors = 0;
    this.points = 0;
    this.gameStatus = 'running';
    let lastPos: number;
    this.update = setInterval(() => {
      this.cleanBugs();
      let randPos: number;
      do {
        randPos = Math.floor(Math.random() * this.cellEls.length);
      } while (lastPos === randPos && this._brokenCells.has(randPos));
      lastPos = randPos;
      this.cellEls.get(randPos)?.nativeElement.classList.add('bug');
    }, 1000);
  }

  stopDebugging(): void {
    this.gameStatus = 'off';
    clearInterval(this.update);
    this.cleanBugs();
    this.cleanTrace();
  }

  gameOver(): void {
    this.stopDebugging();
    this.openSnackBar();
    throw new Error('GAME OVER');
  }

  checkCell(cell: HTMLDivElement): void {
    if (!cell.classList.contains('bug')) return;
    if (cell.classList.contains('trace')) {
      cell.classList.remove('trace');
      this.programErrors--;
    }
    this.points++;
    cell.classList.remove('bug');
    cell.classList.add('fixed');
    setTimeout(() => {
      cell.classList.remove('fixed');
    }, 1000);
  }

  openSnackBar(): void {
    this._snackBar.open('GAME OVER', '💥', {
      horizontalPosition: 'center',
      verticalPosition: 'top',
      duration: 5000,
    });
  }
}
