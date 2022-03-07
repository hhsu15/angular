import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  password = '';
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;
  length = 0;

  onButtonClick() {
    console.log('include num:', this.includeNumbers);
    const numbers = '1234567890';
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const symbols = '!@#$%^&()';

    let validChars = '';
    if (this.includeLetters) {
      validChars += letters;
    }
    if (this.includeNumbers) {
      validChars += numbers;
    }
    if (this.includeSymbols) {
      validChars += symbols;
    }

    let generatedPassword = '';

    if (validChars) {
      for (let i = 0; i < this.length; i++) {
        const index = Math.floor(Math.random() * validChars.length);

        generatedPassword += validChars[index];
      }
      this.password = generatedPassword;
    }
  }

  onChangeLetters(event: any) {
    this.includeLetters = event.target.checked;
  }

  onChnageNumbers(event: any) {
    this.includeNumbers = event.target.checked;
  }

  onChangeSymbols(event: any) {
    this.includeSymbols = event.target.checked;
  }

  getPassword() {
    return this.password;
  }

  onChangeLength(event: any) {
    console.log(event.target.value);
    const value = event.target.value;
    const parsedValue = parseInt(value);

    if (!isNaN(parsedValue)) {
      this.length = parsedValue;
    }
  }
}
