import { Component } from '@angular/core';
import { Themes } from '../../types';
import { BreathService } from './services/breath.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  theme: Themes = Themes.PRIMARY;

  activeAnimation: string = '';
  isBreathingMode: boolean = false;
  maxBreathsExceeded: boolean = false;
  notCorrentNumberError: boolean = false;
  breaths: string = '0';

  setBreaths(event: string) {
    console.log({ event });
    if (!isNaN(Number(event))) {
      this.breaths = event;
      this.notCorrentNumberError = false;
    } else {
      this.notCorrentNumberError = true;
    }
  }

  activateBreathing(event: any) {
    console.log({ event });
    console.log('activate breathing!');
  }

  constructor(private breathService: BreathService) {}

  validateBreathsCount(breathsCount: any) {
    if (!isNaN(breathsCount)) {
      if (breathsCount > 100) {
        return false;
      }
    }
    return true;
  }
}
