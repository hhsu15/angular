import { Component, OnInit, Input } from '@angular/core';

import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  constructor() {}
  @Input() label = '';
  @Input() control: any;
  @Input() inputType: any;

  ngOnInit(): void {}
  showErrors() {
    const { errors, dirty, touched } = this.control;
    return errors && touched && dirty;
  }
}
