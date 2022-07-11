import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

// @BehaviourSubject always returns the last value as we subscribe to it
export class BreathService {
  private currentBreath = new BehaviorSubject<number>(0);
  private breaths$ = new BehaviorSubject<number>(0);
  private isBreathingMode = new BehaviorSubject<boolean>(false);
  private maxBreaths: number = 120;
  private maxBreathsExceeded: boolean = false;
  private activeAnimation = '';

  constructor() {}

  // Observable blocks the next in stream behavior
  public getBreaths(): Observable<number> {
    return this.breaths$;
  }
}

// setIsBreathingMode(isBreathingMode: boolean) {
//   this.isBreathingMode = isBreathingMode;
// }

// handleBreathingActivation() {
//   if (this.breaths >= this.maxBreaths) {
//     this.maxBreathsExceeded = true;
//   } else {
//     this.activateBreathing();
//   }
// }

// setBreaths(breaths: number) {
//   console.log({ breaths });
//   console.log('this');
//   console.log(this);
//   this.breaths = breaths;
// }

// activateBreathing() {
//   this.activeAnimation = 'active';
//   setTimeout(() => {
//     this.setIsBreathingMode(true);
//   }, 5000);
// }
