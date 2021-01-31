import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [
    `
      h1 {
        color: dodgerblue;
      }
    `,
  ],
})
export class AppComponent {
  private actualPage: string = 'recipes';

  public onChangePage(page: string): void {
    this.actualPage = page;
  }

  public getActualPage(): string {
    return this.actualPage;
  }
}
