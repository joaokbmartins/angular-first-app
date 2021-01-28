import {
  Directive,
  HostListener,
  ElementRef,
  Input,
  HostBinding
} from '@angular/core';

@Directive({
  selector: '[appToggleDrop]'
})
export class ToggleDropDirective {

  static readonly CLOSED = false;
  static readonly OPPEND = true;

  @HostBinding('class.open')
  private dropStatus = ToggleDropDirective.CLOSED;

  // On click outside the dropdown closes it;
  // constructor(private elRef:ElementRef) {}
  // @HostListener('document:click', ['$event'])
  // toggleOpen(event: Event) {
  //   this.dropStatus = this.elRef.nativeElement.contains(event.target) ? !this.dropStatus : false;
  // }
  
  @HostListener('click')
  public toggleDropdown(): void {
    this.dropStatus = this.dropStatus ==
      ToggleDropDirective.CLOSED ? ToggleDropDirective.OPPEND : ToggleDropDirective.CLOSED;
  }

  @HostListener('mouseleave')
  public mouseLeave() {
    this.dropStatus = ToggleDropDirective.CLOSED;
  }



}