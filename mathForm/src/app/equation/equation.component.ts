import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, AbstractControl } from '@angular/forms';
import { MathValidators } from '../math-validators';
import { filter, delay, scan } from 'rxjs/operators';

@Component({
  selector: 'app-equation',
  templateUrl: './equation.component.html',
  styleUrls: ['./equation.component.css']
})
export class EquationComponent implements OnInit {
  constructor() {}

  secondsPersolution = 0;

  mathForm = new FormGroup(
    {
      a: new FormControl(this.randomNumber()),
      b: new FormControl(this.randomNumber()),
      answer: new FormControl('')
    },
    [MathValidators.addition('answer', 'a', 'b')]
  );
  ngOnInit(): void {
    this.mathForm.statusChanges
      .pipe(
        filter(value => value === 'VALID'),
        delay(500),
        // scan
        // https://www.learnrxjs.io/learn-rxjs/operators/transformation/scan
        // first argument is the previous value
        scan(
          acc => {
            return {
              numberSolved: acc.numberSolved + 1,
              startTime: acc.startTime
            };
          },
          { numberSolved: 0, startTime: new Date() }
        )
      )
      .subscribe(({ numberSolved, startTime }) => {
        this.secondsPersolution =
          (new Date().getTime() - startTime.getTime()) / numberSolved / 1000;

        // you can also use .setValue but then you will need to set values
        // for all controls in the form
        this.mathForm.patchValue({
          a: this.randomNumber(),
          b: this.randomNumber(),
          anser: ''
        });
      });
  }

  get a() {
    // same as this.mathForm.controls.a.value
    return this.mathForm.value.a;
  }
  get b() {
    return this.mathForm.controls.b.value;
  }
  randomNumber() {
    return Math.ceil(Math.random() * 10);
  }
}
