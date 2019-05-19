import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})

export class ModalComponent {
  @Input() rowObj: any;
  @Output() hideModal = new EventEmitter<boolean>();

  constructor() { }

  hidePopup() {
    this.hideModal.emit();
  }
}
