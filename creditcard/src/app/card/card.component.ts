import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  constructor() {}

  @Input() name: any;
  @Input() cardNumber: any;
  @Input() expiration: any;

  ngOnInit(): void {}
}
