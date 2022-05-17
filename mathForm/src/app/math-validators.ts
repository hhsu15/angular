import { AbstractControl } from '@angular/forms';

export class MathValidators {
  static addition(target: string, sourceOne: string, sourceTwo: string) {
    return (form: AbstractControl) => {
      const sum = form.value[target];
      const s1 = form.value[sourceOne];
      const s2 = form.value[sourceTwo];

      if (s1 + s2 !== parseInt(sum)) {
        return { addition: true }; // this is going to the errors property
      }
      return null;
    };
  }

  static substraction() {}
}

export const mathValidatiors = new MathValidators();
