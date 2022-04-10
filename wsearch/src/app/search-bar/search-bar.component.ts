import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  term = '';
  constructor() {}
  // means the event will emit string
  @Output() submitted = new EventEmitter<string>();

  onInput(e: any) {
    this.term = e.target.value;
    // console.log(this.term);
  }

  onFormSubmit(event: any) {
    event.preventDefault();
    this.submitted.emit(this.term);
  }

  ngOnInit(): void {}
}
