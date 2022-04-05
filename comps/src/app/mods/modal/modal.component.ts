import {
  Component,
  OnInit,
  ElementRef,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @Output() close = new EventEmitter();

  constructor(private el: ElementRef) {
    // console.log(el.nativeElement);
  }

  ngOnInit(): void {
    // this will let your model display correct in the middle of the screen
    document.body.appendChild(this.el.nativeElement);
  }

  ngOnDestroy() {
    this.el.nativeElement.remove();
  }

  onCloseClick() {
    this.close.emit();
  }
}
