import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-spinner',
  templateUrl: './input-spinner.component.html',
  styleUrls: ['./input-spinner.component.css'],
})
export class InputSpinner implements OnInit {
  @Output("amountUpdated")
  emitAmountUpdated: EventEmitter<number> = new EventEmitter<number>();

  @Input() itemInitialAmount: number = 0;

  timerAmountManagement = null;

  constructor() {}

  ngOnInit() {}

  onBtnIncrease(event: Event): void {
    if (event['button'] === 0) {
      if (this.itemInitialAmount < 99) {
        this.increaseAmount();
        this.timerAmountManagement = setInterval(() => {
          this.increaseAmount();
          if (this.itemInitialAmount >= 99) {
            this.stopTimer();
          }
        }, 300);
      }
    }
  }

  onBtnDecrease(event: Event): void {
    if (event['button'] === 0) {
      if (this.itemInitialAmount > 1) {
        this.decreaseAmount();
        this.timerAmountManagement = setInterval(() => {
          if (this.itemInitialAmount > 1) {
            this.decreaseAmount();
          } else {
            this.stopTimer();
            this.confirmRemoveItemFromList();
          }
        }, 300);
      } else {
        this.confirmRemoveItemFromList();
      }
    }
  }

  confirmRemoveItemFromList() {
    if (confirm('Remove item from list?')) {
      this.decreaseAmount();
    }
  }

  stopTimer(): void {
    clearInterval(this.timerAmountManagement);
    this.timerAmountManagement = null;
  }

  increaseAmount() {
    this.itemInitialAmount += 1;
    this.emitAmountUpdated.emit(this.itemInitialAmount);
  }

  decreaseAmount() {
    this.itemInitialAmount -= 1;
    this.emitAmountUpdated.emit(this.itemInitialAmount);
  }
}
