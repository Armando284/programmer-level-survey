import { Injectable } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Subject, of } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { screenSize } from '../interfaces/types';

@Injectable({
  providedIn: 'root'
})
export class ResponsivenessService {
  private destroyed = new Subject<void>();
  private displayNameMap = new Map<string, screenSize>([
    [Breakpoints.XSmall, 'XSmall'],
    [Breakpoints.Small, 'Small'],
    [Breakpoints.Medium, 'Medium'],
    [Breakpoints.Large, 'Large'],
    [Breakpoints.XLarge, 'XLarge'],
  ]);

  private currentScreenSize!: screenSize;

  constructor(
    private breakpointObserver: BreakpointObserver,
  ) {
    this.breakpointObserver
      .observe([
        Breakpoints.XSmall,
        Breakpoints.Small,
        Breakpoints.Medium,
        Breakpoints.Large,
        Breakpoints.XLarge,
      ])
      .pipe(takeUntil(this.destroyed))
      .subscribe(result => {
        for (const query of Object.keys(result.breakpoints)) {
          if (result.breakpoints[query]) {
            this.currentScreenSize = this.displayNameMap.get(query) ?? 'Unknown';
          }
        }
      });
  }

  ngOnDestroy() {
    this.destroyed.next();
    this.destroyed.complete();
  }

  get screenSize() {
    return of(this.currentScreenSize);
  }
}
