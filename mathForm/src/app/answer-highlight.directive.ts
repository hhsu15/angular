import { Directive, ElementRef } from '@angular/core';
import { NgControl } from '@angular/forms';
import { map } from 'rxjs/operators';

@Directive({
  selector: '[appAnswerHighlight]'
})
export class AnswerHighlightDirective {
  constructor(private el: ElementRef, private controlName: NgControl) {
    // console.log(controlName);
  }
  ngOnInit() {
    // access valueChange observable for the FormGroup (i.e., parent of a given control)
    // the observable provides values for all the controls
    this.controlName.control?.parent?.valueChanges
      .pipe(
        map(val => {
          console.log('show me', val);
          return val;
        }),
        map(({ a, b, answer }) => {
          let val = {
            answer: answer,
            value: Math.abs((a + b - answer) / (a + b))
          };
          return val;
        })
      )
      .subscribe(({ value, answer }) => {
        if (answer === '') {
          this.el.nativeElement.classList.remove('off');
          this.el.nativeElement.classList.remove('close');
          return;
        }
        if (value < 0.2) {
          this.el.nativeElement.classList.remove('off');
          this.el.nativeElement.classList.add('close');
        } else {
          this.el.nativeElement.classList.remove('close');
          this.el.nativeElement.classList.add('off');
        }
      });
  }
}
