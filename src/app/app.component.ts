import { Component } from '@angular/core';
import { Themes } from '../../types';
import { BreathService } from './services/breath.service';
import { BREATHING_TIME_MS, MAX_BREATHS } from './constants';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  theme: Themes = Themes.PRIMARY;

  isAnimationActive: boolean = false;
  isBreathingMode: boolean = false;
  maxBreathsExceeded: boolean = false;
  notCorrentNumberError: boolean = false;
  isSessionFinished: boolean = false;
  breaths: string = '0';
  currentBreath: number = 0;
  breathingInterval: any;

  increaseCurrentBreath() {
    this.currentBreath += 1;
    if (this.currentBreath >= Number(this.breaths)) {
      clearInterval(this.breathingInterval);
      this.isSessionFinished = true;
    }
  }

  breathe() {
    const breathingInterval = setInterval(() => this.increaseCurrentBreath(), BREATHING_TIME_MS);
    this.breathingInterval = breathingInterval;
  }

  setBreaths(event: string) {
    if (!isNaN(Number(event))) {
      this.breaths = event;
      this.notCorrentNumberError = false;
    } else {
      this.notCorrentNumberError = true;
    }
  }

  activateBreathing() {
    this.isAnimationActive = true;
    setTimeout(() => {
      this.isBreathingMode = true;
      this.breathe();
    }, 5000);
  }

  handleBreathingActivation() {
    if (Number(this.breaths) > MAX_BREATHS) {
      this.maxBreathsExceeded = true;
    } else {
      this.activateBreathing();
    }
  }

  constructor(private breathService: BreathService) {}

  validateBreathsCount(breathsCount: any) {
    if (!isNaN(breathsCount)) {
      if (breathsCount > MAX_BREATHS) {
        return false;
      }
    }
    return true;
  }
}
