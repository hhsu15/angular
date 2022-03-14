import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name?: string;
  dateStr?: string;
  amount?: number;
  miles?: number;

  car = {
    brand: 'Toyota',
    year: 2020,
    model: 'camary'
  };

  onNameChange(event: any) {
    const val = event.target.value;
    this.name = val;
  }
  onDateChange(event: any) {
    const val = event.target.value;
    this.dateStr = val;
  }
  onAmountChange(event: any) {
    const val = event.target.value;
    this.amount = parseFloat(val);
  }

  onMilesChange(event: any) {
    const val = event.target.value;
    this.miles = parseFloat(val);
  }
}
