import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})

export class HeaderComponent { 
  private collapsed:boolean = true;

  @Output()
  private changePage:EventEmitter<string> = new EventEmitter<string>();

  public onChangePage(page: string): void{
    this.changePage.emit(page);
  }

  public getCollapsed(): boolean {
    return this.collapsed;
  }

  public setCollapsed(collapsed: boolean): void{
    this.collapsed = collapsed;
  }

}