import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor() {}
  @Output() getPhoto = new EventEmitter();
  @Input() photoUrl: any;

  onGetPhoto() {
    this.getPhoto.emit();
  }

  ngOnInit(): void {}
}
