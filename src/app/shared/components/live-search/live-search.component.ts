import { Component, ElementRef, EventEmitter, Input, Output, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-live-search',
  templateUrl: './live-search.component.html',
  styleUrls: ['./live-search.component.css']
})
export class LiveSearchComponent {

  @Input()
  name: string = null;

  @Input()
  id: string = null;

  @Input()
  label: string = null;

  @Input()
  inputreference: ElementRef = null;

  @Output()
  itemSelected: EventEmitter<any> = new EventEmitter<any>(); 

  constructor(
    private renderer: Renderer2
  ) {}

  onSelectItem(event) {
    this.itemSelected.emit(event);
  }
  
}