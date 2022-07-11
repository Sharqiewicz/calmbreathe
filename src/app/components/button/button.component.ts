import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Themes } from '../../../../types';
import { getSecondaryColorFromTheme } from '../../../../utils';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() text!: string;
  @Input() theme!: Themes;
  @Output() onClick = new EventEmitter<null>();

  color = getSecondaryColorFromTheme(this.theme);

  constructor() {}

  ngOnInit(): void {}

  click() {
    this.onClick.emit();
  }
}
