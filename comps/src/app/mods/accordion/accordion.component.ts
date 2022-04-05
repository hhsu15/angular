import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit {
  @Input() items: any = [];
  openItemIndex?: number;
  constructor() {}

  ngOnInit(): void {}
  onClick(i: number) {
    if (i === this.openItemIndex) {
      this.openItemIndex = -1;
    } else {
      this.openItemIndex = i;
    }
  }
}
