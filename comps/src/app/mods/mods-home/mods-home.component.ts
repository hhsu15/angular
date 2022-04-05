import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css']
})
export class ModsHomeComponent implements OnInit {
  modalOpen = false;
  items = [
    { title: 'why is the sky blue', content: 'because it is' },
    { title: 'why is the man blue', content: 'because it is' },
    { title: 'why is the dog blue', content: 'because it is' }
  ];

  constructor() {}

  ngOnInit(): void {}
  onClickModal() {
    // toggle back and forth
    this.modalOpen = !this.modalOpen;
  }
}
