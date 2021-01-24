import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css'],
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
  // testVal: number = 5;

  public onChangePage(page: string): void {
    this.actualPage = page;
    // console.log(page);
  }

  public getActualPage(): string {
    return this.actualPage;
  }
}
