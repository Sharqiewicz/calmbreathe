import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { InputComponent } from './components/input/input.component';
import { LogoComponent } from './components/logo/logo.component';
import { BreathService } from './services/breath.service';
import { BreatherComponent } from './components/breather/breather.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, ButtonComponent, InputComponent, LogoComponent, BreatherComponent],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  providers: [BreathService],
  bootstrap: [AppComponent],
})
export class AppModule {}
