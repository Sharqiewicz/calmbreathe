import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent {
  constructor() {}

  @Input() validate!: Function;
  @Input() type!: string;

  @Output() setValue = new EventEmitter<string>();

  onChange(event: Event) {
    const input = event.target as HTMLInputElement;

    if (!this.validate || (this.validate && this.validate())) {
      this.setValue.emit(input.value);
    }
  }
}
