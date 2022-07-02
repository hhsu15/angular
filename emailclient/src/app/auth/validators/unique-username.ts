import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors, Validator } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AsyncValidator } from '@angular/forms';
import { catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';
import { AuthService } from '../auth.service';

@Injectable({ providedIn: 'root' })
export class UniqueUsername implements AsyncValidator {
  constructor(private authService: AuthService) {}

  validate = (control: AbstractControl) => {
    const { value } = control;
    return this.authService.usernameAvailable(value).pipe(
      map(value => {
        if (value.available) {
          return null;
        } else {
          return null;
        }
      }),
      catchError(err => {
        //   if (err.error.username) {
        //     return of({ nonUniqueUsername: true });
        //   }
        console.log(err);
        // "of" is a shorttcut to return an observable
        if (err.error.username) {
          return of({ nonUniqueUsername: true });
        } else {
          return of({ noConnection: true });
        }
      })
    );
  };
}
