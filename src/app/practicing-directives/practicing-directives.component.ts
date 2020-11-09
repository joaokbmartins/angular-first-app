import { Component } from '@angular/core';

@Component ({
  selector: 'app-practicing-directives',
  templateUrl: './practicing-directives.component.html',
  styles: [`
    .whiteLog {
      color: white;
    }
  `]
})
export class PracticingDirectivesComponent {

  displayDetails:boolean = false;
  accessLog:Array<string> = null;

  constructor() {
    this.accessLog = new Array<string>();
  }

  onDisplayDetails():void {
    this.displayDetails = !this.displayDetails;
    if (this.displayDetails){
      // this.accessLog.push((this.accessLog.length + 1) + " - " + new Date());
      this.accessLog.push(new Date().toString());
    }
    console.log(this.accessLog.length)
  }

}