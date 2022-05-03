import { FormControl } from '@angular/forms';

export class DateFormControl extends FormControl {
  // override setValue method from FormControl
  setValue(value: string | null, options: any) {
    if (!value) {
      super.setValue('', {
        ...options,
        emitModelToViewChange: true
      });
      return;
    }
    // prevent the user from enttering anything that's not a number
    if (value.match(/[^0-9|\/]/gi)) {
      super.setValue(this.value, {
        ...options,
        emitModelToViewChange: true
      });
      return;
    }
    // prevent the user from entering anything once the full length is reached
    if (value.length > 5) {
      super.setValue(this.value, {
        ...options,
        emitModelToViewChange: true
      });
      return;
    }

    // allow user to delete "/"
    if (value.length === 2 && this.value.length === 3) {
      // invoke the setValue from the super class FormControl
      super.setValue(value, {
        ...options,
        emitModelToViewChange: true
      });
      return;
    }
    // automatically add "/" once user enters two characters
    if (value.length === 2) {
      // invoke the setValue from the super class FormControl
      super.setValue(value + '/', {
        ...options,
        emitModelToViewChange: true
      });
      return;
    }

    super.setValue(value, { ...options, emitModelToViewChange: true });
  }
}
