import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appToggleDrop]',
})
export class ToggleDropDirective {
  static readonly CLOSED = false;
  static readonly OPPEND = true;

  @HostBinding('class.open')
  private dropStatus = ToggleDropDirective.CLOSED;

  @HostListener('click')
  public toggleDropdown(): void {
    this.dropStatus =
      this.dropStatus == ToggleDropDirective.CLOSED
        ? ToggleDropDirective.OPPEND
        : ToggleDropDirective.CLOSED;
  }

  @HostListener('mouseleave')
  public mouseLeave() {
    this.dropStatus = ToggleDropDirective.CLOSED;
  }
}
