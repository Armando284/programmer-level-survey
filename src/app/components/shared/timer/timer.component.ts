import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';
import { Subscription } from 'rxjs/internal/Subscription';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { ThemePalette } from '@angular/material/core';
import { TooltipPosition } from '@angular/material/tooltip';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent {
  @Input() totalTime!: number; // * seconds
  @Input() timerState!: Subject<boolean>;
  @Output() timeOut = new EventEmitter<boolean>();

  time: number = 0;
  private stateSubs!: Subscription;
  private timeLoop!: ReturnType<typeof setInterval>;

  mode: ProgressSpinnerMode = 'determinate';
  value: number = 0;
  minutes: number = 60;
  seconds: number = 59;

  position: TooltipPosition = 'left';

  isSticky: boolean = false;

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    this.isSticky = window.scrollY >= 350;
  }

  ngOnInit() {
    this.stateSubs = this.timerState?.subscribe(state => {
      state ?
        this.startTimer() :
        this.stopTimer();
    });
  }

  ngOnDestroy() {
    this.stateSubs.unsubscribe();
  }

  startTimer() {
    this.time = this.totalTime;
    this.timeLoop = setInterval(() => {
      this.time--;
      this.minutes = Math.floor(this.time / 60);
      this.seconds = this.time % 60;
      this.value = (60 - this.seconds) * 100 / 60;
      if (this.time <= 0) {
        this.stopTimer();
        this.timeOut.emit(true);
      }
    }, 1000);
  }

  private stopTimer() {
    if (this.timeLoop) {
      clearInterval(this.timeLoop);
      this.time = this.totalTime;
    }
  }

  get color(): ThemePalette {
    if (this.minutes === 0) return 'warn';
    if (this.minutes <= 5) return 'accent';
    return 'primary';
  }
}
